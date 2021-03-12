import React from 'react'

import {Nav, Button} from 'react-bootstrap'

import Technology from './Technology'



export default function Technologies(props) {

    const renderTechnologies = () => {
        if (props.technologies) {
            return props.technologies.map(technology => {
                return <Technology handleTechnologyClick={props.handleTechnologyClick} key={technology.id} name={technology.name} image={technology.image} id={technology.id}/>
            })
        }
    }

    return (
        <Nav id="technology-navbar">
            <Button variant="link" onClick={props.handleAllClick} id="all-button">All</Button>
            {renderTechnologies()}
        </Nav>
    )
}
