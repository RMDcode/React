import React from "react";
import Card from "../cardComponent/Card";
import sdata from "../cardComponent/sdata";

function Dc(){
    return(
        <Card
          key={sdata[0].id}
          imgsrc={sdata[0].imgsrc}
          sname={sdata[0].sname}
          title={sdata[0].title}
          link={sdata[0].link}
        />);
};

export default Dc;