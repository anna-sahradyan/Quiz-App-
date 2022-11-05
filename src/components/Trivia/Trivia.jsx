import React from 'react';
import "./triviaStyle.css";

const Trivia = () => {
    return (
        <>
            <div className={"trivia"}>
            <div className={"question"}>What is happened?</div>
            <div className={"answers"}>
                <div className="answer">1</div>
                <div className="answer">2</div>
                <div className="answer">3</div>
                <div className="answer">4</div>

            </div>
            </div>
        </>
    );
};

export default Trivia;