import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default function Menu(props) {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center" variant="tabs" fill>
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey={"Home"} onClick={() => props.handleMenuClick(0)} >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => props.handleMenuClick(1)} >Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => props.handleMenuClick(2)} >Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" onClick={() => props.handleMenuClick(3)} >Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

        // <Container className='glass-container' id="menu-container">
        //     <Row className="glass" >
        //         <Col>
        //             <ListGroup horizontal id="menu">
        //                 <ListGroup.Item id="menu-item" >Home</ListGroup.Item>
        //                 <ListGroup.Item id="menu-item" onClick={() => props.handleMenuClick(1)}>Projects</ListGroup.Item>
        //                 <ListGroup.Item id="menu-item" onClick={() => props.handleMenuClick(2)}>Blogs</ListGroup.Item>
        //                 <ListGroup.Item id="menu-item" onClick={() => props.handleMenuClick(3)}>Experience</ListGroup.Item>
        //             </ListGroup>
        //         </Col>
        //     </Row>
        // </Container>