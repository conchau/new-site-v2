import React, {useState, useEffect, useRef } from "react";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import preview from "../images/preview.gif";
import videoPreview from "../images/video-mini.mp4";
import video from "../images/video-large.mp4";
import Button from 'react-bootstrap/Button'
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HTS from "../images/HTS.png";
import Educator from "../images/educator.png";
import like from "../images/like.png";
import padlock from "../images/padlock.png";
import check from "../images/check.png";
import calendar from "../images/calendar.png";
import chart from "../images/chart.png";
import user from "../images/user.png";
import rightArrow from "../images/right-arrow.png";
import SocialCarousel from "./SocialCarousel";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import optionBackground from "../images/option-background.jpg";
import glassesMan from "../images/glasses-man.jpg";

function Home() {
    const history = useHistory();

    const [videoPlayer, setVideoPlayer] = useState(false);
    const [explainerTitle, setExplainerTitle] = useState("To help students stand out to employers...")
    const [exampleCard, setExampleCard] = useState("example-1");

    //References to example type buttons for updating the CSS on toggle
    const example1 = useRef(null);
    const example2 = useRef(null);
    const example3 = useRef(null);

    function watchVideo(){
        setVideoPlayer(true);
    }

    function switchExample(option){
        setExampleCard(option);

        if (option === "example-1"){
            setExplainerTitle("To help students stand out to employers...")
            example1.current.className = "active-example";
            example2.current.className = "inactive-example";
            example3.current.className = "inactive-example";
        } else if (option === "example-2"){
            setExplainerTitle("To help students advance in their careers...")
            example1.current.className = "inactive-example";
            example2.current.className = "active-example";
            example3.current.className = "inactive-example";
        } else if (option === "example-3"){
            setExplainerTitle("To help international students integrate into the workforce...")
            example1.current.className = "inactive-example";
            example2.current.className = "inactive-example";
            example3.current.className = "active-example";
        }
    }

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
                        {videoPlayer === false && (
                            <video className="video-preview" autoPlay loop muted>
                                <source src={videoPreview} type="video/mp4" />
                            </video>
                        )}
                        {videoPlayer === true && (
                            <ReactPlayer className="video" url="https://vimeo.com/508210873/750aa8a2cd" playing="true" controls="true" />
                        )}
                    </div>
                    <Button className="video-btn" onClick={watchVideo}>Watch Overview Video</Button>
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

            {/* HOW TO SECTION */}
            <div className="how-to-section">
                <h1 className="how-to-title">InStage practice sessions are <p className="pink-text">easy</p> for students to do.</h1>
                <div className="how-to-process">
                    <div className="how-to-step">
                        <div className="how-to-num">1</div>
                        <h2 className="how-to-step-title"><p className="green-text">Book</p> a session</h2>
                        <p className="how-to-step-text">Simple booking via online calendar.</p>
                        <p className="how-to-step-text">No account required.</p>
                        <img className="how-to-img" src={calendar} alt="calendar-icon" />
                    </div>
                    <img className="arrow-icon" src={rightArrow} alt="right-arrow-icon" />
                    <div className="how-to-step">
                        <div className="how-to-num">2</div>
                        <h2 className="how-to-step-title"><p className="green-text">Join</p> & practice</h2>
                        <p className="how-to-step-text">Accessible via Zoom link.</p>
                        <p className="how-to-step-text">No downloads required.</p>
                        <img className="how-to-img" src={user} alt="user-icon" />
                    </div>
                    <img className="arrow-icon" src={rightArrow} alt="right-arrow-icon" />
                    <div className="how-to-step">
                        <div className="how-to-num">3</div>
                        <h2 className="how-to-step-title"><p className="green-text">Review</p> results</h2>
                        <p className="how-to-step-text">Session data provided instantly.</p>
                        <p className="how-to-step-text">User-controlled privacy.</p>
                        <img className="how-to-img" src={chart} alt="chart-icon" />
                    </div>
                </div>
                <button className="try-it-btn-2">Try it</button>
            </div>

            {/* SOCIAL PROOF 2 */}
            <SocialCarousel />

            {/* OPTION SECTION */}
            <div className="option-section">
                <h1 className="option-title">Students need to sell themselves to the world.</h1>
                <h1 className="option-title">And they could use a place to <p className="pink-text">practice</p>.</h1>
                <div className="example-btn-container">
                    <button
                        className="active-example"
                        ref={example1}
                        onClick={() => switchExample("example-1")}
                        >Getting a Job
                    </button>
                    <button
                        className="example-btn"
                        ref={example2}
                        onClick={() => switchExample("example-2")}
                        >Workplace Skills
                    </button>
                    <button
                        className="example-btn"
                        ref={example3}
                        onClick={() => switchExample("example-3")}
                        >Language Practice
                    </button>
                </div>
                <div className="example-container">
                    <div className="explainer-container">
                        <img className="option-background" src={optionBackground} alt="option-background-img" />
                    </div>
                    <div className="example-card">
                        {exampleCard === "example-1" &&(
                            <Example1
                                explainer={explainerTitle}
                            />
                        )}
                        {exampleCard === "example-2" &&(
                            <Example2
                                explainer={explainerTitle}
                            />
                        )}
                        {exampleCard === "example-3" &&(
                            <Example3
                                explainer={explainerTitle}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* PRICING SECTION */}
            <div className="pricing-section">
                <h1 className="pricing-title">Remotely <p className="pink-text">engage</p> your students with InStage Practice Sessions</h1>
                <h2 className="pricing-subtitle">InStage is only available through educational institutions and enterprises.</h2>
                <div className="pricing-breakdown">
                    <div className="pricing-unlimited bounce">
                        <h2 className="pricing-card-title">Unlimited Practice Sessions</h2>
                        <p className="pricing-card-text">Students can book an unlimited number of practice sessions during the semester.</p>
                        <button className="pricing-card-btn">Learn More</button>
                        <p className="pricing-card-note">*Volume discounts</p>
                    </div>
                    <div className="pricing-single bounce">
                        <h2 className="pricing-card-title">Single Practice Sessions</h2>
                        <p className="pricing-card-text">Students receive a session link that allows them to book a single practice session.</p>
                        <button className="pricing-card-btn">Learn More</button>
                        <p className="pricing-card-note">*Volume discounts</p>
                    </div>
                    <div className="pricing-detail-section">
                        <p className="pricing-detail-text">No downloads or accounts are required to get started</p>
                        <p className="pricing-detail-text">Instantly deploy remote-simulations to your students</p>
                        <p className="pricing-detail-text">Immersive learning with data-driven feedback</p>
                    </div>
                </div>
            </div>

            {/* SOCIAL PROOF 2 */}
            <SocialCarousel />

            {/* ONBOARDING SECTION */}
            <div className="onboarding-section">
                <h1 className="onboarding-title">Onboarding Roadmap</h1>
                <div className="onboarding-process">
                    <div className="onboarding-step">
                        <div className="onboarding-num">1</div>
                        <h2 className="onboarding-step-title">Demo</h2>
                        <p className="onboarding-step-text">It’s free and easy to try InStage. Jump into a simulation in minutes.</p>
                    </div>
                    <img className="onboarding-arrow-icon" src={rightArrow} alt="right-arrow-icon" />
                    <div className="onboarding-step">
                        <div className="onboarding-num">2</div>
                        <h2 className="onboarding-step-title">Pilot</h2>
                        <p className="onboarding-step-text">Easy. Short. Inexpensive. We’ll get you setup to deploy to a small group of students in hours, not months.</p>
                    </div>
                    <img className="onboarding-arrow-icon" src={rightArrow} alt="right-arrow-icon" />
                    <div className="onboarding-step">
                        <div className="onboarding-num">3</div>
                        <h2 className="onboarding-step-title">Full Access</h2>
                        <p className="onboarding-step-text">Continue to use InStage on a per session basis, or upgrade to unlimited access.</p>
                    </div>
                </div>
                <button className="cta-btn-3">Learn More</button>
            </div>

            {/* CTA SECTION */}
            <div className="cta-section">
                <img className="cta-background" src={glassesMan} alt="man-with-glasses" />
                <div className="cta-detail-container">
                    <h1 className="cta-title">Want to learn more?</h1>
                    <h2 className="cta-text">We host short live streams</h2>
                    <h2 className="cta-text"><strong>every Wednesday at 11am ET</strong></h2>
                    <h2 className="cta-text">to provide a quick way to see</h2>
                    <h2 className="cta-text">InStage in action.</h2>
                    <a href="https://instage.zoom.us/webinar/register/WN_8zi2fFH2S62f-jVLFWZ9hw">
                        <button className="cta-btn-4">Watch a live demo</button>
                    </a>
                    <a href="https://instage.zoom.us/webinar/register/WN_0w47HFJnRHuhk6KXCO38sw">
                        <button className="cta-btn-5">Watch a live event</button>
                    </a>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;
