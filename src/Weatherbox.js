import React, { useState } from "react";
import axios from "axios";
import WeeklyPredictions from "./WeeklyPredictions.js";

export default function Weatherbox() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [realfeel, setrealfeel] = useState("");
  let [img, setImg] = useState("");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wedday",
    "Thuday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  function showTemp(response) {
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setrealfeel(response.data.main.feels_like);
    setImg(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=4c78486a431b8f549b8a4a69a0294ae9
  `;
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c78486a431b8f549b8a4a69a0294ae9
  `;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  axios.get(url).then(showTemp);

  let form = (
    <div className="container-fluid">
      <div className="row align-items-end">
        <form className="searchbar" onSubmit={handleSubmit}>
          <input
            className="searchbar"
            type="Search"
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
  );
  if (temp) {
    return (
      <div>
        {form}
        <div className="weatherbox">
          <div className="row weather align-items-center">
            <div className="col-3">
              <div className="dayspecs">
                <ul>
                  <li>Real feel: {Math.round(realfeel)}</li>
                  <li>Humidity: {humidity}%</li>
                  <li>Wind Speed: {Math.round(wind)} km/h</li>
                  <li>Description: {desc} </li>
                  <li>
                    <img src={img} alt={desc} />
                  </li>
                </ul>
              </div>
            </div>
            <h4 className="col-3">
              {day} {hour}:{minutes}
            </h4>
            <div className="col-6">
              <h1>{city}</h1>
              <h1 className="temp">
                <div className="units">
                  <a href="/" className="active">
                    {Math.round(temp)}°C |
                  </a>
                  <a href="/" className="inactive">
                    °F
                  </a>
                </div>
              </h1>
            </div>
          </div>
        </div>
        <WeeklyPredictions />
      </div>
    );
  } else {
    return form;
  }
}
