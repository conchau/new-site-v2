import React from "react";
import Footer from "./Footer";
import demo from "./demoStyles.module.css";
import ReactPlayer from "react-player";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HubspotForm from "react-hubspot-form";
import checkGreen from "../images/checkgreen.png";
import Educator from "../images/educator.png";


function Demo() {

    return (
        <div>
            <div className={demo.demoPage}>
                {/* HERO SECTION */}
                <div className={demo.section1}>
                    <h1 className={demo.demoTitle}>Let us show it off</h1>
                    <h2 className={demo.demoSubtitle}>Add Soft-Skills Simulations to Zoom</h2>
                    <p className={demo.demoText}>Students can learn how to introduce themselves, deliver presentations, communicate effectively, and sharpen their interview skills in an immersive training environment.</p>
                    <div className={demo.featureContainer}>
                        <img src={checkGreen} className={demo.rightArrowPricing}/>
                        <h2 className={demo.featureContainerText}>Private Practice. Delivered through Zoom.</h2>
                    </div>
                    <div className={demo.featureContainer}>
                        <img src={checkGreen} className={demo.rightArrowPricing}/>
                        <h2 className={demo.featureContainerText}>Driven By Data</h2>
                    </div>
                    <div className={demo.featureContainer}>
                        <img src={checkGreen} className={demo.rightArrowPricing}/>
                        <h2 className={demo.featureContainerText}>Collaborative & Communicative.</h2>
                    </div>
                    <div className={demo.socialProofContainer}>
                        <h2 className={demo.socialProofText}>Experiencing InStage</h2>
                        <div className={demo.logoContainer}>
                            <img src={Seneca} className={demo.logo} alt="Seneca-logo" />
                            <img src={Fanshawe} className={demo.logo} alt="Fanshawe-logo" />
                            <img src={Humber} className={demo.humberLogo} alt="Humber-logo" />
                        </div>
                    </div>
                    <div className={demo.socialDividerContainer}>
                        <div className={demo.socialDividerTextContainer}>
                            <p className={demo.socialDividerText}>
                                "I have seen students' confidence grow and their skills develop, which has lead them to be better positioned to effectively communicate in a job interview or present ideas."
                            </p>
                            <div className={demo.socialDividerNames}>
                                <div>
                                    <p className={demo.socialDividerPerson}>Chris Dudley</p>
                                    <p className={demo.socialDividerPosition}>Director of Entrepreneurship at Seneca College</p>
                                </div>
                                {/* <img src={Seneca} className={demo.senecaLogo} alt="Seneca-logo" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={demo.section2}>
                    <HubspotForm
                        portalId="9231254"
                        formId="fa9b25c1-a10b-47b4-a99b-ca084e949f77"
                        onSubmit={() => console.log('Submit!')}
                        onReady={(form) => console.log('Form ready!')}
                        loading={<div>Loading...</div>}
                    />
                </div>

                {/* <img src={Educator} className={demo.section2Background} alt="educator man" /> */}

            </div>

            <Footer />

        </div>
    )
}

export default Demo;