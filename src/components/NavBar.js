import React from 'react'
import { Icon } from '@iconify/react';
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand onClick={props.handleShow}>
                <Icon 
                    icon="akar-icons:arrow-left" 
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="arrow"
                    color="rgb(162 3 22 / 100%)"
                />{' '}
                {props.pageName}
                </Navbar.Brand>

            </Container>
        </Navbar>
    )
}
{/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
</Navbar.Collapse> */}
