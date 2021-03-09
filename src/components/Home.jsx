import React, {useState, useEffect, useRef } from "react";
import axiosConfig from "./axiosConfig";
import ModalVideo from 'react-modal-video'
import "react-modal-video/scss/modal-video.scss";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import preview from "../images/preview.gif";
import videoPreview from "../images/video-mini.mp4";
import dataPreview from "../images/video-data.mp4";
import Button from 'react-bootstrap/Button'
import divider1 from "../images/divider1.png";
import divider2 from "../images/divider2.png";
import divider3 from "../images/divider3.png";
import divider4 from "../images/divider4.png";
import divider5 from "../images/divider5.png";
import demoBackground from "../images/demo-background.png";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HTS from "../images/HTS.png";
import Educator from "../images/educator.png";
import like from "../images/like.png";
import padlock from "../images/padlock.png";
import check from "../images/check.png";
import checkGreen from "../images/checkgreen.png";
import calendar from "../images/calendar.png";
import chart from "../images/chart.png";
import user from "../images/user.png";
import SocialCarousel from "./SocialCarousel";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import optionBackground from "../images/option-background.png";
import glassesMan from "../images/glasses-man.png";
import SimCard from "./SimCard";
import leftArrow from "../images/leftArrow.png";
import leftArrow2 from "../images/left-arrow.png";
import rightArrow from "../images/rightArrow.png";
import rightArrow2 from "../images/right-arrow.png";
import screenshot from "../images/simscreenshot.png";
import screenshot2 from "../images/studentscreenshot.png";
import data from "../images/data.png";
import girlOnLaptop from "../images/girl-on-laptop.png";
import playButton from "../images/play-btn.png";
import Anita from "../images/characters/Anita.png";
import Antonio from "../images/characters/Antonio.png";
import Ava from "../images/characters/Ava.png";
import Chandi from "../images/characters/Chandi.png";
import David from "../images/characters/David.png";
import Dennis from "../images/characters/Dennis.png";
import George from "../images/characters/George.png";
import Jason from "../images/characters/Jason.png";
import Jennifer from "../images/characters/Jennifer.png";
import Jess from "../images/characters/Jess.png";
import Kristine from "../images/characters/Kristine.png";
import Mark from "../images/characters/Mark.png";
import Susan from "../images/characters/Susan.png";
import William from "../images/characters/William.png";
import feedback from "../images/simulations/feedback.png";
import interviews from "../images/simulations/interviews.png";
import introductions from "../images/simulations/introductions.png";
import objections from "../images/simulations/objections.png";
import pitches from "../images/simulations/pitches.png";
import presentations from "../images/simulations/presentations.png";
import recruiting from "../images/recruiting.png";
import retaining from "../images/retaining.png";
import transitioning from "../images/transitioning.png";


const axios = require("axios").default;

function Home() {
    const history = useHistory();

    const [explainerTitle, setExplainerTitle] = useState("To help students stand out to employers...")
    const [exampleCard, setExampleCard] = useState("example-1");

    // React Modal Video Component implementation
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)

    //References to example type buttons for updating the CSS on toggle
    const example1 = useRef(null);
    const example2 = useRef(null);
    const example3 = useRef(null);

    function test() {
        axiosConfig.get("/test")
            .then(res => {
                console.log(res.data);
            });
    }


    return (
        <div className="home-page">

            {/* HERO SECTION */}
            <div className="hero-section">
                <div className="hero-section-1">
                    <div className="hero-section-1-fixed">
                        <h1 className="hero-title">Simulations for soft skills</h1>
                        <h2 className="hero-subtitle">Add simulations to Zoom</h2>
                        <p className="hero-text">Through realistic practice sessions, student's can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment. </p>
                    </div>
                    <a href="/demo" style={{textDecoration: "none"}}><button className="cta-btn-1">Schedule Private Demo</button></a>
                </div>
                <div className="hero-section-2">
                    <div className="hero-section-2-fixed">
                            {/* <ReactPlayer className="video-1" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" /> */}
                            {/* <button className="video-1-btn2" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
                            <button className="video-1-btn" onClick={()=> setOpen1(true)}>▶︎</button>
                            <img src={screenshot} className="video-1-img" />
                            <ModalVideo className="video-1" channel='vimeo' autoplay controls="false" isOpen={isOpen1} allowFullScreen videoId="508210873" onClose={() => setOpen1(false)} />
                    </div>
                    <div className="social-proof-1">
                        <div className="logo-container">
                            <img className="proof-logo" src={Seneca} alt="Seneca-logo"/>
                        </div>
                        <div className="logo-container">
                            <img className="proof-logo" src={Fanshawe} alt="Fanshawe-logo"/>
                        </div>
                        <div className="logo-container">
                            <img className="proof-logo" src={Humber} alt="Humber-logo"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* DIVIDER SECTION */}
            <div className="divider-section">
                <img className="divider-curve-1" src={divider1} />
                <img className="divider-curve-2" src={divider2} />
                <div className="social-proof-divider">
                    <h1 className="divider-section-title">"Students need to sell themselves to the world.</h1>
                    <h1 className="divider-section-title">And they could use a place to practice."</h1>
                </div>
            </div>

            {/* DEMO SECTION */}
            <div className="demo-section">
                <div className="demo-section-1">
                    {/* <ReactPlayer className="video-2" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" /> */}
                    <button className="video-2-btn" onClick={()=> setOpen2(true)}>▶︎</button>
                    <img src={screenshot} className="video-2-img" />
                    <ModalVideo className="video-2" channel='vimeo' autoplay controls="false" isOpen={isOpen2} allowFullScreen videoId="508210873" onClose={() => setOpen2(false)} />
                </div>
                <div className="demo-section-2">
                    <h1 className="demo-title">Watch the most recent Live Demo</h1>
                    <h2 className="demo-text">Co-founder, Imran Mouna shows you the InStage experience</h2>
                </div>
            </div>
            <img className="demo-background" src={demoBackground} />

            {/* SIM SECTION */}
            <div className="sim-section">
                <h1 className="sim-title">The soft-skills employers want to see</h1>
                <h2 className="sim-subtitle">Access a growing library of simulations.</h2>
                <Carousel
                    arrows
                    itemWidth={300}
                    infinite
                    className="carousel"
                >
                    <SimCard
                        title="Self-Introductions"
                        description="Learn the 4 steps of a self-introduction and practice introducing yourself to an employer!"
                        cover={introductions}
                        character1Img={David}
                        character1Name="David"
                        character1Temperment="Expressionless"
                        character1Attentiveness="High"
                        character2Img={Susan}
                        character2Name="Susan"
                        character2Temperment="Happy"
                        character2Attentiveness="Very High"
                        character3Img={Mark}
                        character3Name="Mark"
                        character3Temperment="Angry"
                        character3Attentiveness="Low"
                        character4Img={William}
                        character4Name="William"
                        character4Temperment="Happy"
                        character4Attentiveness="High"
                    />
                    <SimCard
                        title="Panel Interviews"
                        description="Complete a Panel Interview. Learn and practice using the STAR model."
                        cover={interviews}
                        character1Img={Jennifer}
                        character1Name="Jennifer"
                        character1Temperment="Angry"
                        character1Attentiveness="Very Low"
                        character2Img={William}
                        character2Name="William"
                        character2Temperment="Happy"
                        character2Attentiveness="High"
                        character3Img={David}
                        character3Name="David"
                        character3Temperment="Expressionless"
                        character3Attentiveness="High"
                        character4Img={Anita}
                        character4Name="Anita"
                        character4Temperment="Happy"
                        character4Attentiveness="Very High"

                    />
                    <SimCard
                        title="Handling Objections"
                        description="Learn and practice a 4 step model to handling objections."
                        cover={objections}
                        character1Img={Ava}
                        character1Name="Ava"
                        character1Temperment="Happy"
                        character1Attentiveness="Very High"
                        character2Img={Antonio}
                        character2Name="Antonio"
                        character2Temperment="Happy"
                        character2Attentiveness="High"
                        character3Img={Kristine}
                        character3Name="Kristine"
                        character3Temperment="Angry"
                        character3Attentiveness="Low"
                        character4Img={George}
                        character4Name="George"
                        character4Temperment="Expressionless"
                        character4Attentiveness="Low"
                    />
                    <SimCard
                        title="Giving Feedback"
                        description="Go into a meeting and deliver your feedback to the team on how to improve and what to keep doing."
                        cover={feedback}
                        character1Img={Jess}
                        character1Name="Jess"
                        character1Temperment="Expressionless"
                        character1Attentiveness="Low"
                        character2Img={Jason}
                        character2Name="Jason"
                        character2Temperment="Expressionless"
                        character2Attentiveness="Very Low"
                        character3Img={Chandi}
                        character3Name="Chandi"
                        character3Temperment="Happy"
                        character3Attentiveness="Very High"
                        character4Img={Dennis}
                        character4Name="Dennis"
                        character4Temperment="Happy"
                        character4Attentiveness="Very High"
                    />
                    <SimCard
                        title="Product Presentations"
                        description="Run through a practice presentation before presenting a new product idea to clients."
                        cover={presentations}
                        character1Img={Ava}
                        character1Name="Ava"
                        character1Temperment="Happy"
                        character1Attentiveness="Very High"
                        character2Img={Mark}
                        character2Name="Mark"
                        character2Temperment="Angry"
                        character2Attentiveness="Low"
                        character3Img={Chandi}
                        character3Name="Chandi"
                        character3Temperment="Happy"
                        character3Attentiveness="Very High"
                        character4Img={David}
                        character4Name="David"
                        character4Temperment="Expressionless"
                        character4Attentiveness="High"
                    />
                    <SimCard
                        title="Startup Pitches"
                        description="Head into the boardroom and present to a few higher-ups regarding your ideas for company expansion."
                        cover={pitches}
                        character1Img={Ava}
                        character1Name="Ava"
                        character1Temperment="Happy"
                        character1Attentiveness="Very High"
                        character2Img={Mark}
                        character2Name="Mark"
                        character2Temperment="Angry"
                        character2Attentiveness="Low"
                        character3Img={Susan}
                        character3Name="Susan"
                        character3Temperment="Happy"
                        character3Attentiveness="Very High"
                        character4Img={William}
                        character4Name="William"
                        character4Temperment="Happy"
                        character4Attentiveness="High"
                    />
                </Carousel>
            </div>

            {/* FEATURE SECTION */}
            <div className="feature-section">
                <h1 className="feature-title">Online learning is here to stay.</h1>
                <h1 className="feature-title">InStage is here to make it <p className="emphasis">immersive.</p></h1>
                <div className="feature-section-1" data-aos="fade-right">
                    <div className="feature-section-1a">
                        <h1 className="feature-number">1</h1>
                        <h1 className="feature-subtitle">Solo Practice. Delivered through Zoom.</h1>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">No accounts or downloads required.</p>
                        </div>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Student's self-schedule a ~25 minute InStage Session over Zoom.</p>
                        </div>
                    </div>
                    <div className="feature-section-1b">
                        <video className="feature-visual" autoPlay loop muted>
                            <source src={videoPreview} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="feature-section-2" data-aos="fade-left">
                    <div className="feature-section-2a">
                        <img src={screenshot} className="feature-visual" />
                    </div>
                    <div className="feature-section-2b">
                        <h1 className="feature-number">2</h1>
                        <h1 className="feature-subtitle">Immersive Practice</h1>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Provide students with an opportunity to engage in realistic practice in a safe, virtual environment.</p>
                        </div>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Students can retain 75% more by "doing."</p>
                        </div>
                    </div>
                </div>
                <div className="feature-section-3" data-aos="fade-right">
                    <div className="feature-section-3a">
                        <h1 className="feature-number">3</h1>
                        <h1 className="feature-subtitle">Driven by Data</h1>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Review instant feedback and develop skills through practice.</p>
                        </div>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Learn from objective feedback on metrics such as speaking pace, clarity, filler words, and more.</p>
                        </div>
                    </div>
                    <div className="feature-section-3b">
                        <video className="feature-visual data" autoPlay loop muted>
                            <source src={dataPreview} type="video/mp4" className="data-video" />
                        </video>
                    </div>
                </div>
                <div className="feature-section-4" data-aos="fade-left">
                    <div className="feature-section-4a">
                        <img src={screenshot} className="feature-visual" />
                    </div>
                    <div className="feature-section-4b">
                        <h1 className="feature-number">4</h1>
                        <h1 className="feature-subtitle">Collaborative</h1>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Instructors can be invited to join InStage sessions to provide live feedback and evaluation.</p>
                        </div>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Group Presentations. Multiple students can join a single session to practice and learn together.</p>
                        </div>
                    </div>
                </div>
                <div className="feature-section-5" data-aos="fade-right">
                    <div className="feature-section-5a">
                        <h1 className="feature-number">5</h1>
                        <h1 className="feature-subtitle">Safe and Private</h1>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Stay protected through the reliable security of Zoom's software.</p>
                        </div>
                        <div className="feature-section-text-box">
                            <img src={rightArrow} className="right-arrow"/><p className="feature-text">Students control the sharing of their data report and the optionial video recording.</p>
                        </div>
                    </div>
                    <div className="feature-section-5b">
                        <img src={girlOnLaptop} className="feature-visual" alt="girl-on-laptop" />
                    </div>
                </div>
            </div>

            {/* DIVIDER2 SECTION */}
            <div className="divider2-section">
                <img className="divider2-curve-1" src={divider3} />
                <img className="divider2-curve-2" src={divider4} />
                <div className="social-proof-divider2">
                    <h1 className="divider2-section-title">Ready to get started?</h1>
                    <a href="/demo" style={{textDecoration: "none"}}><button className="cta-btn-2">Schedule a Private Demo</button></a>
                </div>
                <div className="option-section-topper"></div>
            </div>

            {/* OPTION SECTION */}
            <div className="option-section">
                <h1 className="option-title">International Students benefit most by using InStage.</h1>
                <div className="example-btn-container">
                    <div className="example-1" data-aos="zoom-in" ref={example1}>
                        <div className="option-icon-container">
                            <img src={recruiting} className="option-icon" alt="find-my-friend-icon" />
                        </div>
                        <div>
                            <h2 className="example-title">Recruiting</h2>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">Use InStage to efficiently conduct screening interviews.</p>
                            </div>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">Showcase immersive learning capacity to candidates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="example-2" data-aos="zoom-in" data-aos-delay="600" ref={example2}>
                        <div className="option-icon-container">
                            <img src={retaining} className="option-icon" alt="find-my-friend-icon" />
                        </div>
                        <div>
                            <h2 className="example-title">Retaining</h2>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">Increase online learning engagement.</p>
                            </div>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">InStage users report 94% more confidence.</p>
                            </div>
                        </div>
                    </div>

                    <div className="example-3" data-aos="zoom-in" data-aos-delay="1200" ref={example3}>
                        <div className="option-icon-container">
                            <img src={transitioning} className="option-icon" alt="find-my-friend-icon" />
                        </div>
                        <div>
                            <h2 className="example-title">Transitioning</h2>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">Employers say that they want students with better soft-skills.</p>
                            </div>
                            <div className="example-text-box">
                                <img src={check} className="example-checkmark" alt="checkmark" />
                                <p className="example-text">Learn interviewing norms and increase.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="option-subtitle"></h1>
                <div className="option-testimonial-container">
                    <div className="option-testimonial-section-1">
                        <p>"I think it's a good way to improve my English skills and improve my speech skills."</p>
                        <p>- International Student</p>
                    </div>
                    <div className="option-testimonial-section-2">
                        {/* <ReactPlayer className="video-3" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" /> */}
                        <button className="video-3-btn" onClick={()=> setOpen3(true)}>▶︎</button>
                        <img src={screenshot2} className="video-3-img" />
                        <ModalVideo className="video-3" channel='vimeo' autoplay controls="false" isOpen={isOpen3} allowFullScreen videoId="515487808" onClose={() => setOpen3(false)} />
                    </div>
                </div>
            </div>

            <img className="divider-curve-3" src={divider2} />

            {/* PRICING SECTION */}
            <div className="pricing-section">
                <h1 className="pricing-title">Remotely engage your students with InStage Practice Sessions</h1>
                <div className="pricing-breakdown">
                    <div className="pricing-card bounce">
                        <p className="pricing-card-text">InStage is sold by the session.</p>
                        <p className="pricing-card-text">Students receive a link that allows them to book a practice session.</p>
                        <p className="pricing-card-text">Click below to learn more.</p>
                        <a href="/demo" style={{textDecoration: "none"}}><button className="pricing-card-btn">Talk to Us</button></a>
                    </div>
                    {/* <div className="pricing-single bounce">
                        <h2 className="pricing-card-title">Single Practice Sessions</h2>
                        <p className="pricing-card-text">Students receive a session link that allows them to book a single practice session.</p>
                        <a href="/pricing" style={{textDecoration: "none"}}><button className="pricing-card-btn">Learn More</button></a>
                    </div> */}
                    <div className="pricing-detail-section">
                        <div className="pricing-section-text-box">
                            <img src={checkGreen} className="right-arrow-pricing"/><p className="pricing-detail-text">No downloads or accounts are required to get started</p>
                        </div>
                        <div className="pricing-section-text-box">
                            <img src={checkGreen} className="right-arrow-pricing"/><p className="pricing-detail-text">Instantly deploy remote-simulations to your students</p>
                        </div>
                        <div className="pricing-section-text-box">
                            <img src={checkGreen} className="right-arrow-pricing"/><p className="pricing-detail-text">Immersive learning with data-driven feedback</p>
                        </div>
                    </div>
                </div>
                <h2 className="pricing-subtitle">InStage is only available through educational institutions and businesses.</h2>
            </div>

            {/* SOCIAL DIVIDER SECTION */}
            <div className="social-divider-section">
                <div className="social-divider-container">
                    <img src={Seneca} className="social-divider-logo" alt="seneca-logo" />
                    <div className="social-divider-text-container">
                        <p className="social-divider-text">
                        "I have seen students' confidence grow and their skills develop, which has lead them to be better positioned to effectively communicate in a job interview or present ideas."
                        </p>
                        <div className="social-divider-names">
                            <p className="social-divider-person">Chris Dudley</p>
                            <p className="social-divider-position">Director</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-divider-bottom">
                <img className="social-divider-bottom-curve" src={divider5} />
            </div>

            {/* CTA SECTION */}
            <div className="cta-section">
                <img className="cta-background" src={glassesMan} alt="man-with-glasses" />
                <div className="cta-detail-container">
                    <h1 className="cta-title">Want to learn more?</h1>
                    <h2 className="cta-text1">If you’re ready to learn more about InStage, click the link below and try your very own simulated demo. From there, you can decide if InStage is right for you.</h2>
                    <a href="/demo" style={{textDecoration: "none"}}>
                        <button className="cta-btn-3">Schedule demo</button>
                    </a>

                    <h2 className="cta-text2">We host short live streams every <strong>Wednesday at 11am ET</strong> to provide a quick way to see InStage in action.</h2>
                    <div className="cta-btn-container">
                        <a href="https://instage.zoom.us/webinar/register/WN_8zi2fFH2S62f-jVLFWZ9hw">
                            <button className="cta-btn-4">Watch a live demo</button>
                        </a>
                        <a href="https://instage.zoom.us/webinar/register/WN_0w47HFJnRHuhk6KXCO38sw">
                            <button className="cta-btn-5">Watch a live event</button>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;
