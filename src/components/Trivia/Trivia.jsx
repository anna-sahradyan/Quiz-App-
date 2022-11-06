import React, {useEffect, useState} from 'react';
import "./triviaStyle.css";
import text from "../../data/text";

const Trivia = ({questionNumber, setQuestionNumber}) => {
    const [timeStop, setTimeStop] = useState(false);
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [classname, setClassName] = useState("answer");
    useEffect(() => {
        setQuestion(text[questionNumber - 1])
    }, [text, questionNumber]);
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }
    const handleClick = (item) => {
        setSelectedAnswer(item);
        setClassName("answer active");
        delay(3000, () => setClassName(item.correct ? "answer correct" : "answer wrong"));
        delay(6000, () => {
            if (item.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                setTimeStop(true);
            }
        });

    }


    return (
        <>
            <div className={"trivia"}>
                <div className={"question"}>{question?.question}</div>
                <div className={"answers"}>
                    {question?.answers.map((item, index) => (
                        <div className={selectedAnswer === item ? classname : "answer"} key={`${item}_${index}`}
                             onClick={() => handleClick(item)}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Trivia;