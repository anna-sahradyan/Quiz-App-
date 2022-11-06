import React from 'react';
import './mainStyle.css';
import Trivia from "../Trivia/Trivia";

const Main = ({setQuestionNumber ,questionNumber}) => {

    return (
        <>
            <div className={"top"}>
                <div className={"timer"}>30</div>
            </div>
            <div className={"bottom"}><Trivia setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/></div>
        </>
    );
};

export default Main;