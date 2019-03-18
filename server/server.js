require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const dbhelper = require('../db/dbhelpers.js');
// const sampleData = require('../sampleData.js');
const openWeatherApi = require('../apiHelpers/openWeatherApi');
const categoryDetectionApi = require('../apiHelpers/clarifaiApi');
const backgroundRemovalApi = require('../apiHelpers/malabiApi');
const colorDetectionApi = require('../apiHelpers/colorTagApi');

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// GET REQUESTS

// default response
app.get('/', (req, res) => {
  res.send('hello world!');
});

// testing endpoint for db helper
app.get('/test', (req, res) => {
  
});

// Client requesting the weather conditions with a GET request at '/weather' endpoint
app.get('/weather', (req, res) => {
  openWeatherApi.getWeather((err, result) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(result);
    }
  });
});


// POST REQUESTS

// create new user
app.post('/users', (req, res) => {
  // get username and location from req.body
  const { username, location } = req.body;
  // add user to db
  db.User.create({
    username,
    location,
  }).then((result) => {
    // send confirmation to client that user was added successfully
    res.send(`${JSON.stringify(result.dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// get the entire closet for one user
app.get('/closet/:userId', (req, res) => {
  // console.log(req.params.userId);
  const { userId } = req.params;
  dbhelper.getClosetByUser(userId, (error, closet) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(closet);
  });
});

// add clothing_item to user's closet
app.post('/closet/:userId', (req, res) => {
  // console.log(req.params.userId);
  const { userId } = req.params;
  const {
    id_category, price, id_image, count_worn, id_occasion, attribute, color,
  } = req.body;
  db.Clothing_Item.findOrCreate({
    where: {
      id_user: userId,
      id_category,
      price,
      id_image,
      count_worn,
      id_occasion,
      attribute,
      color,
    },
  })
    .then((result) => {
      res.send(`${JSON.stringify(result[0].dataValues)}`);
    }).catch((err) => {
    // log error and send status response to client
      console.error(err);
      res.sendStatus(500);
    });
});

// clothing_item in user's closet as worn
app.post('/closet/:userId/worn', (req, res) => {
  // const { userId } = req.params;
  const { clothingId } = req.body;
  dbhelper.updateClothingAsWorn(clothingId).then((result) => {
    // returns to client record with updated worn count
    res.send(result);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// remove clothing_item from user's closet
app.delete('/closet/:userId', (req, res) => {
  // const { clothingId } = req.params;
  const { clothingItemId } = req.body;
  dbhelper.deleteItem(clothingItemId).then((result) => {
    // returns to client record deleted
    if (result === 1) {
      // if item has been deleted
      res.sendStatus(202);
    } else {
      // if the item cannot be deleted
      res.sendStatus(500);
    }
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});


// add new occasion
app.post('/occasions', (req, res) => {
  // get occasion from req.body
  const { type } = req.body;
  // use findOrCreate - if record exists, return record, if it does not exist, create record
  db.Occasion.findOrCreate({
    where: { type },
  })
    .then((result) => {
    // send confirmation to client that occasion was added or found successfully
      res.send(`${JSON.stringify(result[0].dataValues)}`);
    }).catch((err) => {
    // log error and send status response to client
      console.error(err);
      res.sendStatus(500);
    });
});

// add new attribute
app.post('/attributes', (req, res) => {
  // get attribute from req.body
  const { type } = req.body;
  // use findOrCreate - if record exists, return record, if it does not exist, create record
  db.Attribute.findOrCreate({
    where: { type },
  }).then((result) => {
    // send confirmation to client that attribute was added/found successfully
    res.send(`${JSON.stringify(result[0].dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// add new color
app.post('/colors', (req, res) => {
  // get color from req.body
  const { type } = req.body;
  // use findOrCreate - if record exists, return record, if it does not exist, create record
  db.Color.findOrCreate({
    where: { type },
  }).then((result) => {
    // send confirmation to client that color was added/found successfully
    res.send(`${JSON.stringify(result[0].dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// add new category
app.post('/categories', (req, res) => {
  // get category from req.body
  const { type } = req.body;
  // use findOrCreate - if record exists, return record, if it does not exist, create record
  db.Category.findOrCreate({
    where: { type },
  }).then((result) => {
    // send confirmation to client that category was added/found successfully
    res.send(`${JSON.stringify(result[0].dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// add new img
app.post('/imgs', (req, res) => {
  // get category from req.body
  const { img_url_fullsize_clean, img_url_fullsize_og, img_url_thumbnail} = req.body;
  // use findOrCreate - if record exists, return record, if it does not exist, create record
  db.Img.findOrCreate({
    where: {
      img_url_fullsize_clean,
      img_url_fullsize_og,
      img_url_thumbnail,
    },
  }).then((result) => {
    // send confirmation to client that img was added/found successfully
    res.send(`${JSON.stringify(result[0].dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// when receiving cloudinary url from client
app.post('/clothingImage/:UserId', (req, res) => {
  const { url } = req.body.response;
  let colorsOptions;
  let cleanUrl;
  console.log(url);
  // sending the cloudinary url to the background removal api
  // send the url provided by the background removal api to :
  // 1) the color detection api
  // 2) the category detector api
  backgroundRemovalApi.removeBackground(url)
    .then((result) => {
      cleanUrl = result.image_url;
      return colorDetectionApi.detectColorsWithUrl(cleanUrl);
    }).then((colors) => {
      colorsOptions = colors;
      return categoryDetectionApi.detectItemCategory(cleanUrl);
    }).then((categories) => {
      const result = {
        categories,
        colorsOptions,
        cleanUrl,
      };
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});


// add starter data to database
app.get('/default', (req, res) => {
  // db.User.create({
  //   username: 'Laura',
  //   location: 'San Diego',
  // });

  // db.Category.create({ type: 'top' }); // id 1
  // db.Category.create({ type: 'top' }); // id 2
  // db.Category.create({ type: 'one-piece' }); // id 3
  // db.Category.create({ type: 'outerware' }); // id 4
  // db.Category.create({ type: 'accessory' }); // id 5
  // db.Category.create({ type: 'bottom' }); // id 6

  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727035/shirt2.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });
  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552726975/shirt-1.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });
  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727112/dress-1.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });
  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727133/outerwear-1.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });
  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727208/acc-1.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });
  // db.Img.create({
  //   img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727242/bottom-1.png',
  //   img_url_fullsize_og: 'img url - OG',
  //   img_url_thumbnail: 'img url - thumbnail',
  // });

  // db.Occasion.create({ type: 'casual' });
  // db.Occasion.create({ type: 'professional' });
  // db.Occasion.create({ type: 'dressy' });
  // db.Occasion.create({ type: 'cocktail' });
  // db.Occasion.create({ type: 'formal' });
  // db.Occasion.create({ type: 'office' });

  // db.Attribute.create({ type: 'basic' });
  // db.Attribute.create({ type: 'comfortable' });
  // db.Attribute.create({ type: 'heavy' });
  // db.Attribute.create({ type: 'tight' });
  // db.Attribute.create({ type: 'short' });
  // db.Attribute.create({ type: 'long' });

  // db.Color.create({ type: 'dark blue' });
  // db.Color.create({ type: 'white' });
  // db.Color.create({ type: 'forest green' });
  // db.Color.create({ type: 'black' });
  // db.Color.create({ type: 'baby pink' });
  // db.Color.create({ type: 'gold' });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 1,
    id_occasion: 1,
    attribute: 'casual, cocktail',
    id_image: 1,
    color: 'black, grey',
    price: 100,
    count_worn: 0,
  });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 2,
    id_occasion: 2,
    attribute: 'office, professional',
    id_image: 2,
    color: 'pink, grey',
    price: 50,
    count_worn: 0,
  });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 3,
    id_occasion: 3,
    attribute: 'dressy, office',
    id_image: 3,
    color: 'dark blue, black',
    price: 120,
    count_worn: 0,
  });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 4,
    id_occasion: 4,
    attribute: 'casual',
    id_image: 4,
    color: 'white',
    price: 10,
    count_worn: 0,
  });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 5,
    id_occasion: 5,
    attribute: 'dressy',
    id_image: 5,
    color: 'gold',
    price: 60,
    count_worn: 0,
  });

  db.Clothing_Item.create({
    id_user: 1,
    id_category: 6,
    id_occasion: 6,
    attribute: 'cocktail',
    id_image: 6,
    color: 'forest green',
    price: 120,
    count_worn: 0,
  });

  res.send('default data inserted into db');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
