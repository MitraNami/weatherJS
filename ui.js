class UI {
  constructor() {
    this.weatherDisplay = document.getElementById('w-result');
  }

  paint(data) {
    //Deconstruct the obj to get the desired variables
    const {
      name,
      weather: [{description, icon}],
      main: {temp, feels_like, temp_min, temp_max, humidity},
      sys: {country}
    } = data;
    const imgSrc = `http://openweathermap.org/img/w/${icon}.png`;
    //Create a template
    const weatherInfo = `
      <h1>${name}, ${country}</h1>
      <h3 class="text-dark">${description}<h3>
      <h3>${temp} C</h3>
      <img src=${imgSrc} />
      <ul class="list-group">
        <li class="list-group-item">Feels Like: ${feels_like} C</li>
        <li class="list-group-item">Humidity: ${humidity}%</li>
        <li class="list-group-item">Min: ${temp_min} C</li>
        <li class="list-group-item">Max: ${temp_max} C</li>
      </ul>
    
    `;
    //Insert the template
    this.weatherDisplay.innerHTML = weatherInfo;
  }


}