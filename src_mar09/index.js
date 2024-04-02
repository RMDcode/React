//Inline Css
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const A ="https://picsum.photos/200/300";
const B ="https://picsum.photos/300/300";
const C ="https://picsum.photos/250/300";

const heading ={//Always keys into camelCase;
  //key : value ,
  color : "#fa9191",
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: "0px 2px 4px #ffe9c5",
  margin: '70px 0'
}

ReactDOM.render(
  <>
    <h1 style={heading}>Random Clicks</h1>
    <div className="img_div">
            <img src={A}/>
            <img src={B}/>
            <a href='https://www.youtube.com/watch?v=MutW7PhlYQ4&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=17'>
            <img src={C} target='_Rohit'/>
            </a>
    </div>
  </>,document.getElementById('root')
);
