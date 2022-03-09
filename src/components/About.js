import React from 'react'
import '../styles/About.css'
import {Col, Row, Container, Image} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function About(props) {

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
              <Image  src={props.about.about_photo} id="picture" />
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
                  <p>{props.about.about_title}</p>
                  <p>{props.about.about_text}</p>
                </div>
              {/* {Content finish} */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}