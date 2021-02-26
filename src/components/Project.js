import React from 'react'
import {Col, Image} from 'react-bootstrap'

export default function Project(props) {
    return (
        
        <Col className="project" >
                <Image src={props.image} fluid rounded />
                <h3>{props.name}</h3>
                {/* <div style={{backgroundImage: `src(${props.image})`}}> </div> */}
        </Col>
    )
}