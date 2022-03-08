import React from 'react';
import '../styles/Skills.css'
import {Col, Row, Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';
import Skill from './Skill'

export default function Skills(props) {

  const renderSkills = (category) => {
    return props.skills[category].map(skill => {
      console.log(skill)
      return <Skill name={skill.name} icon={skill.icon}/>
    });
  } 

  return (
    <div id="skills-container">
      <Container fluid>
        <Row id="skills-row">
          <Col className="skills-coll">
          <div className="window-container">
            <div className="window-bar">
                <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
                </div>
                <div className="window-bar-content">Languages</div>
            </div>
                {/* content Start */}
                <div className="skills-category-container">
                  {renderSkills('languages')}
                </div>
                {/* {Content finish} */}
            </div>
          </Col>
          <Col className="skills-coll">
          <div className="window-container">
            <div className="window-bar">
                <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
                </div>
                <div className="window-bar-content">Frameworks</div>
            </div>
            {/* content Start */}
            <div className="skills-category-container">

            </div>
            {/* {Content finish} */}
          </div>
          </Col>
          <Col className="skills-coll">
          <div className="window-container">
            <div className="window-bar">
                <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
                </div>
                <div className="window-bar-content">Technologies</div>
            </div>
            {/* content Start */}
            <div className="skills-category-container">

            </div>
            {/* {Content finish} */}
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
