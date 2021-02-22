import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import preview from "../images/preview.gif";
import videoPreview from "../images/video-mini.mp4";
import Button from 'react-bootstrap/Button'
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HTS from "../images/HTS.png";
import Educator from "../images/educator.png";
import like from "../images/like.png";
import padlock from "../images/padlock.png";
import check from "../images/check.png";


function Home() {
    const history = useHistory();

    return (
        <div className="home-page">

            {/* HERO SECTION */}
            <div className="hero-section">
                <div className="hero-section-1">
                    <div className="hero-section-1-fixed">
                        <div className="hero-title-box">
                            <h1 className="hero-title">Remote practice for real performance</h1>
                        </div>
                        <p className="hero-text">InStage deploys immersive learning technology that increases job readiness.</p>
                        <p className="hero-text">Students can practice in a wide variety of communication-focused simulations that include job interviews, self-introductions, presentations, and more. </p>
                        <p className="hero-text no-margin-bottom">InStage can be accessed remotely from any computer so students can learn and develop from anywhere.</p>
                    </div>
                    <button className="try-it-btn">Try it</button>
                </div>
                <div className="hero-section-2">
                    <div className="hero-section-2-fixed">
                        <video className="video" autoPlay loop muted>
                            <source src={videoPreview} type="video/mp4" />
                        </video>
                    </div>
                    <Button className="video-btn">Watch Overview Video</Button>
                </div>
            </div>

            {/* SOCIAL PROOF 1 */}
            <div className="social-proof-1">
                <div className="logo-container">
                    <img className="proof-logo" src={Seneca} alt="Seneca-logo"/>
                </div>
                <div className="logo-container">
                    <img className="proof-logo" src={Humber} alt="Humber-logo"/>
                </div>
                <div className="logo-container optional">
                    <img className="proof-logo" src={Fanshawe} alt="Fanshawe-logo"/>
                </div>
                <div className="logo-container optional">
                    <img className="proof-logo" src={HTS} alt="HTS-logo"/>
                </div>
            </div>

            {/* FEATURE SECTION */}
            <div className="feature-section">
                <div className="feature-section-1">
                    <h1 className="feature-title">Online learning is here to stay.</h1>
                    <h1 className="feature-title">InStage is here to make it <p className="pink-text">immersive.</p></h1>
                    <div className="feature-box">
                        <img className="feature-icon" src={like} alt="like-icon" />
                        <div className="feature-text-box">
                            <p className="feature-text">Engaging</p>
                            <p className="feature-subtext">Practice sessions usually last around 25 minutes.</p>
                        </div>
                    </div>
                    <div className="feature-box">
                        <img className="feature-icon" src={padlock} alt="padlock-icon" />
                        <div className="feature-text-box">
                            <p className="feature-text">Private</p>
                            <p className="feature-subtext">Students control sharing of data report and recording.</p>
                        </div>
                    </div>
                    <div className="feature-box">
                        <img className="feature-icon" src={check} alt="check-icon" />
                        <div className="feature-text-box">
                            <p className="feature-text">Easy</p>
                            <p className="feature-subtext">Simply join a Zoom meeting and start practicing.</p>
                        </div>
                    </div>
                </div>
                <div className="feature-section-2">
                    <img className="educator-img" src={Educator} alt="educator-image" />
                </div>
            </div>
        </div>
    )
}

export default Home;
