import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Experience(props) {

    const renderTechnologies = () => {
        if (props.technologies && props.technologies.length > 0) {
            return props.technologies.map(technology => {
                return `${technology.name}${technology.id === props.technologies.length ? "" : ","} `
            })
        }
    }

    const renderSkills = () => {
        if (props.skills && props.skills.length > 0) {
            return props.skills.map(skill => {
                return `${skill.name}${skill.id !== props.skills.length + 1 ? "," : ""} `
            })
        }
    }

    return (
        <Container>
            <Row className="education-heading">
                <h4>{props.title}</h4>
                <p>Started: {props.start_date}</p>
            </Row>
            <br></br>
            <Row>
            <Col>{props.description}</Col>
            <Col>
                {props.technologies.length > 1 && <Row><strong>Technologies Used: </strong><Row className="skills-technologies" >{renderTechnologies()}</Row><hr></hr></Row>}
                
                    
                
                
                <Row>
                    <strong>Skills Used: </strong>
                </Row>
                <Row className="skills-technologies" >
                    {renderSkills()}
                </Row>
            </Col>
            </Row>
            <br></br>
        </Container>
    )
}
