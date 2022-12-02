import './App.css';
import React, {useState} from 'react';
import Menu from './Parts/Menu';
import Main from './Parts/Main';
import End from './Parts/End';
import {QuizContext} from "./Etc/CreateContext";

function App() {

  const [state, setState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1 className = "Title">POKEMON STATS QUIZ</h1>
      <QuizContext.Provider value={{state, setState, score, setScore}}>
        {state ==="menu" && <Menu />}
        {state ==="main" && <Main />}
        {state ==="end" && <End />}
      </QuizContext.Provider>
      
    </div>
  );
}

export default App;
