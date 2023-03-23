import "./FooterStyles.css"
import React from "react"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
         <div className="left">
            
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <h4>Addis Ababa</h4>
                <h4>Ethiopia</h4>
            </div>
            </div>

            <div className="phone">
              <h4>  <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/> +251961232327 / +251911604451</h4>
</div>


<div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>robelbira@gmail.com</h4> 
            
        </div>
        
        <div className="right">
            <h4>About me</h4>
            <p>This is me Robel Bira. I'm a website developer. I usually develop front-end and back-end of websites.</p>
        <div className="social">
        <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
        
        </div>
        </div>
    </div>
    </div>
  )
}
export default Footer