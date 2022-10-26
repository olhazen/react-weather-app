import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return ( 
  <div className="App">
    <div className="container">
    <Weather defaultCity="London" />

    <footer>
      This project was coded by{" "}
      <a href="https://olhazen-front-end-developer.netlify.app/" 
      target="_blank" rel="noopener noreferrer">
       Olha Zen  
       </a> {" "} 
       and is{" "}
  <a href="https://github.com/olhazen/react-weather-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub </a> and is{" "}
  <a href="https://sparkling-treacle-e037a9.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify 
  </a>
  </footer>
  </div>
  </div>
  );
}
