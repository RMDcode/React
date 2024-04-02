import React from 'react';
import ReactDOM from 'react-dom';
import MyName,{FatherName , list1} from './App.Component/App'

ReactDOM.render( <>
  <h1>List Of Names</h1>
  <ol>
    <li>{MyName}</li>
    <li>{FatherName}</li>
    <li>{list1()}</li>
  </ol>
</>,document.getElementById('root'));

//How to use variable by using import and export;