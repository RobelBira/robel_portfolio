import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/download (1).jpg";
import Images2 from "../assets/OIP (2).jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a website developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact"> 
        <button className="btn">CONTACT</button>
        </Link>
        
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                 <img src={Images} className="img" alt="true"/>  
                </div>
                <div className="img-stack bottom">
                 <img src={Images2} className="img" alt="true"/>  
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutContent