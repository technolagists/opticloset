require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const dbhelper = require('../db/dbhelpers.js');
const dbDefaultData = require('../db/defaultData.js');
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
  console.log('weather request recvd');
  const latLong = req.query;
  openWeatherApi.getWeather(latLong).then((weather) => {
    console.log('sending weather');
    res.status(200).send(weather);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Something went wrong!');
  });
});


// POST REQUESTS

// create new user
app.post('/users', (req, res) => {
  // get username and location from req.body
  const { username } = req.body;
  // add user to db
  db.User.findOrCreate({
    where: {
      username,
    },
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
app.get('/closet/:username', (req, res) => {
  // console.log(req.params.userId);
  const { username } = req.params;
  dbhelper.getClosetByUser(username, false, (error, closet) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    }
    res.send(closet);
  });
});

app.get('/closet/:username/selling', (req, res) => {
  // console.log(req.params.userId);
  const { username } = req.params;
  dbhelper.getClosetByUser(username, true, (error, closet) => {
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

// update clothing_item in user's closet
app.put('/closet/:userId', (req, res) => {
  const { userId } = req.params;
  const {
    id_clothing_item,
    id_category,
    price,
    id_image,
    count_worn,
    id_occasion,
    attribute,
    color,
    category,
  } = req.body;

  db.Clothing_Item.update(
    {
      id_user: userId,
      id_category,
      price,
      id_image,
      count_worn,
      id_occasion,
      attribute,
      color,
      category,
    } /* set attributes' value */,
    { where: { id_clothing_item } },
  )
    .then((result) => {
      // returns to client record deleted
      console.log('result from DB update', result);
      if (result[0] === 1) {
        // if item has been updated
        res.sendStatus(202);
      } else {
        // if the item cannot be updated
        res.sendStatus(500);
      }
    })
    .catch((err) => {
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

const wait = (ms = 3000) => new Promise(res => setTimeout(res, ms));

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
      return wait();
    })
    .then(() => {
      return colorDetectionApi.detectColorsWithUrl(cleanUrl);
    })
    .then((colors) => {
      colorsOptions = colors;
      return categoryDetectionApi.detectItemCategory(cleanUrl);
    })
    .then((categories) => {
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
  // adds categories, occasions, attributes, colors, and imgs
  // adds clothing items
  Promise.all([dbDefaultData.starterDbInfo(), dbDefaultData.starterClothes()]).then((results) => {
    res.send('default data inserted into db');
  });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
