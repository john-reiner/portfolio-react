import React, {useState} from 'react'
import {Row, Container} from 'react-bootstrap'

import Project from './Project.js'
import ProjectShow from './ProjectShow.js'
import Technologies from './Technologies'




export default function ProjectsContainer(props) {

    const [projectId, setProjectId] = useState(1)
    

    const renderProjects = () => {
        if (props.projects) {
            return props.projects.map(project => {
                return <Project key={project.id} address={project.address} image={project.image} handleProjectClick={handleProjectClick} id={project.id} name={project.name} />
            })
        }
    }

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
