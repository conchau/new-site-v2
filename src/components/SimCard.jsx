import React from "react";
import screenshot from "../images/simscreenshot.png";
import characters from "../images/characters.png";

function SimCard(props) {

    return (
        <div className="sim-card">
            <img src={screenshot} className="sim-card-img"/>
            <h1 className="sim-card-title">{props.title}</h1>
            <div className="sim-card-text-box">
                <p className="sim-card-text">{props.description}</p>
                <p className="sim-card-text">Est. Time: {props.time}</p>
            </div>
            <img src={characters} className="sim-characters" alt="simulation characters" />
        </div>
    )
}

export default SimCard;