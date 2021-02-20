import React from 'react'
import LandingLinks from './LandingLinks'

import {Container, Col} from 'react-bootstrap'

export default function Landing(props) {
    return (
        <Container id='landing-container' fluid>
            <Col id='hero'>
                <div id='name-info'>
                    <h1 id="name">{props.first_name} {props.last_name}</h1>
                    <p>
                        Full Stack Software Engineer
                    </p>
                </div>

                <LandingLinks links={props.links} />
            </Col>
        </Container>
    )
}