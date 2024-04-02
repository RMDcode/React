import React, { useState } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const getTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(getTime, 1000);

  return (
    <>
      <h1>{time}</h1>
    </>
  );
};

export default App;
