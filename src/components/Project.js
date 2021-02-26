import React from 'react'
import {Col, Image} from 'react-bootstrap'

export default function Project(props) {
    return (
        
        <div className="project" >
                <Image src={props.image} fluid rounded />
                <h3>{props.name}</h3>
        </div>
    )
}