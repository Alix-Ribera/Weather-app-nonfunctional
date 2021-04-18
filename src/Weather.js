import React from "react";
import Date from "./Date";
import WeatherUnit from "./WeatherUnit";

export default function Weather(props) {
  return (
    <div className="row weather align-items-center">
      <div className="col-3">
        <div className="dayspecs">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
            <li>Description: {props.data.description} </li>
            <li>Timezone: {props.data.timezone} </li>

            <li>
              <img src={props.data.icon} alt={props.data.description}></img>
            </li>
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
  );
}
