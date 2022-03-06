import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import { Icon } from '@iconify/react';
export default function About() {
  return (
    <div id="about-container">
      <Container >
        <Row id="about-row-one">
          <Col>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row id="about-row-two">
          <Col sm={8} id="about-text-container">
          <h6 id="about-welcome">Hi! 👋 </h6>
          <p>I'm John.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
          <Col id="photo-container" sm={4}>
            <div id="photo">
              <Image rounded src="https://via.placeholder.com/260x300" id="picture" />
              <div id="photo-icons">
                <Icon icon="logos:linkedin-icon" />
                <Icon icon="fa:github-square" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}