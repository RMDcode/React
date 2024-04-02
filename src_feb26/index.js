import react from 'react';
import reactDom from 'react-dom';

const name='Rohit Dhuri';
const img1='https://picsum.photos/200/300';
const img2='https://picsum.photos/250/300';
const img3='https://picsum.photos/300/300';


reactDom.render(
  <>
    <h1>Hello, My name is {name}</h1>
    <img src={img1}/>
    <img src={img2}/>
    <a href='https://www.youtube.com/watch?v=OloAP8p1k1w'>
      <img src={img3} target='_Rohit'/>
    </a>
  </>,document.getElementById('root')
);