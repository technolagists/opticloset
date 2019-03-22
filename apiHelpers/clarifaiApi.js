require("dotenv").config();
const Clarifai = require('clarifai');

const app = new Clarifai.App({ apiKey: process.env.CLARIFAI_API_KEY });

const detectItemCategory = (url) => {
  return app.models
    .initModel({
      id: Clarifai.GENERAL_MODEL,
      version: 'aa7f35c01e0642fda5cf400f543e7c40',
    })
    .then(generalModel => generalModel.predict(url))
    .then((response) => {
      const results = response.outputs[0].data.concepts;
      console.log(results);
      return results;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

// const testUrl = 'https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250';
// detectItemCategory(testUrl);

module.exports.detectItemCategory = detectItemCategory;
