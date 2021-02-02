//Save location in the local storage
function saveLocation(city, country) {
  const location = {city, country};
  localStorage.setItem('location', JSON.stringify(location));
}


//Get location from local storage
// returns {city, country} obj
function getLocation() {
  const location = localStorage.getItem('location');
  if (location) {
    //if the location key exists in local storage
    return JSON.parse(location);
  }
  //location key doesn't exist in local storage(null)
  //set default to kingston, ca
  return {city: 'Kingston', country: 'ca'};
}