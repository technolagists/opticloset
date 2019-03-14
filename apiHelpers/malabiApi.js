const axios = require('axios');

// This one should work but doesn't
// const removeBackground = (callback) => {
//   return axios.post('https://api.malabi.co/v1/images', {
//     image_url: 'https://menstyleup.com/wp-content/uploads/2019/01/14745-ce807a.jpeg',
//     callback_url: 'https://www.test.com/test',
//     settings: {
//       shadow: 'drop',
//       background: 'white',
//     },
//   }, {
//       headers: {
//         'x-api-key': 'zAffE5W2i01w0RdgMVIhMa3ok9slTz1j39GzvRaS',
//         'x-api-id': 'ltgf9tbc68',
//       },
//     });
// };

// This one does work
const removeBackground = (callback) => {
  return axios({
    method: 'post',
    url: 'https://api.malabi.co/v1/images',
    headers: {
      'x-api-key': 'zAffE5W2i01w0RdgMVIhMa3ok9slTz1j39GzvRaS',
      'x-api-id': 'ltgf9tbc68',
    },
    data: {
      image_url: 'https://menstyleup.com/wp-content/uploads/2019/01/14745-ce807a.jpeg',
      callback_url: 'https://www.test.com/test',
      settings: {
        shadow: 'drop',
        background: 'white',
      },
    },
  })
    .then((results) => {
      // console.log(results);
      return callback(results);
    })
    .catch((err) => {
      // console.log(err);
      return callback(err, null);
    });
};

// removeBackground(() => console.log('success'));
module.exports.removeBackground = removeBackground;
