import React from "react";
import Title from "../components/Title.js"
import Question from "../components/Question.js"

export default function App() {
    const [gameStart, setGameStart] = React.useState(false)
    
    function startQuiz() {
        setGameStart(true)
    }

    return (
        <div className="app-container">
            {
                gameStart === false 
                ? 
                <Title startQuiz={startQuiz}/> 
                :
                <div className="question-container"> 
                <Question />
                </div>
            }
        </div>
    )
}