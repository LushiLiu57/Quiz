import React, {useState, useContext} from 'react';
import {questionlist} from "../Etc/QuestionList";
import { QuizContext } from '../Etc/CreateContext';

function Main() {
    const [questionNum, setQuestionNum] = useState(0);
    const {score, setScore, setState} = useContext(QuizContext);

    const next = (myAns) => {
        if (questionlist[questionNum].Ans == myAns) {
            setScore(score + 1);
        }
        {questionNum == questionlist.length -1 ?(setState("end")) : (setQuestionNum(questionNum + 1))}
    }

    return (
        <div className="Quiz">
            <h2>Question {questionNum + 1} of {questionlist.length}:</h2>
            <h1>{questionlist[questionNum].Q}</h1>
            <div className="option">
                <button onClick={() => {next("A")}}>{questionlist[questionNum].A}</button>
                <button onClick={() => {next("B")}}>{questionlist[questionNum].B}</button>
                <button onClick={() => {next("C")}}>{questionlist[questionNum].C}</button>
                <button onClick={() => {next("D")}}>{questionlist[questionNum].D}</button>
            </div>
            
        </div>
    )
}

export default Main;