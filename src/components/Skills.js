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
      <Container>
        <Row>
          <Col>
            <div className="mac-window-container">
              test
            </div>
          </Col>
        </Row>
      </Container>
  )
}
