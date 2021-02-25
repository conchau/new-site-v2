import React from "react";
import icon from "../images/instage-icon.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <a href="https://www.linkedin.com/company/instagevr/">
                    <img className="social-icon" src={linkedin} alt="social-icon" />
                </a>
                <a href="https://twitter.com/InStageVR">
                    <img className="social-icon" src={twitter} alt="social-icon" />
                </a>
                <a href="https://www.facebook.com/Instage-VR-107029331012303/">
                    <img className="social-icon" src={facebook} alt="social-icon" />
                </a>
            </div>
            <p className="copyright-text">© Copyright 2021 InStage. All rights reserved.</p>
        </div>
    )
}

export default Footer;