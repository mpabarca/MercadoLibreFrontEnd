import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './../assets/img/logo.svg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Listado = () => {
  const [apiResponse, setApiResponse] = useState('');  

  let query = useQuery();
  console.log(query.get("search"));

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
          Listado
        </p>
        <p className="App-intro">{apiResponse}</p>
      </header>
    </div>
  );
}

export default Listado;
