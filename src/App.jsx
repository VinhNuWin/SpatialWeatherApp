import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { GetWeather } from "./GetWeather";

function App() {
  function initGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, fail);
    } else {
      alert(
        "Sorry, your current reality does not support geolocation services"
      );
    }
  }

  function success(position) {
    setLong(position.coords.longitude);
    setLat(position.coords.latitude);
  }
  function fail() {
    //could not obtain location
  }

  const coords = initGeolocation();

  return (
    <div className="wrapper">
      <GetWeather />
    </div>
  );
}

export default App;
