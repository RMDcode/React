import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const name='Rohit Dhuri';
var currentdate = new Date();
var date = currentdate.getDate()+'/'+currentdate.getMonth()+'/'+currentdate.getFullYear();
var ampm = currentdate.getHours() >= 12 ? 'PM' : 'AM'; 
var time = currentdate.getHours()+':'+currentdate.getMinutes()+':'+currentdate.getSeconds()+' '+ampm;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Helllo, My name is {name}</h1>
    <p>Current Date is {date}</p>
    <p>Current Time is {time}</p>
  </>,
  document.getElementById('root')
);

reportWebVitals();
