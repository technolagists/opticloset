require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/database.js');

const PORT = process.env.PORT || 8080;


const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {

  console.log("it works!");

  res.send('hello world!')
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
});
