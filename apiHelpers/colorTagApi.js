require('dotenv').config();
const fs = require('fs');

const axios = require('axios');
const FormData = require('form-data');

const formData = new FormData();
formData.append('image', fs.createReadStream('./apiHelpers/images/IMG_4194.jpg'));


const detectColors = (callback) => {
  return axios.post('https://apicloud-colortag.p.rapidapi.com/tag-file.json', formData, {
    headers: {
      ...formData.getHeaders(),
      'X-RapidAPI-Key': process.env.COLORTAG_API_KEY,
    },
  })
    .then((response) => {
      callback(null, response.data.tags);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports.detectColors = detectColors;
