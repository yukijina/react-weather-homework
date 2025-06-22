import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className='Search'>
      <form className='Search-form'>
        <input
          type='search'
          placeholder='Enter a city'
          className='Search-text-input'
          name='search'
          autoFocus
        ></input>
        <input type='submit' value='Search' className='Search-submit'></input>
      </form>
    </div>
  );
}
