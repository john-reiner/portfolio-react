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
                return <Technology key={technology.id} name={technology.name} image={technology.image}/>
            })
        }
    }

    return (
        <Container className="glass" >

        <Row id='project-show' >
                <Col id='project-show-left'>
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
                <Col id="project-show-right">
                    <Image src={project.image} fluid rounded />
                </Col>
        </Row>
        </Container>
    )
}