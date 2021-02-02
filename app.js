// Add EventListener for 'save changes' button in the Modal
// which changes the location
document.getElementById('w-change-btn')
  .addEventListener('click', (evt) => {
    //Close the Modal
    $('#locModal').modal('hide')
    //Get city and country values from Modal inputs
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    //fetch weather data and insert them into the DOM
    displayWeather(city, country);     
  });


// Display the weather for the loacation in local storage after reloading
document.addEventListener('DOMContentLoaded', (evt) => {
  const {city, country} = getLocation();
  displayWeather(city, country);
});
