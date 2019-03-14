const fs = require('fs');

const axios = require('axios');
const FormData = require('form-data');
// const data = new FormData();

// data.append("action", "ADD");
// data.append("param", 0);
// data.append("secondParam", 0);
// data.append("file", new Blob(["test payload"], { type: "text/csv" }));

// axios.post("http://httpbin.org/post", data);

// const file = new Blob([files[0]], { type: 'image/jpg' });// WORKS much better (if you know what MIME type you want.

const formData = new FormData();
formData.append('image', fs.createReadStream('./apiHelpers/images/fullsizeoutput_1ab2.jpeg'));
// axios.post('https://apicloud-colortag.p.rapidapi.com/tag-file.json', formData, {})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  
const options = {
  method: 'POST',
  url: 'https://apicloud-colortag.p.rapidapi.com/tag-file.json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'f90e2a60damsh00f3575444e4362p13c5acjsn6a6363fc5a78',
    'content-type':
      'multipart/form-data',
  },
  data: formData,
};

const detectColors = (callback) => {
  return axios(options)
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });



    // .then((results) => {
    //   console.log(results);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   return callback(err, null);
    // });
};

detectColors(() => { console.log('got an error'); });
