import React, { useState, useRef } from "react";
import screenshot from "../images/simscreenshot.png";
import characters from "../images/characters.png";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function SimCard(props) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div className="sim-card">
            <img src={props.cover} className="sim-card-img"/>
            <h1 className="sim-card-title">{props.title}</h1>
            <div className="sim-card-text-box">
                <p className="sim-card-text">{props.description}</p>
            </div>

            {/* <button ref={target} onClick={() => setShow(!show)}>
                Click me!
            </button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    My Tooltip
                </Tooltip>
                )}
            </Overlay> */}


            <div className="sim-characters-container">
                <Tippy
                    content={
                        <div>
                            <p className="pop-up-text"><strong>{props.character1Name}</strong></p>
                            <p className="pop-up-text">Temperment: {props.character1Temperment}</p>
                            <p className="pop-up-text">Attentiveness: {props.character1Attentiveness}</p>
                        </div>
                    }
                >
                    <img src={props.character1Img} className="sim-character" alt="simulation character" />
                </Tippy>
                <Tippy
                    content={
                        <div>
                            <p className="pop-up-text"><strong>{props.character2Name}</strong></p>
                            <p className="pop-up-text">Temperment: {props.character2Temperment}</p>
                            <p className="pop-up-text">Attentiveness: {props.character2Attentiveness}</p>
                        </div>
                    }
                >
                    <img src={props.character2Img} className="sim-character" alt="simulation character" />
                </Tippy>
                <Tippy
                    content={
                        <div>
                            <p className="pop-up-text"><strong>{props.character3Name}</strong></p>
                            <p className="pop-up-text">Temperment: {props.character3Temperment}</p>
                            <p className="pop-up-text">Attentiveness: {props.character3Attentiveness}</p>
                        </div>
                    }
                >
                    <img src={props.character3Img} className="sim-character" alt="simulation character" />
                </Tippy>
                <Tippy
                    content={
                        <div>
                            <p className="pop-up-text"><strong>{props.character4Name}</strong></p>
                            <p className="pop-up-text">Temperment: {props.character4Temperment}</p>
                            <p className="pop-up-text">Attentiveness: {props.character4Attentiveness}</p>
                        </div>
                    }
                >
                    <img src={props.character4Img} className="sim-character" alt="simulation character" />
                </Tippy>
            </div>
        </div>
    )
}

export default SimCard;