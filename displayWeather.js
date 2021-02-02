// Init Weather obj
const weather = new Weather();
// Init UI obj
const ui = new UI();

//fetch weather data and insert them into the DOM
function displayWeather(city, country) {
  // fetch weather data for this location
  weather.getWeather(city, country)
    .then(data => {
      //check if the city was found
      handleInvalidCity(data);
      // Insert the weather data in to the DOM for a valid city name and save the city and country names in local storage
      ui.paint(data);
      saveLocation(city, country);
    })
    .catch(err => console.log(err));
}


//Display an error if the city is not found and remove the error after two seconds
// return true for a valid city
function handleInvalidCity(data) {
  const cod = data.cod;
  if (cod === "404") {
    const msg = data.message;
    ui.showError(msg);
    throw new Error(msg);
  }
  return true;
}