require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const dbhelper = require('../db/dbhelpers.js');
const sampleData = require('../sampleData.js');
const openWeatherApi = require('../apiHelpers/openWeatherApi');

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
  const { info } = req.body;
  dbhelper.getOccasionById(info, (err, result) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(result);
    }
  });
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
    res.send(`Successful posting of: ${JSON.stringify(result.dataValues)}`);
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
    id_category, price, id_image, count_word 
  } = req.body;
  db.Clothing_Item.findOrCreate({
    where: {
      id_user: userId,
      id_category,
      price,
      id_image,
      count_word,
    },
  })
    .then((result) => {
      res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
    }).catch((err) => {
    // log error and send status response to client
      console.error(err);
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
      res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
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
    res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
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
    res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
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
    res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
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
    res.send(`Successful posting of: ${JSON.stringify(result[0].dataValues)}`);
  }).catch((err) => {
    // log error and send status response to client
    console.error(err);
    res.sendStatus(500);
  });
});

// recieves picture from the client
app.post('/clothingImage', (req, res) => {
  console.log(req.body);
  console.log('we got something');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
