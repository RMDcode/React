import React from 'react';
import "./App.css";
import SlotM from './Slot.Component/Slot';

const App =()=>{

    return(
        <>
        <h1 className='heading_style'>
        🎰 Welcome to {""}
        <span style={{fontWeight : 'bold'}}> Slot machine game </span> 🎰
        </h1>
        <div className='slotmachine'>
        <SlotM x='😆' y='😆' z='😆' />
        <SlotM x='🍎' y='🍌' z='🥒' />
        <SlotM x='👍' y='👎' z='👎' />
        <SlotM x='🦁' y='🦁' z='🦁' />
        </div>
        </>
    )
};


export default App;

