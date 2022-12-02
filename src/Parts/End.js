import React, { useContext } from 'react';
import { QuizContext } from '../Etc/CreateContext';
import {questionlist} from "../Etc/QuestionList";
import"../App.css";

function End() {

    const {score, setScore, setState} = useContext(QuizContext);

    const restart = () => {
        setScore(0);
        setState("menu");
    }

    return (
        <div className = "End">
            <h4>You got {score} out of {questionlist.length} correct</h4>
            <button onClick={restart}>TAKE QUIZ AGAIN</button>
        </div>
    );
}

export default End;