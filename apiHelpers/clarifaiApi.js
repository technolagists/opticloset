
// Install the client from NPM

// npm install clarifai

// Require the client
// Clarifai prefers users to use the Clarifai 'client' than 'raw' http requests (example at the bottom of the page)
const Clarifai = require('clarifai')

const app = new Clarifai.App({ apiKey: 'YOUR_API_KEY' });

app.models.initModel({ id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40" })
  .then(generalModel => {
    return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
  })
  .then(response => {
    var concepts = response['outputs'][0]['data']['concepts']
  })

const Clarifai = process.env.TRAVIS ? require('clarifai') : require('../src');

const clarifai = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

function log(d) {
  try {
    console.log(JSON.stringify(d, null, 2));
  } catch (e) {
    console.log(d);
  }
}

// Prediction on general model using video API
clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/3o6gb3kkXfLvdKEZs4.gif', { video: true })
  .then(log)
  .catch(log);


// Provide feedback
clarifai.models.feedback(Clarifai.GENERAL_MODEL, 'https://s3.amazonaws.com/samples.clarifai.com/metro-north.jpg', {
  id: 'ea68cac87c304b28a8046557062f34a0',
  data: {
    concepts: [
      { 'id': 'train', 'value': true },
      { 'id': 'car', 'value': false }
    ]
  },
  info: {
    'endUserId': '{end_user_id}',
    'sessionId': '{{session_id}}',
    'outputId': '{{output_id}}'
  }
})
  .then(log)
  .catch(log);


// var request = require("request");

// var options = {
//   method: 'POST',
//   url: 'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs',
//   headers:
//   {
//     'Postman-Token': 'cdd9f782-280b-420a-87f6-38b2893b2482',
//     'cache-control': 'no-cache',
//     'Content-Type': 'application/json',
//     Authorization: 'Key 11c2560632dc453f83ec8350f2143817'
//   },
//   body: '{\r\n      "inputs": [\r\n        {\r\n          "data": {\r\n            "image": {\r\n              "url": "https://samples.clarifai.com/metro-north.jpg"\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    }\''
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
