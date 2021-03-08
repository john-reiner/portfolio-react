import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Table} from 'react-bootstrap'

import Education from './Education'

export default function EducationsContainer(props) {

    const [educations, setEducations] = useState([])

    useEffect(() => {
        setEducations(props.educations)
    }, [props.educations])

    const renderEducations = () => {
        if (educations) {
            return educations.map(education => {
                return <Education {...education}/>
            })
        }
    }

    return (
        <Container className="glass-container" style={{marginTop: '3rem'}}>
            <Row className="glass">
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Graduated</th>
                                <th>Description</th>
                                <th>Technologies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderEducations()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
