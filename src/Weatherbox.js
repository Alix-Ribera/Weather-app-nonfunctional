import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import WeeklyPredictions from "./WeeklyPredictions.js";

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
    });
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

  if (weatherData.ready) {
    return (
      <div>
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
              <button className="searchbutton" type="submit" value="submit">
                Current location
              </button>
            </form>
          </div>
        </div>
        <div className="weatherbox">
          <Weather data={weatherData} />
          <WeeklyPredictions />
        </div>
      </div>
    );
  } else {
    gather();
    return "Loading...";
  }
}
