import React from 'react';
import ReactDOM from 'react-dom';
import Hooks from './components/Hooks';
import Props from './components/Props';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Hooks />
    <Props />
    <UseEffect />
    <UseState />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
