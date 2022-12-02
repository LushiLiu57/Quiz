import React, { useContext } from 'react';
import { QuizContext } from '../Etc/CreateContext';
import"../App.css"

export default function Menu() {
    const{state, setState} = useContext(QuizContext);
    return (
        <div className='Menu'>
            <h1>How well do you know Pokemon? You might know every name, but what about their stats? Take this quiz to see
                how much you actually know
            </h1>
            <button onClick={()=>{setState("main");}}>START</button>
        </div>
    )
}