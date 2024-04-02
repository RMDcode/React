import React from 'react';


const struct = {
  color: "#e8ec12",
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: "0px 2px 4px #ffe9c5",
  position: 'absolute',
  bottom: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '65px'
};

//let currDate = new Date(2024, 3, 10, 11); //new Date(Year, Month, Date, time)

const CssStyle={};

function Challenge() {
  let currDate = new Date();
  let time = currDate.getHours(); //Green, Orange and Black.
  let greeting='';
  if (time < 12) 
  {
    greeting = "Good Morning";
    CssStyle.color='Orange';
  } 
  else if (time < 18) 
  {
    greeting = "Good Afternoon";
    CssStyle.color='Green';
  } 
  else 
  {
    greeting = "Good Night";
    CssStyle.color='Black';
  }

  return (
    <>
      <div style={{ background: '#61dafb', minHeight: '100vh', position: 'relative' }}>
        <h1 style={struct}>Hello Sir,<a style={CssStyle}> {greeting}</a></h1>
      </div>
    </>
  );
}

export default Challenge;
