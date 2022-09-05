import React from "react";

export default function Question(props) {


    return (
        <div className="questions-box">
            <h1 className="question">How would one say goodbye in Spanish</h1>
            <div className="answers-container">
                <button className={props.buttonClicked ? "answer-choice selected" : "answer-choice"} onClick={props.buttonSelected}>Adios</button>            
                <button className={props.buttonClicked ? "answer-choice selected" : "answer-choice"} onClick={props.buttonSelected}>Hola</button>            
                <button className={props.buttonClicked ? "answer-choice selected" : "answer-choice"} onClick={props.buttonSelected}>Au Revoir</button>            
                <button className={props.buttonClicked ? "answer-choice selected" : "answer-choice"} onClick={props.buttonSelected}>Salir</button>         
            </div>
        </div>

    )
}