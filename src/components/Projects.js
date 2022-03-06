import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'

export default function Projects() {
  return (
    <div id="projects-container">
      <Container>
        <Row>
          <Col id="about-row-one">
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row className="projects-row">
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
        </Row>
        <Row className="projects-row">
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
          <Col className="project-container">
            <Image rounded src="https://via.placeholder.com/300x300" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
