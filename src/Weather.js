import React from 'react';
import './Weather.css';

export default function Weather({ data }) {
  function titleCase(text) {
    return text.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }

  if (Object.keys(data).length !== 0) {
    return (
      <div className='Weather'>
        <div>
          <h2>{data.city}</h2>
          <p>{titleCase(data.description)}</p>
        </div>

        <article className='Weather-container'>
          <div className='Weather-container'>
            <img
              src={data.icon_url}
              alt={data.description}
              title={data.description}
            />
            <p className='Weather-temperature'>
              {data.temperature}{' '}
              <span className='Weather-temperature-unit'>°C</span>
            </p>
          </div>
          <div>
            <p>Humidity: {data.humidity} %</p>
            <p>Wind: {data.wind} km/h</p>
          </div>
        </article>
      </div>
    );
  }
}
