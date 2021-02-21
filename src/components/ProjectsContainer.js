import React, {useState, useEffect} from 'react'
import {Row, Container} from 'react-bootstrap'

import Project from './Project.js'
import ProjectShow from './ProjectShow.js'
import Technologies from './Technologies'




export default function ProjectsContainer() {

    const [projects, setProjects] = useState([])
    const [projectId, setProjectId] = useState(1)
    

    useEffect(() => {
        fetchProjects()
    }, [])

    const renderProjects = () => {
        if (projects.length > 0) {
            return projects.map(project => {
                return <Project key={project.id} image={project.image} handleProjectClick={handleProjectClick} id={project.id} name={project.name} />
            })
        }
    }

    const fetchProjects = () => {
        fetch('http://localhost:3001/projects')
        .then(response => response.json())
        .then(projects => setProjects(projects))
    }

    const handleProjectClick = id => setProjectId(id)

    return (
        <Container className="glass-container"  >
            <ProjectShow projectId={projectId} />
            <Row className="glass" >
                <Technologies />
                <div id='projects-container'>
                    {renderProjects()}
                </div>
            </Row>
        </Container>
    )
}
