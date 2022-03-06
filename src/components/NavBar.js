import React from 'react'
import { Icon } from '@iconify/react';
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">
                <Icon 
                    icon="gridicons:share-computer" 
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                John Reiner
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Skills</Nav.Link>
                        <Nav.Link href="#">Resume</Nav.Link>
                        <Nav.Link href="#">Projects</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                <Nav>
                    <Nav.Link href="#">
                        <Icon 
                            icon="fa:github-square" 
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Nav.Link>
                    <Nav.Link href="#">
                        <Icon 
                            icon="brandico:linkedin-rect" 
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
