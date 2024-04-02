import React from 'react';
import './Styling.css'


function Styling()
{
    const A ="https://picsum.photos/200/300";
    const B ="https://picsum.photos/300/300";
    const C ="https://picsum.photos/250/300";
    
    return(
        <>  
        <div className="img_div">
            <img src={A}/>
            <img src={B}/>
            <a href='https://www.youtube.com/watch?v=z-Z5radvnOA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15'>
            <img src={C} target='_Rohit'/>
            </a>
        </div>
        </>
    );
}

export default Styling;
