import React from "react";
import Title from "../components/Title.js"
import Question from "../components/Question.js"

export default function App() {
    const [gameStart, setGameStart] = React.useState(false)
    const [butonSelected, setButtonSelected] = React.useState(false)
    
    function startQuiz() {
        setGameStart(true)
    }

    function buttonIsSelected() {
        setButtonSelected(prevState => !prevState)
        console.log("clicked")
    }

    return (
        <div className="app-container">
            {
                gameStart === false 
                ? 
                <Title startQuiz={startQuiz}/> 
                :
                <div className="question-container"> 
                <Question buttonSelected={buttonIsSelected} buttonClicked={butonSelected}/> 
                <Question buttonSelected={buttonIsSelected} buttonClicked={butonSelected}/>
                <Question buttonSelected={buttonIsSelected} buttonClicked={butonSelected}/>
                <Question buttonSelected={buttonIsSelected} buttonClicked={butonSelected}/>
                <Question buttonSelected={buttonIsSelected} buttonClicked={butonSelected}/>
                <button className="check-button">Check Answers</button>
                </div>
            }
        </div>
    )
}