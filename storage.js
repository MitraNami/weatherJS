//Save location in the local storage
function saveLocation(city, country) {
  const location = {city, country};
  localStorage.setItem('location', JSON.stringify(location));
}

