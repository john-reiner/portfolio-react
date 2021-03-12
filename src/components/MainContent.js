import React from 'react'

import Landing from './Landing.js'
import ProjectsContainer from './ProjectsContainer'
import BlogsContainer from './BlogsContainer'
import Resume from './Resume'

export default function MainContent(props) {

    const renderContainer = () => {
        const componentArray = [
        <Landing first_name={props.user.first_name} last_name={props.user.last_name} bio={props.user.bio} email={props.user.email} links={props.user.links}/>,
        <ProjectsContainer projects={props.user.projects} technologies={props.user.technologies}/>,
        <BlogsContainer blogs={props.user.blogs} technologies={props.user.technologies}/>,
        <Resume technologies={props.user.technologies} links={props.user.links} user={props.user} educations={props.user.educations} technologies={props.user.technologies}/>
        ]
        return componentArray[props.show]
    }

    

    return (
        <div className="glass-container" id="main-content">
            {renderContainer()}
        </div>
    )
}
