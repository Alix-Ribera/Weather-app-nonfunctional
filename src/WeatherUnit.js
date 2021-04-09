import React from "react";

export default function WeatherUnit(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="celsius">°C</span> |<span className="farenheit">ºF</span>
    </div>
  );
}
