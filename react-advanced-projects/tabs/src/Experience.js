import React from "react";
import { BiChevronsRight } from 'react-icons/bi';

export default function Experience(props) {
    return (
        <div className="experience-container">
            <div className="role-container">
                <h3>{props.role}</h3>
                <h4>{props.company}</h4>
                <p>{props.duration}</p>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>{props.point1}</p>
                </div>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>{props.point2}</p>
                </div>
                <div className="detail-container">
                    <BiChevronsRight />
                    <p>{props.point3}</p>
                </div>
            </div>
        </div>
    )
}