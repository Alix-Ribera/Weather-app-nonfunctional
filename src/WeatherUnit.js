import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [unit, setUnit] = useState("celsius");

  function changeToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C&nbsp;|
          <a href="/" onClick={changeToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={changeToCelsius}>
            °C&nbsp;
          </a>
          |ºF
        </span>
      </div>
    );
  }
}
