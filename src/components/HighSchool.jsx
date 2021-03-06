import React from "react";
import highschool from "./highschoolStyles.module.css";
import ReactPlayer from "react-player";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";

function HighSchool() {

    return (
        <div className="highschool-page">

            {/* HERO SECTION */}
            <div className={highschool.heroSection}>
                <div className={highschool.heroSection1}>
                    <div className={highschool.heroSection1Fixed}>
                        <h1 className={highschool.heroTitle}>High School</h1>
                        <h2 className={highschool.heroSubtitle}>Add simulations to Zoom</h2>
                        <p className={highschool.heroText}>Through realistic practice sessions, students can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment. </p>
                    </div>
                    <button className={highschool.ctaBtn1}>Schedule Private Demo</button>
                </div>
                <div className={highschool.heroSection2}>
                    <div className={highschool.heroSection2Fixed}>
                            <ReactPlayer className={highschool.video1} url="https://vimeo.com/508210873/750aa8a2cd" controls="true" />
                    </div>
                    <div className={highschool.socialProof1}>
                        <div className={highschool.logoContainer}>
                            <img className={highschool.proofLogo} src={Seneca} alt="Seneca-logo"/>
                        </div>
                        <div className={highschool.logoContainer}>
                            <img className={highschool.proofLogo} src={Fanshawe} alt="Fanshawe-logo"/>
                        </div>
                        <div className={highschool.logoContainer}>
                            <img className={highschool.proofLogo} src={Humber} alt="Humber-logo"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HighSchool;