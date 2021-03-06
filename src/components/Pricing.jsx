import React, { useState, useRef } from "react";
import Footer from "./Footer";
import pricing from "./pricingStyles.module.css";
import rightArrow from "../images/rightArrow.png";
import Seneca from "../images/Seneca.png";
import Humber from "../images/Humber.png";
import Fanshawe from "../images/Fanshawe.png";
import HubspotForm from "react-hubspot-form"
import PricingUnlimited from "./PricingUnlimited";
import PricingSingle from "./PricingSingle";

function Pricing() {

    //References to pricing buttons for updating the CSS on toggle
    const unlimited = useRef(null);
    const single = useRef(null);

    const [selectedOption, setSelectedOption] = useState("unlimited")

    function switchOption (option) {

        if (option === "unlimited"){
            unlimited.current.className = "active-option-left";
            single.current.className = "inactive-option-right";
            setSelectedOption("unlimited");
        } else if (option === "single") {
            unlimited.current.className = "inactive-option-left";
            single.current.className = "active-option-right";
            setSelectedOption("single");
        }

    }

    return (
        <div>
            <div className={pricing.pricingPage}>
                <h1 className={pricing.pricingTitle}>Easy to deploy. Scale with usage.</h1>
                <div className={pricing.pricingButtonContainer}>
                    <button
                        className={pricing.unlimited}
                        ref={unlimited}
                        onClick={() => switchOption("unlimited")}
                        >Unlimited Seats
                    </button>
                    <button
                        className={pricing.single}
                        ref={single}
                        onClick={() => switchOption("single")}
                        >Single Sessions
                    </button>
                </div>
                {selectedOption === "unlimited" && (
                <h1 className={pricing.pricingSubtitle} data-aos="fade-in">Students get <p className={pricing.emphasis}>unlimited</p> access to InStage</h1>
                )}
                {selectedOption === "single" && (
                <h1 className={pricing.pricingSubtitle} data-aos="fade-in">Students <p className={pricing.emphasis}>self-schedule</p> and complete their session <p className={pricing.emphasis}>independently</p>.</h1>
                )}
                {selectedOption === "unlimited" && (
                <PricingUnlimited />
                )}
                {selectedOption === "single" && (
                <PricingSingle />
                )}


            </div>

            <Footer />

        </div>
    )
}

export default Pricing;