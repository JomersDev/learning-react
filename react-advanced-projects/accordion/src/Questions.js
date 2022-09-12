import React from "react";

export default function Question(props) {

    const [show, setShow] = React.useState(false);

    function showAnswer() {
        setShow(prevState => !prevState)
    }

    return (
        <div className="question-container">
            <div className="question-title">
                <h3 className="title">{props.question}</h3>
                <button className="btn" onClick={showAnswer}>{show ? "-" : "+"}</button>
            </div>
            {show && <p>{props.answer}</p>}
        </div>
    )
}