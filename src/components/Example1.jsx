import React from "react";

function Example1(props) {
    return (
        <div className="example-1">
            <h1 className="example-options-title">{props.explainer}</h1>
            <div className="example-sim">
                <h2 className="example-sim-title">Self-Introduction (Session 101)</h2>
                <p className="example-sim-text">Learn the 4 steps of a self-introduction and practice introducing yourself to an employer!</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Interview Practice (Session 103)</h2>
                <p className="example-sim-text">Complete a Panel Interview. Learn and practice using the STAR model.</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Handling Objections (Session 112)</h2>
                <p className="example-sim-text">Learn and practice a 4 step model to handling objections.</p>
            </div>
        </div>
    )
}

export default Example1;