import React, { useState } from 'react';



const App = ()=>{
    const State=useState();
    //console.log(State);

    const [count, setCount] = useState(0)

    const IncNum =()=>{
    
    setCount(count+1);      
//  console.log("Clicked"+count++);
    
    };

return(<>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click me</button>
    </>);
};

export default App;