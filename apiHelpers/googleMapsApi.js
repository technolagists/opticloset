require('dotenv').config();
const axios = require('axios');


module.exports.getLocation = (latLong) => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=
      ${latLong}&key=${process.env.GOOGLE_GEOCODING_API_KEY}`,
  )
    .then((response) => {
      // const result = {
      //   temp: response.data.list[1].main.temp,
      //   weather: response.data.list[1].weather[0].description
      // };
      return response.data.results[0].formatted_address;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
