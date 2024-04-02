import React from "react";
import Card from "../cardComponent/Card";
import sdata from "../cardComponent/sdata";

function Marvel(){
    return(
        <Card
          key={sdata[1].id}
          imgsrc={sdata[1].imgsrc}
          sname={sdata[1].sname}
          title={sdata[1].title}
          link={sdata[1].link}
        />);
};

export default Marvel;