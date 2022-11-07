import React, {useRef} from 'react';
import "./startStyle.css";

const Start = ({setUserName}) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value &&  setUserName(inputRef.current.value)
    }
    return (
        <>
            <div className={"start"}>
                <input type="text" className={"startInput"} placeholder={"enter your name"}
                       ref={inputRef}
                />
                <button className={"startButton"} onClick={handleClick}>Start</button>
            </div>

        </>
    );
};

export default Start;