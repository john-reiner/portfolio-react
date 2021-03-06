import React from 'react'
import {Button} from 'react-bootstrap'

export default function Technology(props) {
    return (
        <div className="tech">
            {props.image && <img src={props.image} alt={props.name} width="40" height="40"></img>}
            {props.name && <Button variant="link" onClick={null}>{props.name}</Button>}
        </div>
    )
}
{/* <p style={{margin: "auto 0.5rem"}} ></p> */}