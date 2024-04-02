import React from "react";
import ReactDOM from 'react-dom';

const title='This is the example of (Javascript Expression)'
const name = "Rohit Manoj Dhuri";
const gaon = 'Pune';

ReactDOM.render(
  <>
  <h1>{title}</h1>
  <h2>Hi name is a {name}</h2>
  <h2>My age is {5^2}</h2>
  <h2>I am living in {gaon}</h2>
  </>,
  document.getElementById('root')
);