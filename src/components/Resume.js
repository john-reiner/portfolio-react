import React from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'

import Education from './Education'
import Link from './Link'
import Experience from './Experience'
import Technology from './Technology'
import Skill from './Skill'

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

    const renderSkills = () => {
        if (props.skills) {
            return props.skills.map(skill => {
                return <Skill {...skill}/>
            })
        }
    }

    return (
        <Container style={{marginTop: '3rem'}} className="glass">
            <Row>
                <Col xs={6} md={4} >
                    <div className="resume-item">
                        <Image src={props.user.image} id="resume-image" rounded fluid/>
                        <h2>{props.user.first_name} {props.user.last_name}</h2>
                        <h4>{props.user.title}</h4>
                    </div>
                    <br/>
                    <div className="resume-item">
                    <p>{props.user.tech_bio}</p>
                    <p>{props.user.bio}</p>
                    </div>
                    <br/>
                    <div className="resume-item">
                        <h5>Location</h5>
                        <p>{props.user.location}</p>
                        <h5>Email</h5>
                        <p><a href={"mailto: " + props.user.email } >{props.user.email}</a></p>
                        {renderLinks()}
                    </div>
                    <hr/>
                </Col>
                <Col>
                    <div className="resume-item">
                        <h2>Education</h2>
                        <hr></hr>
                        {renderEducations()}
                    </div>
                    <br/>
                    <div className="resume-item">
                        <h2>Experience</h2>
                        {renderExperiences()}
                    </div>
                    <br/>
                    <div className="resume-item">
                        <h2>Technologies</h2>
                        {renderTechnologies()}
                    </div>
                    <div className="resume-item">
                        <h2>Skills</h2>
                        {renderSkills()}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
