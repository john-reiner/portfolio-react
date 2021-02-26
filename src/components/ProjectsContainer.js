import React, {useState, useEffect} from 'react'
import {Row, Container} from 'react-bootstrap'

import Project from './Project.js'
import ProjectShow from './ProjectShow.js'
import Technologies from './Technologies'




export default function ProjectsContainer(props) {

    // const [projects, setProjects] = useState([])
    const [projectId, setProjectId] = useState(1)
    

    // useEffect(() => {
    //     fetchProjects()
    // }, [])

    const renderProjects = () => {
        if (props.projects) {
            return props.projects.map(project => {
                return <Project key={project.id} image={project.image} handleProjectClick={handleProjectClick} id={project.id} name={project.name} />
            })
        }
    }

    // const fetchProjects = () => {
    //     fetch('http://localhost:3001/projects.json')
    //     .then(response => response.json())
    //     .then(projects => setProjects(projects))
    // }

    const handleProjectClick = id => setProjectId(id)

    return (
        <Container className="glass-container"  >
            <ProjectShow projectId={projectId} />
            <Row className="glass" >
                <Technologies technologies={props.technologies} />
                <div id='projects-container'>
                    {renderProjects()}
                </div>
            </Row>
        </Container>
    )
}
