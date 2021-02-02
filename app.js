// Init Weather obj
const weather = new Weather();
// Init UI obj
const ui = new UI();

// Add EventListener for 'save changes' button in the Modal
// which changes the location
document.getElementById('w-change-btn')
  .addEventListener('click', (evt) => {
    //Close the Modal
    $('#locModal').modal('hide')
  
    const cityInput = document.getElementById('city')
    const countryInput = document.getElementById('country');
   
    const city = cityInput.value;
    const country = countryInput.value;
    
    //fetch weather data and insert them into the DOM
    displayWeather(city, country);
      
  });


//fetch weather data and insert them into the DOM
function displayWeather(city, country) {
  // fetch weather data for this location
  weather.getWeather(city, country)
    .then(data => {
      // Insert the weather data in to the DOM
      ui.paint(data);
    })
    .catch(err => console.log(err));
}