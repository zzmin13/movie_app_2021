import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Kimchi from './Kimchi';
import Potato from "./Potato";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Potato />
    <Kimchi />
  </React.StrictMode>,
  document.getElementById('root')
);