import React from "react";

export default function Tour(props) {
    const [isReadMore, setIsReadMore] = React.useState(false)

    function flipReadMore() {
        setIsReadMore(!isReadMore)
    }

    console.log(isReadMore)

    return (
        <div className="tour-container">
            <img src={props.img}
            alt="paris" 
            className="img"/>
            <div className="tour-info-container">
                <div className="tour-title-container">
                    <h4 className="tour-title">{props.title}</h4>
                    <p className="tour-price">{props.price}</p>
                </div>
                <p className="tour-para">
                    {isReadMore ? props.longPara : props.paragraph} 
                    <span className="read-more" onClick={flipReadMore}>
                        {isReadMore ? "Show Less" : "Read More"}
                    </span>
                </p>
                <button className="btn" onClick={props.delete}>Not Interested</button>
            </div>
        </div>
    )
}