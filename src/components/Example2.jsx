import React from "react";

function Example2(props) {
    return (
        <div className="example-2" data-aos="flip-right">
            <h1 className="example-options-title">{props.explainer}</h1>
            <div className="example-sim">
                <h2 className="example-sim-title">Presentation + Q&A (Session 111)</h2>
                <p className="example-sim-text">Make a short presentation followed by a Question and Answer period.</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Making a Self-Introduction (Session 101)</h2>
                <p className="example-sim-text">Learn the 4 steps of a self-introduction and practice introducing yourself to an employer!</p>
            </div>
            <div className="example-sim">
                <h2 className="example-sim-title">Giving Team Feedback (Session 110)</h2>
                <p className="example-sim-text">Learn & practice a 4 step model to give positive and critical feedback to a small team.</p>
            </div>
        </div>
    )
}

export default Example2;