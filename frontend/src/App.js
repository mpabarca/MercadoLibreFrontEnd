import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [apiResponse, setApiResponse] = useState('');  

  useEffect (() => {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setApiResponse(res));
  }, []);

  console.log(apiResponse);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React yeah
        </a>
        <p className="App-intro">{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
