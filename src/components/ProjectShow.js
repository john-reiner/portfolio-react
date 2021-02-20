import React, {useState, useEffect} from 'react'
import {Row, Col, Image} from 'react-bootstrap'

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
        <Row>
            <Col>
                <h3>{project.name}</h3>
                {/* {project.image} */}
                <Image src="http://via.placeholder.com/640x360" rounded />
                {/* {project.url} */}
                <a href="url">Demo</a>
                {/* {project.github} */}

                <a href="url">GitHub</a>
                <p>{project.summary}</p>

            </Col>
        </Row>
    )
}
