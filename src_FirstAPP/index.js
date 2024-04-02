import React from 'react';
import ReactDOM from 'react-dom';
//JSX-code
ReactDOM.render(<div><h1>Hello World!</h1>
<h2>JSX can't accepts the multiple elements and tags</h2>
</div>
,document.getElementById("root"));


ReactDOM.render(
[<h1>Hello World!</h1>,
<h2>In JsX you can write multiple elements and tags inside the []arrays</h2>
]
,document.getElementById("root"));


/*
//Babel converted code
ReactDOM.render(
    React.createElement("h1",null,"Rohit Dhuri is here..."),
    document.getElementById("root")
);
//pure javascript

var h1 = document.createElement("h1");
h1.innerHTML="My first code in Reactjs";
document.getElementById("root").appendChild(h1);
*/