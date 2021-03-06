import React, { useState, useRef } from "react";
import pricing from "./pricingStyles.module.css";
import rightArrow from "../images/rightArrow.png";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HubspotForm from "react-hubspot-form";
import SimMenu from "./SimMenu";

function PricingSingle() {

    return (
        <div>
            <div className={pricing.sections}>
                <div className={pricing.singleSection1}>
                    <div className={pricing.singleContainer}>
                        <div className={pricing.singleStep1}>
                            <div className={pricing.singleNumber}>1</div>
                            <div className={pricing.simMenu2}>
                                <SimMenu />
                            </div>
                            <button className={pricing.showLibrary}>Show Library</button>
                        </div>
                        <div className={pricing.singleStep2}>
                            <div className={pricing.singleNumber}>2</div>
                            <div className={pricing.singleStep2a}>
                                <div className={pricing.calculatorContainer}>
                                    <div className={pricing.inputContainer}>
                                        <h2 className={pricing.singleSubtitle}>Enter number of single sessions</h2>
                                        <input type="number" />
                                    </div>
                                    <div className={pricing.resultContainer}>
                                        <h2 className={pricing.singleSubtitle}>Price per session</h2>
                                        <h2 className={pricing.result}>$29</h2>
                                    </div>
                                </div>
                                <div className={pricing.singleDetailContainer}>
                                    <div className={pricing.singleSectionTextBox}>
                                        <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>No downloads or accounts required</p>
                                    </div>
                                    <div className={pricing.singleSectionTextBox}>
                                        <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Instantly deploy remote-simulations to your students</p>
                                    </div>
                                    <div className={pricing.singleSectionTextBox}>
                                        <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Immersive learning with data-driven feedback</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={pricing.singleStep3}>
                            <div className={pricing.singleStep3a}>
                                <div className={pricing.singleNumber}>3</div>
                                <h2 className={`${pricing.singleSubtitle} ${pricing.step3Subtitle}`}>You will receive:</h2>
                            </div>
                        </div>
                        <div className={pricing.singleDetailContainer2}>
                            <div className={pricing.singleSectionTextBox}>
                                <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>A private booking URL to share with your students.</p>
                            </div>
                            <div className={pricing.singleSectionTextBox}>
                                <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Using the link, students select a convenient 30 minute time slot.</p>
                            </div>
                            <div className={pricing.singleSectionTextBox}>
                                <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Following the session, each student will receive a performance report.</p>
                            </div>
                            <div className={pricing.singleSectionTextBox}>
                                <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Students can optionally record the session.</p>
                            </div>
                            <div className={pricing.singleSectionTextBox}>
                                <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.singleDetailText}>Administrator portal to review shared-session data</p>
                            </div>
                        </div>
                        <div className={pricing.singleContainer2}>
                            <div className={pricing.singleContainer2a}>
                                <button className={pricing.finalPrice}>Show Final Price</button>
                                <p className={pricing.singleText}>*Currently only available in Canada & U.S.</p>
                            </div>
                            <div className={pricing.singleContainer2b}></div>
                        </div>
                    </div>
                </div>

                <h1 className={pricing.pricingTitle}>Need more than 99 sessions?</h1>
                <h1 className={pricing.pricingTitle}>Have some questions?</h1>


                <div className={pricing.singleSection2}>
                <h1 className={`${pricing.unlimitedSubtitle} ${pricing.formTitle}`}>Speak with our team</h1>
                    <HubspotForm
                    portalId="9231254"
                    formId="fa9b25c1-a10b-47b4-a99b-ca084e949f77"
                    onSubmit={() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                    />
                </div>
            </div>
        </div>
    )
}

export default PricingSingle;