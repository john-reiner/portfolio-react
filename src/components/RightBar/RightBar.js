import React from 'react'
import './styles/RightBar.css'
import {Offcanvas, Row, Col } from 'react-bootstrap' 
import { Icon } from '@iconify/react';

export default function RightBar(props) {



    return (
        <Offcanvas show={props.show} onHide={props.handleClose} placement={'end'} id="rightbar" >
            <Offcanvas.Header closeButton closeVariant='white' >
            <Offcanvas.Title id="rightbar-title">Portfolio</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="rightbar-link" onClick={() => props.setComponentIndex(0)}>
                    <div className="rightbar-link-item"><Icon icon="ant-design:home-outlined" /></div>
                    
                    <p className="rightbar-link-item">Home</p>
                
                </div>
                <div className="rightbar-link" onClick={() => props.setComponentIndex(1)}>
                    <div className="rightbar-link-item"><Icon icon="cib:about-me" /></div>
                    
                    <p className="rightbar-link-item">About</p>
                
                </div>
                <div className="rightbar-link" onClick={() => props.setComponentIndex(2)}>
                    <div className="rightbar-link-item"><Icon icon="bi:grid-3x2-gap-fill" /></div>
                    <p className="rightbar-link-item">Projects</p>
                </div>
                <div className="rightbar-link" onClick={() => props.setComponentIndex(3)}>
                    <div className="rightbar-link-item"><Icon icon="bi:hand-thumbs-up" /></div>
                    <p className="rightbar-link-item">Skills</p>
                </div>
                <div className="rightbar-link" onClick={() => props.setComponentIndex(4)}>
                    <div className="rightbar-link-item"><Icon icon="fluent:contact-card-16-regular" /></div>
                    <p className="rightbar-link-item">Contact</p>
                </div>
                <Row id="rightbar-social-row">
                    <a href="https://www.linkedin.com/in/john-reiner/" target="_blank" rel="noreferrer"  className="social-icon">
                        <Icon icon="fa:linkedin-square"  />
                    </a>
                    <a href="https://github.com/john-reiner" target="_blank" rel="noreferrer" className="social-icon" >
                        <Icon icon="fa:github-square"  />
                    </a>
                    
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
