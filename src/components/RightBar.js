import React from 'react'
import {Offcanvas, Row } from 'react-bootstrap' 
import { Icon } from '@iconify/react';

export default function RightBar(props) {



    return (
        <Offcanvas show={props.show} onHide={props.handleClose} placement={'end'} id="rightbar" >
            <Offcanvas.Header closeButton closeVariant='white' >
            <Offcanvas.Title>Portfolio</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row className="rightbar-link" onClick={() => props.setComponentIndex(0)}>
                    <Icon icon="bi:grid-3x2-gap-fill" />
                    <p>Home</p>
                </Row>
                <Row className="rightbar-link" onClick={() => props.setComponentIndex(1)}>
                    <Icon icon="bi:grid-3x2-gap-fill" />
                    <p>About</p>
                </Row>
                <Row className="rightbar-link" onClick={() => props.setComponentIndex(2)}>
                    <Icon icon="bi:grid-3x2-gap-fill" />
                    <p>Projects</p>
                </Row>
                <Row className="rightbar-link" onClick={() => props.setComponentIndex(3)}>
                    <Icon icon="bi:grid-3x2-gap-fill" />
                    <p>Skills</p>
                </Row>
                <Row className="rightbar-link" onClick={() => props.setComponentIndex(4)}>
                    <Icon icon="bi:grid-3x2-gap-fill" />
                    <p>Contact</p>
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
