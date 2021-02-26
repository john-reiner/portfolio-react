import React from 'react'
import LandingLinks from './LandingLinks'

import {Container, Row, Col} from 'react-bootstrap'

export default function Landing(props) {
    return (
        <Container id='landing-container' className='glass-container' fluid>
            <Row className='glass'>
                <Col id='name-info'>

                    <h1 id="name">{props.first_name} {props.last_name}</h1>
                    <h4><a href={"mailto: " + props.email } >{props.email}</a></h4>
                    <div id='links-bio-container'>
                        <p>{props.bio}</p>
                        <LandingLinks links={props.links} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}