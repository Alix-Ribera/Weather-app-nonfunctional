import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weatherbox(props) {
  let [weatherData, setweatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleGather(response) {
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      time: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      timezone: response.data.timezone,
    });
    getBackgroundImage(response.data.weather[0].description);
  }
  function handleSubmit(event) {
    event.preventDefault();
    gather();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function gather() {
    let apiKey = "4c78486a431b8f549b8a4a69a0294ae9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleGather);
  }
  function gatherCoords(position) {
    let apiKey = "4c78486a431b8f549b8a4a69a0294ae9";
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleGather);
  }
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(gatherCoords);
  }
  function getBackgroundImage(description) {
    if (description === "clear sky") {
      document.body.style.background = `url("./IMG/clear-sky.jpg")`;
    } else if (description === "few clouds") {
      document.body.style.background = `url("./IMG/cloudy.jpg")`;
    } else if (description === "broken clouds") {
      document.body.style.background = `url("./IMG/cloudy.jpg")`;
    } else if (description === "mist") {
      document.body.style.background = `url("./IMG/mist.jpg")`;
    } else if (description === "rain") {
      document.body.style.background = `url("./IMG/rain.jpg")`;
    } else if (description === "scattered clouds") {
      document.body.style.background = `url("./IMG/cloudy.jpg")`;
    } else if (description === "shower rain") {
      document.body.style.background = `url("./IMG/rain.jpg")`;
    } else if (description === "snow") {
      document.body.style.background = `url("./IMG/snow.jpg")`;
    } else if (description === "thunder") {
      document.body.style.background = `url("./IMG/rain.jpg")`;
    } else {
    }
  }
  if (weatherData.ready) {
    return (
      <div className="backgroundImg">
        <div className="container-fluid">
          <div className="row align-items-end">
            <form className="searchbar" onSubmit={handleSubmit}>
              <input
                className="searchbar"
                type="Search"
                autoFocus="on"
                placeholder="Enter your location"
                onChange={updateCity}
              />
              <button className="searchbutton" type="submit" value="submit">
                Search
              </button>
              <button
                className="searchbutton"
                type="submit"
                onClick={getPosition}
              >
                Current location
              </button>
            </form>
          </div>
        </div>
        <div className="weatherbox">
          <Weather data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    gather();
    return "Loading...";
  }
}
