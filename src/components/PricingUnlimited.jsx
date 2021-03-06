import React, { useState, useRef } from "react";
import pricing from "./pricingStyles.module.css";
import rightArrow from "../images/rightArrow.png";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HubspotForm from "react-hubspot-form"

function PricingUnlimited() {

    return (
        <div>
            <div className={pricing.sections}>
                <div className={pricing.unlimitedSection1}>
                    <div className={pricing.unlimitedContainer}>
                        <div className={pricing.optionContainer}>
                            <div className={pricing.optionGroup}>
                                <div className={pricing.optionTextContainer}>
                                    <h3 className={pricing.optionTitle}>Group Deployment</h3>
                                    <h3 className={pricing.optionPrice}>$99</h3>
                                </div>
                                <p className={pricing.optionPriceText}>Student/Semester</p>
                                <p className={pricing.optionText}>Minimum 50 students</p>
                            </div>
                            <div className={pricing.optionInstitution}>
                                <div className={pricing.optionTextContainer}>
                                    <h3 className={pricing.optionTitle}>Institution-Wide Deployment</h3>
                                    <h3 className={pricing.optionPrice}>$25</h3>
                                </div>
                                <p className={pricing.optionPriceText}>Student/Year*</p>
                                <p className={pricing.optionText}>Price depends on student volume</p>
                            </div>
                        </div>
                        <div className={pricing.unlimitedDetailContainer}>
                            <div className={pricing.unlimitedDetailSection}>
                                <div className={pricing.unlimitedSectionTextBox}>
                                    <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.unlimitedDetailText}>Unlimited Usage</p>
                                </div>
                                <div className={pricing.unlimitedSectionTextBox}>
                                    <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.unlimitedDetailText}>Live Onboarding & Staff Training</p>
                                </div>
                                <div className={pricing.unlimitedSectionTextBox}>
                                    <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.unlimitedDetailText}>User Management & Admin Portal</p>
                                </div>
                                <div className={pricing.unlimitedSectionTextBox}>
                                    <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.unlimitedDetailText}>Chat Support for Students</p>
                                </div>
                                <div className={pricing.unlimitedSectionTextBox}>
                                    <img src={rightArrow} className={pricing.rightArrowPricing}/><p className={pricing.unlimitedDetailText}>LMS Intergration (Institution only)</p>
                                </div>
                            </div>
                            <div className={pricing.socialProof1}>
                                <div className={pricing.logoContainer}>
                                    <img className={pricing.proofLogo} src={Seneca} alt="Seneca Logo"/>
                                </div>
                                <div className={pricing.logoContainer}>
                                    <img className={pricing.proofLogo} src={Fanshawe} alt="Fanshawe Logo"/>
                                </div>
                                <div className={pricing.logoContainer}>
                                    <img className={pricing.proofLogo} src={Humber} alt="Humber Logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pricing.unlimitedSection2}>
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

export default PricingUnlimited;