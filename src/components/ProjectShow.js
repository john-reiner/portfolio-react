import React, {useState, useEffect} from 'react'
import {Row, Col, Image} from 'react-bootstrap'

export default function ProjectShow(props) {

    const [project, setProject] = useState({})

    useEffect(() => {
        fetchProject()
    }, [props.projectId])

    const fetchProject = () => {
        fetch(`http://localhost:3001/projects/${props.projectId}.json`)
        .then(response => response.json())
        .then(project => setProject(project))
    }

    console.log(project)

    return (
        <Row className="glass" style={{display:"flex", alignItems: "stretch"}}>
            <Col style={{backgroundColor: "#333", borderRadius: "4px"}}>
                <h2>{project.name}</h2>
                <p>{project.summary}</p>
                <p><a href={project.address}>Demo</a></p>
                <p><a href={project.github}>GitHub</a></p>
            </Col>
            <Col style={{display: "flex", justifyContent: "center"}}>
                <Image src={project.image} fluid rounded />
            </Col>
        </Row>
    )
}
