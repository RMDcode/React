import React from "react";
import ReactDOM from "react-dom";

const name="Rohit Dhuri."

ReactDOM.render( 
<>
<h1>Without Component</h1>
<h3>Hi there,</h3>
<p>Have a Nice Day!</p>
<p>Please find attached my resume for your review.</p>
<p>Please let me know if you have any vacany related to Front End Developer.</p>
<p>Thank You.</p>
<p>Regards,</p>
<h4>{name}</h4>
</>,document.getElementById('root')
);

