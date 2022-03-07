import React from 'react'
import {Col, Row, Container, Button} from 'react-bootstrap'
export default function Resume() {
  return (
    <div id="resume-container">
      <Container>
        <Row>
          <Col id="about-row-one">
            <h2>Resume</h2>
            <a href="/public/test.pdf" download>
              <Button variant="link">Download</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
