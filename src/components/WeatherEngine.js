import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = () => {
  const APPID = "598906696a672383a24c4fdd3a8464f9";
  const [query, setQuery] = useState("");
  const location = "Hobart, AU";
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    condition: null,
    temp: null,
  });

  const getWeather = async (qry) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${qry}&units=metric&APPID=${APPID}`
    );
    const resJSON = await apiRes.json();
    return setWeather({
      city: resJSON.city.name,
      country: resJSON.city.country,
      condition: resJSON.list[0].weather[0].main,
      temp: resJSON.list[0].main.temp,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <>
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
    </>
  );
};
export default WeatherEngine;
