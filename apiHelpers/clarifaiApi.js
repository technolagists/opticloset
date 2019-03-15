require("dotenv").config();
const Clarifai = require('clarifai');

const app = new Clarifai.App({ apiKey: process.env.CLARIFAI_API_KEY });

const detectItemCategory = (url, callback) => {
  return app.models
    .initModel({
      id: Clarifai.GENERAL_MODEL,
      version: 'aa7f35c01e0642fda5cf400f543e7c40',
    })
    .then((generalModel) => {
      return generalModel.predict(url);
    })
    .then((response) => {
      const results = response.outputs[0].data.concepts;
      callback(null, results);
    })
    .catch((error) => {
      callback(error, null);
    });
};

// const testUrl = 'https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250';
// detectItemCategory(testUrl, (err, res) => {
//   console.log(err, res);
// });

module.exports.detectItemCategory = detectItemCategory;
