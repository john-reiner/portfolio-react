import React from 'react'
import LandingLinks from './LandingLinks'

import {Container, Col} from 'react-bootstrap'

export default function Landing(props) {
    return (
        <Container id='landing-container' className='glass-container' fluid>
            <Col className='glass'>
                <div id='name-info'>
                    <h1 id="name">{props.first_name} {props.last_name}</h1>
                    <p>
                        {props.bio}
                    </p>
                </div>

                <LandingLinks links={props.links} />
            </Col>
        </Container>
    )
}