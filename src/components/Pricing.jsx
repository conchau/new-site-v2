import React, { useRef } from "react";
import Footer from "./Footer";
import pricing from "./pricingStyles.module.css";

function Pricing() {

    //References to pricing buttons for updating the CSS on toggle
    const unlimited = useRef(null);
    const single = useRef(null);

    function switchOption (option) {

        if (option === "unlimited"){
            unlimited.current.className = "active-option-left";
            single.current.className = "inactive-option-right";
        } else if (option === "single") {
            unlimited.current.className = "inactive-option-left";
            single.current.className = "active-option-right";
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
            </div>
        </div>
    )
}

export default Pricing;