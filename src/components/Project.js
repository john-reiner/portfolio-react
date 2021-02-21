import React from 'react'
import {Card, Col, Image} from 'react-bootstrap'

export default function Project(props) {
    return (
        
        <Col className="project" >
                <Image src={props.image} fluid rounded />
                <h3>{props.name}</h3>
                {/* <div style={{backgroundImage: `src(${props.image})`}}> </div> */}
            </Col>
    )
}

{/* <Card className='project' bg='secondary' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} style={{height: "10rem"}} />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Button onClick={() => props.handleProjectClick(props.id)} variant="outline-light">Show</Button>
    </Card.Body>
</Card> */}