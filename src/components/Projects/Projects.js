import React, {useState, useEffect} from 'react'
import './styles/Projects.css'
import ProjectModal from './components/ProjectModal'
import {Col, Row, Container, Image} from 'react-bootstrap'

export default function Projects(props) {

  const [projectModalShow, setProjectModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [project, setProject] = useState({});


  const findProject = (id) => {
    let project = props.projects.find(project => project.id === id)
      setProject(project)
  }
  
  useEffect(() => {
    if (selectedProject != null) {
      findProject(selectedProject)
    }
  }, [selectedProject, findProject]);
  
  const handleProjectModalShow = (id) => {
    setSelectedProject(id)
    setProjectModalShow(true)
  }

  const renderProjects = () => {
    return props.projects.map(project => {
      return (
        <Col className="mb-4 mt-4 project-container" key={project.id}>
          <div className="window-container">
              <div className="window-bar">
                  <div className="window-bar-buttons">
                  <div className="red-button"></div>
                  <div className="yellow-button"></div>
                  <div className="green-button"></div>
                  </div>
                  <div className="window-bar-content">{project.name.substring(0, 25)}</div>
              </div>
              {/* content Start */}
                <div className="project-image-container">
                  <Image src={project.main_image_url} width="300" height="200" className="project-photo" onClick={() => handleProjectModalShow(project.id)}/>
                </div>
              {/* {Content finish} */}
          </div>
        </Col>
      )
    })
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
