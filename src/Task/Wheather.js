import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './whe.css'; 

function Wheather() {

  const [city, setCity] = useState('London'); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '80fd2c8e56c14ce54b0bba803b8ad8aa'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Could not fetch weather data. Please try again.');
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Wheather
