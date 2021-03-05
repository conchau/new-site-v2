import React from "react";
import k12 from "./k12Styles.module.css";
import ReactPlayer from "react-player";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";

function K12() {

    return (
        <div className="k12-page">

            {/* HERO SECTION */}
            <div className={k12.heroSection}>
                <div className={k12.heroSection1}>
                    <div className={k12.heroSection1Fixed}>
                        <h1 className={k12.heroTitle}>Something specific to K-12</h1>
                        <h2 className={k12.heroSubtitle}>Add simulations to Zoom</h2>
                        <p className={k12.heroText}>Through realistic practice sessions, students can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment. </p>
                    </div>
                    <button className={k12.ctaBtn1}>Schedule Private Demo</button>
                </div>
                <div className={k12.heroSection2}>
                    <div className={k12.heroSection2Fixed}>
                            <ReactPlayer className={k12.video1} url="https://vimeo.com/508210873/750aa8a2cd" controls="true" />
                    </div>
                    <div className={k12.socialProof1}>
                        <div className={k12.logoContainer}>
                            <img className={k12.proofLogo} src={Seneca} alt="Seneca-logo"/>
                        </div>
                        <div className={k12.logoContainer}>
                            <img className={k12.proofLogo} src={Fanshawe} alt="Fanshawe-logo"/>
                        </div>
                        <div className={k12.logoContainer}>
                            <img className={k12.proofLogo} src={Humber} alt="Humber-logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default K12;