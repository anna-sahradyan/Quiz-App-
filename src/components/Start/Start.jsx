import React from 'react';
import "./startStyle.css";

const Start = () => {

    return (
        <>
            <div className={"start"} placeholder={"enter your name"}>
                <input type="text" className={"startInput"}/>
                <button className={"startButton"}>Start</button>
            </div>

        </>
    );
};

export default Start;