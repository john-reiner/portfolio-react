import React from 'react'

import ProjectsContainer from './ProjectsContainer'

export default function MainContent(props) {
    return (
        <div id="main-content" className="glass-container">
            <ProjectsContainer projects={props.projects} technologies={props.technologies}/>
        </div>
    )
}
