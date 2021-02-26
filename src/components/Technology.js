import React from 'react'

export default function Technology(props) {
    return (
        <div className="tech">
            <img src={props.image} alt={props.name} width="50" height="50"></img>
            <p style={{margin: "auto 0.5rem"}} >{props.name}</p>
        </div>
    )
}
