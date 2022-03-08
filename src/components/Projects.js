import React, {useState, useEffect} from 'react'
import ProjectModal from './ProjectModal'
import {Col, Row, Container, Image} from 'react-bootstrap'

export default function Projects(props) {

  const [projectModalShow, setProjectModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [project, setProject] = useState({});

  useEffect(() => {
    if (selectedProject != null) {
      findProject(selectedProject)
    }
  }, [selectedProject]);

  const handleProjectModalShow = (id) => {
    setSelectedProject(id)
    setProjectModalShow(true)
  }

  const renderProjects = () => {
    return props.projects.map(project => {
      return (
        <Col className="mb-2 mt-4 project-container">
          <div className="project">
            <div id="about-bar">
                  <div id="about-bar-buttons">
                    <div id="red-button"></div>
                    <div id="yellow-button"></div>
                    <div id="green-button"></div>
                  </div>
                  <div id="about-bar-title"><b>{project.name}</b></div>
                </div>
            <Image  src={project.main_image_url} width="300" height="300" className="project-photo" onClick={() => handleProjectModalShow(project.id)}/>
          </div>
        </Col>
      )
    })
  }

  
  const findProject = (id) => {
    let project = props.projects.find(project => project.id === id)
    setProject(project)
  }

  return (
      <Container fluid id="projects-container">
        <ProjectModal show={projectModalShow} onHide={() => setProjectModalShow(false)} project={project}/>
        <Row id="projects-row">
          {renderProjects()}
        </Row>
      </Container>
  )
}
