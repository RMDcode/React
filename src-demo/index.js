import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.render(
  <div className="card-container">
    <div className="card"> 
      <div className="card-face card-front">valentine Day</div>
      <div className="card-face card-back">I love you.</div>
    </div>
  </div>,
  root
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
