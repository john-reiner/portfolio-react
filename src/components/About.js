import React from 'react'
import '../styles/About.css'
import {Col, Row, Container, Image} from 'react-bootstrap'
import { Icon } from '@iconify/react';
export default function About() {
  return (
    <div id="about-container" >
      <Container  >
        <Row id="about-row">
          <Col id="about-row" md={4}>
          <div className="window-container">
            <div className="window-bar">
              <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
              </div>
              <div className="window-bar-content">John Reiner</div>
            </div>
            {/* content Start */}
            <div id="about-photo-container">
              <Image  src="https://via.placeholder.com/200x250" id="picture" />
                <div id="photo-icons">
                  <a href="https://www.linkedin.com/in/john-reiner/" target="_blank" rel="noreferrer"  className="social-icon">
                      <Icon icon="fa:linkedin-square"  />
                  </a>
                  <a href="https://github.com/john-reiner" target="_blank" rel="noreferrer" className="social-icon" >
                      <Icon icon="fa:github-square"  />
                  </a>
                </div>
            </div>
            {/* {Content finish} */}
          </div>
          </Col>
          <Col md={8}>
            <div className="window-container">
              <div className="window-bar">
                  <div className="window-bar-buttons">
                  <div className="red-button"></div>
                  <div className="yellow-button"></div>
                  <div className="green-button"></div>
                  </div>
                  <div className="window-bar-content">Hi! 👋 </div>
              </div>
              {/* content Start */}
                <div id="about-text-container">
                  <p>I'm John.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              {/* {Content finish} */}
            </div>
          </Col>
        </Row>
      </Container>
    // </div>
  )
}