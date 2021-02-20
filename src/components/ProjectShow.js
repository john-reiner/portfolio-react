import React, {useState, useEffect} from 'react'

export default function ProjectShow(props) {

    const [project, setProject] = useState({})

    useEffect(() => {
        fetchProject()
    }, [props.projectId])

    const fetchProject = () => {
        fetch(`http://localhost:3001/projects/${props.projectId}`)
        .then(response => response.json())
        .then(project => setProject(project))
    }

    return (
        <div>
            <h2>Project</h2>
            {project.name}
        </div>
    )
}
