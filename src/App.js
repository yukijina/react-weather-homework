import './App.css';
import Search from './Search';

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <header className='App-header'>
          <h1>Weather App</h1>
        </header>
        <Search />
      </div>
      <footer>
        Open-souce code by Yukiji in{' '}
        <a
          href='https://github.com/yukijina/react-weather-homework'
          target='_blank'
        >
          GitHub 💙
        </a>
      </footer>
    </div>
  );
}

export default App;
