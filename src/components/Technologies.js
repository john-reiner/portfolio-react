import React, {useState, useEffect} from 'react'

import {Nav} from 'react-bootstrap'

// import DevIcon from "devicon-react-svg";

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
            {renderTechnologies()}
        </Nav>
    )
}
