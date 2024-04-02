import React from 'react';
import './App.css';
import Dc from './Dc.Component/Dc';
import Marvel from './Marvel.Component/Marvel';

let studio="Marvel";


function App(){
  return(<>
  <h1 className='heading_style'>Top Superhero Films X Series </h1>
  <h1 className='heading_input'><input type="text" name='studio'>Search:</input></h1>
  {(studio==="Marvel")? <Marvel/>:<Dc/>}
      </>);
}

export default App;