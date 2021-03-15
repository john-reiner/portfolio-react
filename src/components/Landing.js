import React from 'react'
import LandingLinks from './LandingLinks'

import {Container, Row, Col} from 'react-bootstrap'

export default function Landing(props) {
    return (
        <div className="glass-container">
            <Container id='landing-container' className='glass'>
                <Row id="name-info">
                    <Col>
                        <h1>{props.first_name} {props.last_name}</h1>
                        <h4><a href={"mailto: " + props.email } >{props.email}</a></h4>
                    </Col>
                </Row>
                <Row>
                    <Col id="links-bio-container">
                        <p>{props.bio}</p>
                        <LandingLinks links={props.links} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}