import React, {useState, useEffect} from 'react'

import {Nav} from 'react-bootstrap'

import Technology from './Technology'



export default function Technologies() {

    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        fetchTechnologies()
    }, [])

    const fetchTechnologies = () => {
        fetch('http://localhost:3001/technologies')
        .then(response => response.json())
        .then(technologies => setTechnologies(technologies))
    }

    const renderTechnologies = () => {
        if (technologies.length > 0) {
            return technologies.map(technology => {
                return <Technology key={technology.id} name={technology.name} image={technology.image}/>
            })
        }
    }

    return (
        <Nav className="glass" id="technology-navbar">
            
            {renderTechnologies()}
        </Nav>
    )
}
