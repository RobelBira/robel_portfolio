import React from "react";
import "./WorkCardStyles.css"

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt=""/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btn">
                    <NavLink to={props.view} className="btn">VIEW</NavLink>
                    <NavLink to={props.source} className="btn-light">SOURCE</NavLink>
                </div>
            </div>
        </div>
  )
}
export default WorkCard