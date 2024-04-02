import React from "react";
import ReactDOM from 'react-dom';
import Card from "./App.Component/Cards";
import './index.css'
import sdata from "./App.Component/sdata";

ReactDOM.render(<>
<h1 className="heading_style">List of top Animes from Crunchyrolls</h1>
    {sdata.map((val,index)=>{
        return(
        <Card
        imgsrc={val.imgsrc} 
        sname={val.sname}
        title={val.title}
        link={val.link}      
        />
        );
        }
    )
    }

</>,document.getElementById('root'));