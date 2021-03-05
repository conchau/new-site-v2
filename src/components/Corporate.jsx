import React from "react";
import corp from "./corporateStyles.module.css";
import ReactPlayer from "react-player";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";

function Corporate() {

    return (
        <div className="corp-page">

            {/* HERO SECTION */}
            <div className={corp.heroSection}>
                <div className={corp.heroSection1}>
                    <div className={corp.heroSection1Fixed}>
                        <h1 className={corp.heroTitle}>Something Corporate</h1>
                        <h2 className={corp.heroSubtitle}>Add simulations to Zoom</h2>
                        <p className={corp.heroText}>Through realistic practice sessions, employees can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment. </p>
                    </div>
                    <button className={corp.ctaBtn1}>Schedule Private Demo</button>
                </div>
                <div className={corp.heroSection2}>
                    <div className={corp.heroSection2Fixed}>
                            <ReactPlayer className={corp.video1} url="https://vimeo.com/508210873/750aa8a2cd" controls="true" />
                    </div>
                    <div className={corp.socialProof1}>
                        <div className={corp.logoContainer}>
                            <img className={corp.proofLogo} src={Seneca} alt="Seneca-logo"/>
                        </div>
                        <div className={corp.logoContainer}>
                            <img className={corp.proofLogo} src={Fanshawe} alt="Fanshawe-logo"/>
                        </div>
                        <div className={corp.logoContainer}>
                            <img className={corp.proofLogo} src={Humber} alt="Humber-logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Corporate;