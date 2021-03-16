import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Education(props) {

    const renderTechnologies = () => {
        if (props.technologies.length > 0) {
            return props.technologies.map(technology => {
                return `${technology.name}${technology.id !== props.technologies.length ? "," : ""} `
            })
        }
    }

    return (
        <Container>
            <Row className="education-heading">
                <h4>{props.title}</h4>
                <p>Graduated: {props.end_date}</p>
            </Row>
            <br></br>
            <Row>
            <Col>{props.description}</Col>
            <Col id="skills-technologies">
                {renderTechnologies()}
            </Col>
            </Row>
            <br></br>
        </Container>
    )
}
