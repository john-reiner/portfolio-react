import React from 'react'
import {Card,Button} from 'react-bootstrap'

import Technology from './Technology'

export default function Project(props) {

    const renderTechnologies = () => {
        if (props.technologies) {
            return props.technologies.map(technology => {
                return <Technology handleTechnologyClick={props.handleTechnologyClick} key={technology.id} image={technology.image} name={technology.name} id={technology.id}/>
            })
        }
    }

    return (
        <Card style={{ width: '18rem', backgroundColor: "#333", margin: "1rem" }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {renderTechnologies()}
                    </Card.Text>
                <Button variant="link" onClick={() => props.handleProjectClick(props.id)}>Show</Button>
            </Card.Body>
        </Card>
    )
}
