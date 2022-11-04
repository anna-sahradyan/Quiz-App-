import React, {useState} from 'react';
import money from "../../data/money.js"
import "./pyramidStyle.css";

const Pyramid = () => {
    const [questionNumber, setQuestionNumber] = useState(5);

    return (
        <>
            <ul className={"moneyList"}>
                {money.map((item, index) => <li
                    className={questionNumber === item.id ? `moneyListItem active` : `moneyListItem`}
                    key={`${item}_${index}`}>
                    <span className={"moneyListItemNumber"}>{item.id}</span>
                    <span className={"moneyListItemAmount"}>{item.amount}</span>
                </li>)}


            </ul>
        </>
    );
};

export default Pyramid;