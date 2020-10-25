import React, { useState, useEffect } from 'react';
import logo from './../assets/img/logo.svg';

const Buscador = () => {
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
          Buscador
        </p>
        <p className="App-intro">{apiResponse}</p>
      </header>
    </div>
  );
}

export default Buscador;
