import React from "react";

export default function Title(props) {
    return (
        <div className="title-container">
            <h1 className="title-heading">Quizzical</h1>
            <p className="title-text">Test Your Knowledge!</p>
            <button onClick={props.startQuiz}className="start-button">Start Quiz</button>
        </div>
    )
}