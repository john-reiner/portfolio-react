import React from 'react'

import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

export default function MainContent() {
    return (
        <div id="main-content" className="glass">
            <ProjectsContainer />
            <TechnologiesContainer />
        </div>
    )
}
