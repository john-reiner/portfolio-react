import React, {useState, useEffect} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

import Project from './Project.js'
import ProjectShow from './ProjectShow.js'
import Technologies from './Technologies'

export default function ProjectsContainer(props) {

    const [projects, setProjects] = useState([])
    const [projectId, setProjectId] = useState(1)
    const [technologyId, setTechnologyId] = useState('')

    useEffect(() => {
        setProjects(props.projects)
    }, [props.projects])

    useEffect(() => {
        fetchProjects(technologyId)
    }, [technologyId])

    const fetchProjects = id => {
        fetch(`http://localhost:3001/projects/sort/${id}.json`)
        .then(response => response.json())
        .then(projects => {
            setProjects(projects.projects)
        })
        .catch(errors => console.log(errors))
    }

    const renderProjects = () => {
        if (projects) {
            return projects.map(project => {
                return <Project handleTechnologyClick={handleTechnologyClick} key={project.id} address={project.address} image={project.image} handleProjectClick={handleProjectClick} id={project.id} name={project.name} technologies={project.technologies} />
            })
        }
    }

    const handleProjectClick = id => setProjectId(id)
    const handleTechnologyClick = id => setTechnologyId(id)

    return (
        <Container className="glass-container"  >
            <Row className="glass-container" style={{marginBottom: "1rem"}}>
                <ProjectShow projectId={projectId} />
            </Row>
            <Row className="glass" >
                <Col id='projects-container'>
                    <Technologies handleTechnologyClick={handleTechnologyClick} technologies={props.technologies} />
                    {renderProjects()}
                </Col>
            </Row>
        </Container>
    )
}