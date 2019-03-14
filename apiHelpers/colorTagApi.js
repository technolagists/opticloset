const fs = require('fs');

const axios = require('axios');
const FormData = require('form-data');

const formData = new FormData();
formData.append('image', fs.createReadStream('./apiHelpers/images/IMG_4194.jpg'));


const detectColors = (callback) => {
  return axios.post('https://apicloud-colortag.p.rapidapi.com/tag-file.json', formData, {
    headers: {
      ...formData.getHeaders(),
      'X-RapidAPI-Key': 'f90e2a60damsh00f3575444e4362p13c5acjsn6a6363fc5a78',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    });
};


detectColors(() => { console.log('got an error'); });
