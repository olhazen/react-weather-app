import React from 'react';
import Weather from './Weather';
import './App.css';


export default function App() {
  return ( 
  <div className="App">
    <div className="container">
    <Weather defaultCity="New York" />

    <footer>
      This project was coded by{" "}
      <a href="https://olhasi.wixsite.com/my-site" 
      target="_blank">
       Olha Zen  
       </a> {" "} 
       and is{" "}
  <a href="https://github.com/olhazen/react-weather-app" target="_blank">open-sourced on GitHub </a> and is{" "}
  <a href="https://quiet-babka-4e0e23.netlify.app/" target="_blank">hosted on Netlify 
  </a>
  </footer>
  </div>
  </div>
  );
}
