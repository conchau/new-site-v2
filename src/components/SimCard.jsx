import React from "react";
import screenshot from "../images/simscreenshot.png";

function SimCard(props) {

    return (
        <div className="sim-card">
            <img src={screenshot} className="sim-card-img"/>
            <h1 className="sim-card-title">{props.title}</h1>
            <p className="sim-card-text">{props.description}</p>
        </div>
    )
}

export default SimCard;