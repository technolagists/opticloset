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

// detectColorsWithUrl('https://res.cloudinary.com/opticloset/image/upload/v1552727242/bottom-1.png');

module.exports.detectColorsWithImage = detectColorsWithImage;
module.exports.detectColorsWithUrl = detectColorsWithUrl;
