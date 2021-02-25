import React from "react";

function Example3(props) {
    return (
        <div className="example-3">
            <h1 className="example-options-title">{props.explainer}</h1>
            <div className="example-sim">
                <h2 className="example-sim-title">Freestyle Presentation (Session 119)</h2>
                <p className="example-sim-text">Students can practice a presenation on any topic and get data-driven feedback.</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Self-Introduction (Session 101)</h2>
                <p className="example-sim-text">Learn the 4 steps of a self-introduction and practice introducing yourself to new peers!</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Panel Interviews (Session 107)</h2>
                <p className="example-sim-text">Complete a Panel Interview. Students will learn and practice using the STAR model.</p>
            </div>
        </div>
    )
}

export default Example3;