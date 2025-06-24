import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Weather from './Weather';
import Forecast from './Forecast';

export default function Search() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState({});
  const [forecasts, setForecasts] = useState([]);

  function showWeather(response) {
    // console.log(response.data.daily);
    setData({
      city: response.data.city,
      country: response.data.country,
      description: response.data.daily[0].condition.description,
      temperature: Math.round(response.data.daily[0].temperature.day),
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      icon_url: response.data.daily[0].condition.icon_url,
    });
    setForecasts(response.data.daily);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <div className='Search'>
      <form className='Search-form' onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Enter a city'
          className='Search-text-input'
          name='search'
          autoFocus
          onChange={handleChange}
        ></input>
        <input type='submit' value='Search' className='Search-submit'></input>
      </form>
      <Weather data={data} />
      <Forecast forecasts={forecasts} />
    </div>
  );
}
