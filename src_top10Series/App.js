import React from 'react';
import './App.css';
import Card from './cardComponent/Card';
import sdata from './cardComponent/sdata';


function App(){
  return(<>
  <h1 className='heading_style'>Top Superhero Films X Series </h1>
  {
  sdata.map((val,index)=>{
    return(
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        sname={val.sname}
        title={val.title}
        link={val.link}
      />
    );
  })
  }
  </>);
}

export default App;