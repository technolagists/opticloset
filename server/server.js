require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/database.js');

const PORT = process.env.PORT || 8080;


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('it works!');
  res.send('hello world!');
});

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

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
