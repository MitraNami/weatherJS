class Weather {

  constructor() {
    this.key = api_key;
  }

  getWeather(city, country) {

    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.key}`
    )
      .then(res => res.json())
  }
  
}