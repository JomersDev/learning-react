import React from "react";

export default function Menu(props) {
    return (
        <div className="menu-item-container">
            <img src={props.img} alt="pancake" className="img"/>
            <div className="menu-details-container">
                <div className="menu-item-title-price">
                    <h4 className="menu-title">{props.title}</h4>
                    <h4 className="menu-price">{props.price}</h4>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}