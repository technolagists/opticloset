var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {

  console.log("it works!");

  res.send('hello world!')
});

app.listen(process.env.PORT || 8080);