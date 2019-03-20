require('dotenv').config();
const axios = require('axios');

module.exports.getWeather = (latLong) => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latLong.latitude}&lon=${latLong.longitude}&units=imperial&APPID=${process.env.OPEN_WEATHER_API_KEY}`,
    )
    .then((response) => {
      const result = {
        temp: response.data.main.temp,
        weather: response.data.weather[0].description,
      };
      return result;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
