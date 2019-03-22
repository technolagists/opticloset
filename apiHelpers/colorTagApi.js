require('dotenv').config();
const fs = require('fs');

const axios = require('axios');
const FormData = require('form-data');

const formData = new FormData();
formData.append('image', fs.createReadStream('./apiHelpers/images/IMG_4194.jpg'));


const detectColorsWithImage = callback => axios.post('https://apicloud-colortag.p.rapidapi.com/tag-file.json', formData, {
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

const detectColorsWithUrl = (url) => {
  return axios.get('https://apicloud-colortag.p.mashape.com/tag-url.json', {
    params: {
      url,
    },
    headers: {
      'X-RapidAPI-Key': process.env.COLORTAG_API_KEY,
    },
  })
    .then(response => response.data.tags)
    .catch((error) => {
      console.log(error);
    });
};

// detectColorsWithUrl('http://d2f1mfcynop4j.cloudfront.net/999181/20190318/457836951/0c8fd351af7d4f05a5694d9d426af49f_RES.jpg');

module.exports.detectColorsWithImage = detectColorsWithImage;
module.exports.detectColorsWithUrl = detectColorsWithUrl;
