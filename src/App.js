import React, { Component } from 'react';
import Data from './FetchData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg" className="App-logo" alt="OpenWeatherMap" />
          <h1 className="App-title">Weather in Cambridge</h1>
        </header>
        <div id="data">
          <Data />
        </div>
      </div>
    );
  }
}

export default App;
