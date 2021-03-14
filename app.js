const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
geocode(process.argv[2], (error, data) => {
  if (!process.argv[2]) {
    return console.log("Please provide an address!!");
  }
  if (error) {
    console.log(error);
    return;
  }
  console.log("Error", error);
  console.log("Data", data);
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(`${data.location}`);
    console.log(forecastData);
  });
});
