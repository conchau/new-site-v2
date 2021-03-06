import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

function SimMenu(props) {

    const [provinceSelect, setSimSelect] = useState("Select Simulation");

    function handleSimSelect(event) {
        setSimSelect(event.target.name);
        // props.onSelect(event.target.name);
    }

    return(
    <div>
    <Dropdown className="sim-menu">
        <Dropdown.Toggle
            style={{backgroundColor: "white"}}
        >
        {provinceSelect}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item
                name="interviewPractice"
                onClick={handleSimSelect}
                >Interview Practice
            </Dropdown.Item>
            <Dropdown.Item
                name="selfIntroduction"
                onClick={handleSimSelect}
                >Self-Introduction
            </Dropdown.Item>
            <Dropdown.Item
                name="handlingObjections"
                onClick={handleSimSelect}
                >Handling Objections
            </Dropdown.Item>
            <Dropdown.Item
                name="productPresentation"
                onClick={handleSimSelect}
                >Product Presentation
            </Dropdown.Item>
            <Dropdown.Item
                name="freestylePresentation"
                onClick={handleSimSelect}
                >Freestyle Presentation
            </Dropdown.Item>
            <Dropdown.Item
                name="givingFeedback"
                onClick={handleSimSelect}
                >Giving Feedback
            </Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
    </div>
    )
}

export default SimMenu;