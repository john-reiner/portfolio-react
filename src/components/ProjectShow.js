import React, {useState, useEffect} from 'react'
import {Row, Col, Image, Container} from 'react-bootstrap'

import Technology from "./Technology";

export default function ProjectShow(props) {

    const [project, setProject] = useState({})

    useEffect(() => {
        fetchProject()
    }, [props.projectId])

    const fetchProject = () => {
        fetch(`http://localhost:3001/projects/${props.projectId}.json`)
        .then(response => response.json())
        .then(project => setProject(project))
    }

    const renderTechnologies = () => {
        if (project.technologies) {
            return project.technologies.map(technology => {
                return <Technology handleTechnologyClick={props.handleTechnologyClick} name={technology.name} key={technology.id} image={technology.image} id={technology.id}/>
            })
        }
    }

    return (
        <Row className="glass" style={{marginBottom: "1rem"}}>
            <Col id="project-show-right">
                <img src={project.image} id="show-picture" />
            </Col>
            <Col>
                        <h2>{project.name}</h2>
                        <p>{project.summary}</p>                
                <Row>
                    <Col>
                        <p><a href={project.address}>Demo</a></p>
                        <p><a href={project.github}>GitHub</a></p>
                    </Col>
                    <Col id="project-show-technologies">
                        {renderTechnologies()}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}