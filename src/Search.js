import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Weather from './Weather';

export default function Search() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState({});

  function showWeather(response) {
    console.log(response.data);
    setData({
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.humidity,
      wind: response.data.speed,
      icon_url: response.data.condition.icon_url,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
    </div>
  );
}
