import React from 'react';
import {Col, Row, Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';
import skills from '../payload.json'
import Skill from './Skill'

export default function Skills() {

  const renderSkills = (category) => {
    return skills[category].map(skill => {
      return <Skill name={skill}/>
    });
  } 

  return (
    <div id="skills-container">
      <Container>
        <Row>
          <Col id="about-row-one">
            <h2>Skills</h2>
          </Col>
        </Row>
        <Row id="skills-row">
          <Col className="skills-list">
            <h3 className="skills-title">Languages</h3>
              {renderSkills('languages')}
          </Col>
          <Col className="skills-list">
            <h3 className="skills-title">Frameworks</h3>
              {renderSkills('frameworks')}
          </Col>
          <Col className="skills-list">
            <h3 className="skills-title">Technologies</h3>
            {renderSkills('technologies')}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
