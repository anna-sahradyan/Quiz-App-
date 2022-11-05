import React from 'react';
import './mainStyle.css';
import Trivia from "../Trivia/Trivia";

const Main = () => {
    return (
        <>
            <div className={"top"}>
                <div className={"timer"}>30</div>
            </div>
            <div className={"bottom"}><Trivia/></div>
        </>
    );
};

export default Main;