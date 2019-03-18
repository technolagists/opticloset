require('dotenv').config();
const axios = require('axios');

// This one does work
const removeBackground = (url) => {
  return axios({
    method: 'post',
    url: 'https://api.malabi.co/v1/images',
    headers: {
      'x-api-key': process.env.MALABI_API_KEY,
      'x-api-id': process.env.MALABI_API_ID,
    },
    data: {
      image_url: url,
      callback_url: 'https://www.test.com/test',
      settings: {
        shadow: 'drop',
        background: 'white',
      },
    },
  })
    .then((response) => {
      const result = {
        image_url: response.data.image.result_image_url,
      };
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.removeBackground = removeBackground;
