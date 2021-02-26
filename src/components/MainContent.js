import React from 'react'

import ProjectsContainer from './ProjectsContainer'

export default function MainContent(props) {
    return (
        <div className="glass-container">
            <ProjectsContainer projects={props.projects} technologies={props.technologies}/>
        </div>
    )
}
