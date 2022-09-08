import React from 'react'

export default function Birthday(props) {
    return (
        <div className='birthday'>
            <img src={props.img}
                alt='pfp' 
                className='pfp'/>
            <div className='birthday-details'>
                <h4>{props.name}</h4>
                <p className='age'>{props.age}</p>
            </div>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}