import React from 'react';
import Arithmetic from './Arithmetic';
import {add,sub,mul,div} from './Arithmetic';

function App (){
    let a = 11;
    let b = 21;

    return(<><Arithmetic />
    
    <ol>
      <li>Addition of Two numbers is : {add(a,b)}</li>
      <li>Substraction of Two numbers is : {sub(a,b)}</li>
      <li>Multiplication of Two numbers is : {mul(a,b)}</li>
      <li>Division of Two numbers is : {div(a,b)}</li>
    </ol></>);
}

export default App;