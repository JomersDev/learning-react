import React from "react"
import About from "./About.js"
import Footer from "./Footer.js"
import Info from "./Info.js"
import Interests from "./Interests.js"

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )  
}