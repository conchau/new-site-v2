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
import data from "../images/data.png";
import girlOnLaptop from "../images/girl-on-laptop.png";

const axios = require("axios").default;

function Home() {
    const history = useHistory();

    const [explainerTitle, setExplainerTitle] = useState("To help students stand out to employers...")
    const [exampleCard, setExampleCard] = useState("example-1");

    // React Modal Video Component implementation
    const [isOpen, setOpen] = useState(false)

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
                        <h1 className="hero-title">Simulations for soft skills</h1>
                        <h2 className="hero-subtitle">Add simulations to Zoom</h2>
                        <p className="hero-text">Through realistic practice sessions, student's can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment. </p>
                    </div>
                    <a href="/demo" style={{textDecoration: "none"}}><button className="cta-btn-1">Schedule Private Demo</button></a>
                </div>
                <div className="hero-section-2">
                    <div className="hero-section-2-fixed">
                            {/* <ReactPlayer className="video-1" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" /> */}
                            <ModalVideo className="video-1" channel='vimeo' autoplay controls="false" isOpen={isOpen} allowFullScreen videoId="508210873" onClose={() => setOpen(false)} />
                            <button className="video-1-btn" onClick={()=> setOpen(true)}>VIEW DEMO</button>
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
                    <ReactPlayer className="video-2" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" />
                </div>
                <div className="demo-section-2">
                    <h1 className="demo-title">Watch the demo</h1>
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
                        title="Self-Introduction"
                        description="Learn the 4 steps of a self-introduction and practice introducing yourself to an employer!"
                        time="5:00"
                    />
                    <SimCard
                        title="Interview Practice"
                        description="Complete a Panel Interview. Learn and practice using the STAR model."
                        time="25:00"
                    />
                    <SimCard
                        title="Handling Objections"
                        description="Learn and practice a 4 step model to handling objections."
                        time="15:00"
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
                    <div className="active-example" data-aos="zoom-in" ref={example1} onMouseEnter={console.log("Focus!")}>
                    {/* onClick={() => switchExample("example-1")} */}
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
                    {/* <div className="example-arrow-container">
                        {exampleCard === "example-1" && (
                        <img src={rightArrow2} className="example-arrow" data-aos="zoom-in-right" alt="right-arrow" />
                        )}
                    </div> */}
                    <div className="active-example" data-aos="zoom-in" data-aos-delay="600" ref={example2}>
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
                    {/* <div className="example-arrow-container">
                        {exampleCard === "example-2" && (
                        <img src={rightArrow2} className="example-arrow" data-aos="zoom-in-right" alt="right-arrow" />
                        )}
                        {exampleCard === "example-3" && (
                        <img src={leftArrow2} className="example-arrow" data-aos="zoom-in-left" alt="left-arrow" />
                        )}
                    </div> */}
                    <div className="active-example" data-aos="zoom-in" data-aos-delay="1200" ref={example3}>
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
                <div className="example-container">
                        {/* <div className="example-card">
                            {exampleCard === "example-1" && (
                                <div className="example-1" data-aos="fade-right">
                                    <p className="example-text">Use InStage to efficiently conduct screening interviews.</p>
                                    <p className="example-text">Showcase immersive learning capacity to candidates.</p>
                                </div>
                            )}
                            {exampleCard === "example-2" &&(
                                <div className="example-2" data-aos="fade-right">
                                    <p className="example-text">Increase online learning engagement.</p>
                                    <p className="example-text">InStage users report 94% more confidence.</p>
                                </div>
                            )}
                            {exampleCard === "example-3" &&(
                                <div className="example-3" data-aos="fade-right">
                                    <p className="example-text">Employers say that they want students with better soft-skills.</p>
                                    <p className="example-text">Learn interviewing norms and increase.</p>
                                </div>
                            )}
                        </div> */}
                </div>
                <h1 className="option-subtitle">Student Testimonials</h1>
                <div className="option-testimonial-container">
                    <div className="option-testimonial-section-1">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Maecenas pharetra convallis posuere morbi."</p>
                        <p>- Jose Student</p>
                    </div>
                    <div className="option-testimonial-section-2">
                        <ReactPlayer className="video-3" url="https://vimeo.com/508210873/750aa8a2cd" controls="true" />
                    </div>
                </div>
            </div>

            <img className="divider-curve-3" src={divider2} />

            {/* PRICING SECTION */}
            <div className="pricing-section">
                <h1 className="pricing-title">Remotely engage your students with InStage Practice Sessions</h1>
                <h2 className="pricing-subtitle">InStage is only available through educational institutions and businesses.</h2>
                <div className="pricing-breakdown">
                    <div className="pricing-unlimited bounce">
                        <h2 className="pricing-card-title">Unlimited Practice Sessions</h2>
                        <p className="pricing-card-text">Students can book an unlimited number of practice sessions during the semester.</p>
                        <a href="/pricing" style={{textDecoration: "none"}}><button className="pricing-card-btn">Learn More</button></a>
                    </div>
                    <div className="pricing-single bounce">
                        <h2 className="pricing-card-title">Single Practice Sessions</h2>
                        <p className="pricing-card-text">Students receive a session link that allows them to book a single practice session.</p>
                        <a href="/pricing" style={{textDecoration: "none"}}><button className="pricing-card-btn">Learn More</button></a>
                    </div>
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
            </div>

            {/* SOCIAL DIVIDER SECTION */}
            <div className="social-divider-section">
                <div className="social-divider-container">
                    <div className="social-profile-pic"></div>
                    <div className="social-divider-text-container">
                        <p className="social-divider-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat.
                        </p>
                        <div className="social-divider-names">
                            <p className="social-divider-person">Dave School Director</p>
                            <img src={Fanshawe} className="social-divider-logo" alt="fanshawe-logo" />
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
