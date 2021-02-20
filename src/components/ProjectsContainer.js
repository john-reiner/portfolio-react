import React, {useState, useEffect} from 'react'

import Project from './Project.js'
import ProjectShow from './ProjectShow.js'


export default function ProjectsContainer() {

    const [projects, setProjects] = useState([])
    const [projectId, setProjectId] = useState(1)
    

    useEffect(() => {
        fetchProjects()
    }, [])

    const renderProjects = () => {
        if (projects.length > 0) {
            return projects.map(project => {
                return <Project key={project.id} handleProjectClick={handleProjectClick} id={project.id} name={project.name} />
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
        <div className="glass" >
            <ProjectShow projectId={projectId} />
            <h2>My Projects</h2>
            {renderProjects()}
        </div>
    )
}
