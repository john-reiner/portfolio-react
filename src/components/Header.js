import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { Icon } from '@iconify/react';


export default function Header() {
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
    </Col>
  )
}
