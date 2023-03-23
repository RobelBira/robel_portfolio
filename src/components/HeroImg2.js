import "./HeroImgStyles2.css";
//  import Images from "../assets/download (3).jpg";
import { Link } from "react-router-dom";
import { Component } from "react";

class HeroImg2 extends Component{
  render(){
  return (
    <div className="hero-img">
      <div className="heading">
<h1>{this.props.heading}</h1>
<p>{this.props.text}</p>


        </div>
        </div>
  )
}
}
export default HeroImg2