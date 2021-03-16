import React from 'react'
import {Button} from 'react-bootstrap'

export default function Skill(props) {
    return (
        <div className="tech">
            {props.image && <img src={props.image} alt={props.name} width="40" height="40"></img>}
            {props.name && <Button variant="link" onClick={() => props.handleTechnologyClick(props.id)}>{props.name}</Button>}
        </div>
    )
}
