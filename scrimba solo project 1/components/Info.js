import React from "react"

export default function Info() {
    return  (
        <div className="info-container">
            <img src="../images/profile.png" width="317px" height="317px" className="img"/>
            <h1 className="info-title">James McGrory</h1>
            <p className="info-job">Frontend Developer</p>
            <p className="info-website">jamesmcgrory.com</p>
            <div className="info-buttons">
                <button className="email-button">Email</button>
                <button className="social-button">LinkedIn</button>
            </div>
        </div>
    )      
}