import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';

import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/App.scss';

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

reportWebVitals();
