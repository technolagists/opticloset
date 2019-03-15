require("dotenv").config();
const axios = require('axios');

const getWeather = (callback) => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=New%20Orleans,%20US&units=imperial&APPID=${process.env.OPEN_WEATHER_API_KEY}`,
    )
    .then((response) => {
      const result = {
        temp: response.data.list[1].main.temp,
        weather: response.data.list[1].weather[0].description,
      };
      callback(null, result);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      callback(error);
    });
};

getWeather(() => {
  console.log('got an error');
});
