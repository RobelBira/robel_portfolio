import "./HeroImgStyles.css";
import Images from "../assets/download (2).jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
     <img className="into-img" src={Images} alt="Images"/>  
      </div>
      <div className="content">
        <p>HI, I'M ROBEL BIRA.</p>
        <h1>Website Developer.</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}
export default HeroImg