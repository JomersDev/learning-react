import React from "react";

export default function Question(props) {
    return (
        <>
            <h1>How would one say goodbye in Spanish</h1>
            <div className="answer-container">
                <button>Adios</button>            
                <button>Hola</button>            
                <button>Au Revoir</button>            
                <button>Salir</button>         
            </div>
        </>

    )
}