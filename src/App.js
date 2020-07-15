import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={14} condition="Rain" city="Sydney" country="AU" />
      <WeatherCard temp={20} condition="Tornado" city="Auklands" country="NZ" />
      <WeatherCard temp={40} condition="Haze" city="London" country="GB" />
      <WeatherCard temp={10} condition="Dust" city="Cape Town" country="SA" />
    </div>
  );
}

export default App;
