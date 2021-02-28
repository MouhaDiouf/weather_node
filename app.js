const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=760b51597b5e5981e030e75a02922d64&query=37.8267,-122.4233';

request(
  {
    url,
  },
  (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
  }
);
