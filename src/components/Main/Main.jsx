import React, {useEffect, useState} from 'react';
import './mainStyle.css';
import Trivia from "../Trivia/Trivia";
import money from "../../data/money";
import Timer from "../Timer/Timer";

const Main = React.memo(function Main({setQuestionNumber, questionNumber}){
    const [earned, setEarned] = useState("$ 0");
    const [timeStop, setTimeStop] = useState(false);
    useEffect(() => {
        questionNumber > 1 && setEarned(money.find((item) => item.id === questionNumber - 1).amount)

    }, [money, questionNumber])

    return (
        <>
            {timeStop ? <h1 className={"endText"}>You Earned:{earned}</h1> : (

                <>
                    <div className={"top"}>
                        <div className={"timer"}><Timer setTimeStop={setTimeStop} questionNumber={questionNumber}/></div>
                    </div>
                    <div className={"bottom"}><Trivia setQuestionNumber={setQuestionNumber} q
                                                      questionNumber={questionNumber}
                                                      timeStop={timeStop} setTimeStop={setTimeStop}/>
                    </div>
                </>)}

        </>
    );
});

export default Main;