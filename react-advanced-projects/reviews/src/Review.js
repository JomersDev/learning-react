import React from "react";

export default function Review(props) {
    return (
        <div className="review-container">
            <img src={props.img} className="img" alt="pfp"/>
            <h3 className="name">{props.name}</h3>
            <h4 className="role">{props.role}</h4>
            <p className="para">{props.para}</p>
            <div className="btn-container">
                <button className="btn-slider" onClick={props.decrementCount}>Prev</button>
                <button className="btn-slider" onClick={props.incrementCount}>Next</button>
            </div>
            <button className="btn-suprise" onClick={props.randomCount}>Suprise Me!</button>
        </div>
    )
}