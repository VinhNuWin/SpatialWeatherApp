import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { GetWeather } from "./GetWeather";

function App() {
  return (
    <div className="wrapper">
      <GetWeather />
    </div>
  );
}

export default App;
