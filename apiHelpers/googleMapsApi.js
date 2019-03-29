require('dotenv').config();
const axios = require('axios');


module.exports.getLocation = (latLong) => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=
      ${latLong.latitude},${latLong.longitude}40.714224,-73.961452&key=${process.env.GOOGLE_GEOCODING_API_KEY}`,
  )
    .then((response) => {
      // const result = {
      //   temp: response.data.list[1].main.temp,
      //   weather: response.data.list[1].weather[0].description
      // };
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
