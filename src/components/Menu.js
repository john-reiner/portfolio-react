import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function Menu(props) {
    return (
        <Container className='glass-container'>
            <Row className="glass">
                <Col>
                    <ul className="menu">
                        <li className="menu-item" onClick={() => props.handleMenuClick(0)}>Home</li>
                        <li className="menu-item" onClick={() => props.handleMenuClick(1)}>Projects</li>
                        <li className="menu-item" onClick={() => props.handleMenuClick(2)}>Blogs</li>
                        <li className="menu-item" onClick={() => props.handleMenuClick(3)}>Experience</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
