import React from 'react';

function Arithmetic(){
    return(<><h1>Normal Calculator</h1></>);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    let div = a/b;
    div=div.toFixed(2);
    return div;
}

export default Arithmetic;
export {add,sub,mul,div};