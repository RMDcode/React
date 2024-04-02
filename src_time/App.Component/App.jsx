import React, { useState } from 'react';

const App = () => {
//    var currentTimeX= new Date();    
  //  const ampm = currentTimeX.getHours() >= 12 ? "PM" : "AM";
   // const freshTime = currentTimeX.getHours() + ':' + currentTimeX.getMinutes() + ':' + currentTimeX.getSeconds() + ampm;
    const [time, setTime] = useState(new Date().toLocaleTimeString());

  const getTime = () => {
    const currentTime = new Date();
    const ampm = currentTime.getHours() >= 12 ? "PM" : "AM";
    const newTime = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() + ampm;
    setTime(newTime);
  };


  return (
    <>
      <h1>{time.toString()}</h1>
      <button onClick={getTime}>Get Time</button>
    </>
  );
};

export default App;
