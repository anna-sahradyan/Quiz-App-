import React, {useEffect, useState} from 'react';
import "./triviaStyle.css";
import text from "../../data/text";
import useSound from "use-sound";
import play from "../../sounds/play.mp3";
import wrong from "../../sounds/wrong.mp3";
import correct from "../../sounds/correct.mp3";

const Trivia = ({questionNumber, setQuestionNumber, setTimeStop}) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [classname, setClassName] = useState("answer");
    const [letsPlay] = useSound(play);
    const [wrongAnswer] = useSound(wrong);
    const [correctAnswer] = useSound(correct);

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
        delay(5000, () => {
            if (item.correct) {
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                })

            } else {
                wrongAnswer();
                delay(1000, () => {
                    setTimeStop(true);
                })

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
                             onClick={() => !selectedAnswer && handleClick(item)}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Trivia;