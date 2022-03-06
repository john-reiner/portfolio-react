import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import { Icon } from '@iconify/react';
import Typical from 'react-typical'


export default function Header(props) {
  return (
    <Col id='top-container'>
      <Row>
        <Col >
          <Icon icon="gridicons:share-computer" id="main-icon"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>John Reiner</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Typical
            steps={
              [
                'Software Developer', 1000,
                'Solutions Engineer', 1000,
                'Ruby on Rails', 1000,
                'React JS', 1000,
                'Python', 1000,
                'Python', 1000,
              ]
            }
            loop={Infinity}
            wrapper="h4"
            id="typical"
          />
        </Col>
      </Row>
      <Row>
        <Col>
            {props.darkMode ? <Button variant="outline-light" onClick={() => props.setDarkMode(!props.darkMode)}>Light</Button> : <Button variant="outline-dark" onClick={() => props.setDarkMode(!props.darkMode)}>Dark</Button>}
        </Col>
      </Row>
    </Col>
  )
}
