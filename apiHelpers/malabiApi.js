var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.malabi.co/v1/images',
  headers:
  {
    'Postman-Token': 'bf3e72ba-0923-4dbc-91c5-670da62efd22',
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    accept: 'application/json',
    'x-api-key': 'zAffE5W2i01w0RdgMVIhMa3ok9slTz1j39GzvRaS',
    'x-api-id': 'ltgf9tbc68'
  },
  body:
  {
    image_url: 'https://static1.squarespace.com/static/56e8959822482ebf2583402a/572a8f312eeb81370a13d2fb/58fd3dc16a49633370c64658/1492991433378/IMG_1071.JPG.jpeg?format=300w',
    callback_url: 'https://www.test.com/test',
    settings: { shadow: 'drop', background: 'white' }
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
