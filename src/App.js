import React, { useState, useEffect } from "react";
import "./App.css";

import Axios from "axios";

const URL = `https://weather-backen.herokuapp.com`;

const fetchData = async (q) => {
  const { data } = await Axios.get(`${URL}?search=${q}`);
  return data;
};

function App() {
  const [query, setQuery] = useState("New York");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const result = async () => {
      const data = await fetchData(query);
      setWeather(data);
    };
    result();
  }, []);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div
      className={weather.temperature > 25 ? "sun-container" : "main-container"}
    >
      <input
        type="text"
        className="search"
        placeholder="Search.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.country}</sup>
          </h2>
          <div className="city-temp">
            {weather.temperature}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={weather.icon}
              alt={weather.description}
            />
            <p>{weather.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
