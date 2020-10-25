import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleProducto from '../containers/DetalleProducto';
import Listado from '../containers/Listado';
import Buscador from '../containers/Buscador';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Buscador} />
      <Route exact path='/items' component={Listado} />
      <Route exact path='/items/:id' component={DetalleProducto} />
    </Switch>
  </BrowserRouter>
);
export default App;
