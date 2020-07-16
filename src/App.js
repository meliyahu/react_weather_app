import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Hobart, AU" />
      {/* <WeatherEngine location="Adelaide, AU" />
      <WeatherEngine location="Sydney, AU" /> */}
    </div>
  );
}

export default App;
