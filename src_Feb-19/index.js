import React from "react";
import ReactDOM from 'react-dom';

const title='This is the example of (Javascript Expression)'
const fname = "Rohit";
const mname = "Manoj";
const lname = "Dhuri"
const gaon = 'Kudal';
const day = 'Nice Day'
/*Template Literals*/ 
ReactDOM.render(
  <>
  <h1>{title}</h1>
  <h2>{`Have a ${day}`}</h2>
  <h2>{`Hi my name is a ${fname} ${mname} ${lname}`}</h2>
  <h2>{`My age is ${5^2}`}</h2>
  <h2>{`I am living in ${gaon}`}</h2>
  </>,
  document.getElementById('root')
);