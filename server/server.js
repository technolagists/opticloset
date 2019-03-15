require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/database.js');
const sampleData = require('../sampleData.js');
const openWeatherApi = require('../apiHelpers/openWeatherApi');

const PORT = 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// GET REQUESTS

app.get('/', (req, res) => {
  res.send('hello world!');
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

// recieves picture from the client
app.post('/clothingImage', (req, res) => {
  console.log(req.body);
  console.log('we got something');
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
