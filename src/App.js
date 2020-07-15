import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={14} condition="Clouds" />
      <WeatherCard temp={20} condition="Clear" />
      <WeatherCard temp={40} condition="Haze" />
    </div>
  );
}

export default App;
