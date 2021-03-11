import React from 'react'
import LandingLinks from './LandingLinks'

import {Container, Row, Col} from 'react-bootstrap'

export default function Landing(props) {
    return (
        <Container id='landing-container' className='glass-container'>
            <Row className='glass' id="name-info">
                <Col>
                    <h1>{props.first_name} {props.last_name}</h1>
                    <h4><a href={"mailto: " + props.email } >{props.email}</a></h4>
                </Col>
            </Row>
            <Row className="glass" id="links-bio-container">
                <Col>
                    <p>{props.bio}</p>
                    <LandingLinks links={props.links} />
                </Col>
            </Row>
        </Container>
    )
}