import React, { useState, useEffect } from "react";
import "./App.css";

import WeatherDisplay from "./WeatherDisplay";

const URL = `https://weather-backen.herokuapp.com`;

const fetchData = async (q) => {
  const response = await fetch(`${URL}?search=${q}`);
  const data = await response.json();  
  return data;
};

function App() {
  const [query, setQuery] = useState("Mumbai");
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
  var date = new Date().getHours();

  return (
    <div className="container">
      <input
        type="text"
        className="search"
        placeholder="Search.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
