import React from 'react';
import './Footer.css';
import {FaFacebookF,FaInstagram, FaLinkedinIn,FaTwitter} from "react-icons/fa"
import image from "../../logo.png";

const Footer = () =>{
    return(
        <div className="main-footer">
            <div className="footer">
                <div><h1>PortFolio</h1></div>
                <div className="links">
                    <ul>
                        <li><FaFacebookF/></li>
                        <li><FaInstagram/></li>
                        <li><FaLinkedinIn/></li>
                        <li><FaTwitter/></li>
                    </ul>
                </div>
                <div className="bottom">
                    <h5>Copyright © 2020 Rainbow-Themes. All Rights Reserved.</h5>
                </div>
            </div>
            
        </div>
    )
}
export default Footer;