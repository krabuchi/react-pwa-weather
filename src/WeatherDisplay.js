import React from "react";

const WeatherDisplay = ({weather}) => {
    const {description, name, country, temperature, icon} = weather;
    return (
        <div className="city">
            <h2 className="city-name">
            <span>{name}</span>
            <sup>{country}</sup>
          </h2>
          <div className="city-temp">
            {temperature}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={icon}  alt={description} />
            <p>{description}</p>
          </div>
        </div>
    );
     
}

export default WeatherDisplay;