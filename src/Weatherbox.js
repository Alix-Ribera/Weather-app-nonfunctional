import React, { useState } from "react";
import axios from "axios";
import WeeklyPredictions from "./WeeklyPredictions.js";

function Weatherbox() {
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [realfeel, setrealfeel] = useState("");
  let [img, setImg] = useState("");
  let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
};

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
    axios.get(url).then(showTemp);

return (
    <div className="weatherbox">
      <div className="row weather align-items-center">
        <div className="col-3">
          <div className="dayspecs">
            <ul>
          <li>Real feel: {Math.round(realfeel)}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind Speed: {Math.round(wind)} km/h</li>
          <li>Description: {desc} </li>
                              <li><img src={img} alt={desc}/></li>
            </ul>
          </div>
        </div>
        <h4 className="col-3">{day} {hour}:{minutes}</h4>
        <div className="col-6">
          <h1>{"London"}</h1>
          <h1 className="temp">
            <span className="units">
              <a href="/" className="active">
                {Math.round(temp)}°C
              </a>
              <a href="/" className="inactive">
                °F
              </a>
            </span>
          </h1>
        </div>
      </div>
      <WeeklyPredictions />
    </div>
  );
}

export default Weatherbox;
