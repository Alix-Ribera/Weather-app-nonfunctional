import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}ºC`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}ºC`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day}</div>
      <div className="WeatherForecast-Icon">
        <img
          src={props.data.weather[0].icon}
          alt={props.data.weather[0].description}
        />
      </div>
      <div className="WeatherForecast-Temperatures">
        <span className="WeatherForecast-Temperature-max">{maxTemp} /</span>
        <span className="WeatherForecast-Temperature-min">{minTemp}</span>
      </div>
    </div>
  );
}
