import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const APPID = "598906696a672383a24c4fdd3a8464f9";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    condition: null,
    temp: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async (qry) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${qry}&units=metric&APPID=${APPID}`
      );
      const resJSON = await apiRes.json();
      setWeather({
        city: resJSON.city.name,
        country: resJSON.city.country,
        condition: resJSON.list[0].weather[0].main,
        temp: resJSON.list[0].main.temp,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const resetSearch = (e) => {
    e.preventDefault();
    setError(false);
    setQuery("");
  };
  return (
    <div>
      {!loading && !error ? (
        <div>
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
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          <p>There was an error!</p>
          <button onClick={(e) => resetSearch(e)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherEngine;
