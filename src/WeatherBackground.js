import React from "react";

export default function WeatherBackground(props) {
  const codeMapping = {
    "01d": "IMG/clear-sky.jpg",
    "01n": "IMG/clear-sky.jpg",
    "02d": "IMG/cloudy.jpg",
    "02n": "IMG/cloudy.jpg",
    "03d": "IMG/cloudy.jpg",
    "03n": "IMG/cloudy.jpg",
    "04d": "IMG/cloudy.jpg",
    "04n": "IMG/cloudy.jpg",
    "09d": "IMG/rain.jpg",
    "09n": "IMG/rain.jpg",
    "10d": "IMG/rain.jpg",
    "10n": "IMG/rain.jpg",
    "11d": "IMG/rain.jpg",
    "11n": "IMG/rain.jpg",
    "13d": "IMG/snow.jpg",
    "13n": "IMG/snow.jpg",
    "50d": "IMG/mist.jpg",
    "50n": "IMG/mist.jpg",
  };

  return <div>img={codeMapping[props.code]}</div>;
}
