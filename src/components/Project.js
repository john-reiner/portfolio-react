import React from 'react'
import {Card,Button, Image} from 'react-bootstrap'

export default function Project(props) {
    return (
        <Card style={{ width: '18rem', backgroundColor: "#333", margin: "1rem" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                <Button variant="link" onClick={() => props.handleProjectClick(props.id)}>Show</Button>
            </Card.Body>
        </Card>
    )
}
// <div className="project" >
//         <Image src={props.image} fluid rounded />
//         <h3>{props.name}</h3>
// </div>