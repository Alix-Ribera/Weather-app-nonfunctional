import React from "react";
import Date from "./Date";
import WeatherUnit from "./WeatherUnit";

export default function Weather(props) {
  return (
    <div className="weatherbox">
      <div className="row weather align-items-center">
        <div className="col-3">
          <div className="dayspecs">
            <ul>
              <li>Real feel: {props.data.realfeel}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind Speed: {props.data.wind} km/h</li>
              <li>Description: {props.data.description} </li>
              <li> {/*<WeatherIcon code={props.data.icon} />*/}</li>
            </ul>
          </div>
        </div>
        <h4 className="col-3">
          <Date date={props.data.date} />
        </h4>
        <div className="col-6">
          <h1>
            {props.data.city}
            <div>
              {" "}
              <WeatherUnit celsius={props.data.temperature} />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
