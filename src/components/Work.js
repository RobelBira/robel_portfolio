import React from "react";
import "./WorkCardStyles.css"

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"


const Work = () => {
  return (
    <div className="Work-container"> 
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        {WorkCardData.map((val,ind)=>{
       return(
<WorkCard
key={ind}
imgsrc={val.imgsrc}
title={val.title}
text={val.text}
veiw={val.view}
source={val.source}

/>
       )
        } )}
    </div>
    
    </div>
  )
}
export default Work