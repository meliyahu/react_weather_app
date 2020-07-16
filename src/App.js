import React, { useState } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const APPID = "";
  const [city, setCity] = useState("London, gb");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");

  const data = async () => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APPID}`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data().then((res) => {
      setCity(res.city.name);
      setCountry(res.city.country);
      setTemp(res.list[0].main.temp);
      setCondition(res.list[0].weather[0].main);
      // console.log(res);
    });
  };
  return (
    <div className="App">
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />
      <form>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
