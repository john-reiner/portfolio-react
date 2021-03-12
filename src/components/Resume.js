import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'

import Education from './Education'
import Link from './Link'
import Experience from './Experience'
import Technology from './Technology'

export default function EducationsContainer(props) {

    const renderEducations = () => {
        if (props.educations) {
            return props.educations.map(education => {
                return <Education {...education}/>
            })
        }
    }

    const renderExperiences= () => {
        if (props.experiences) {
            return props.experiences.map(experience => {
                return <Experience {...experience}/>
            })
        }
    }

    const renderLinks = () => {
        if (props.links) {
            return props.links.map(link => {
                return (
                <div>
                    <h5>{link.name}</h5>
                    <Link key={link.id} name={link.name} image={link.image} address={link.address} />                
                </div>
                )
            })
        }
    }

    const renderTechnologies = () => {
        if (props.technologies) {
            return props.technologies.map(technology => {
                return <Technology {...technology}/>
            })
        }
    }

    return (
        <Container className="resume-container" style={{marginTop: '3rem'}}>
            <Row>
                <Col xs={6} md={4} >
                    <Image src={props.user.image} id="resume-image" rounded fluid/>
                    <h2>{props.user.first_name} {props.user.last_name}</h2>
                    <h4>{props.user.title}</h4>
                    <hr/>
                    <p>{props.user.tech_bio}</p>
                    <p>{props.user.bio}</p>
                    <hr/>
                    <h5>Location</h5>
                    <p>{props.user.location}</p>
                    <h5>Email</h5>
                    <p><a href={"mailto: " + props.user.email } >{props.user.email}</a></p>
                    {renderLinks()}
                    <hr/>
                </Col>
                <Col>
                    <h2>Education</h2>
                    {renderEducations()}
                    <h2>Experience</h2>
                    {renderExperiences()}
                    <h2>Technologies</h2>
                    {renderTechnologies()}
                </Col>
            </Row>
        </Container>
    )
}
