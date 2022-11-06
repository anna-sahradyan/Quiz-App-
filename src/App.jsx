import React, {useState} from 'react';
import Pyramid from "./components/Pyramid/Pyramid";
import Main from "./components/Main/Main";


const App = () => {
    const [questionNumber, setQuestionNumber] = useState(1);
    return (
        <>
            <div className={"wrapper"}>
                <div className={"main"}>
                    <Main setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
                </div>
                <div className={"pyramid"}>
                    <Pyramid setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
                </div>

            </div>

        </>
    );
};

export default App;