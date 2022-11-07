import React, {useState} from 'react';
import Pyramid from "./components/Pyramid/Pyramid";
import Main from "./components/Main/Main";
import Start from "./components/Start/Start";


const App = () => {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    return (
        <>
            <div className={"wrapper"}>
                {username ? (
                    <>
                        <div className={"main"}>
                            <Main setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
                        </div>
                        <div className={"pyramid"}>
                            <Pyramid setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
                        </div>
                    </>
                ):<Start setUserName={setUsername}/>}


            </div>

        </>
    );
};

export default App;