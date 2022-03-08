import React from 'react'
import '../styles/NavBar.css'
import { Icon } from '@iconify/react';
import {Container, Navbar} from 'react-bootstrap'

export default function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand onClick={props.handleShow} id="nav-bar-text">
                <Icon 
                    icon="akar-icons:arrow-left" 
                    width="60"
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
