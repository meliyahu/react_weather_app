import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const APPID = "";
  const [query, setQuery] = useState("Hobart, AU");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    condition: null,
    temp: null,
  });

  const data = async (qry) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${qry}&units=metric&APPID=${APPID}`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        city: res.city.name,
        country: res.city.country,
        condition: res.list[0].weather[0].main,
        temp: res.list[0].main.temp,
      });
      // console.log(res);
    });
  };
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        city: res.city.name,
        country: res.city.country,
        condition: res.list[0].weather[0].main,
        temp: res.list[0].main.temp,
      });
      // console.log(res);
    });
  }, []);
  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
