import React from 'react';
import './Forecast.css';

export default function Forecast({ forecasts }) {
  return (
    <div className='Forecast'>
      {forecasts.map((forecast, index) => {
        if (index !== 0) {
          return (
            <ul key={forecast.time} className='Forecast-list-container'>
              <li>
                <img
                  src={forecast.condition.icon_url}
                  alt={forecast.temperature.day}
                  className='Forecast-img'
                />
              </li>
              <li>{Math.round(forecast.temperature.day)} °C</li>
            </ul>
          );
        }
      })}
    </div>
  );
}
