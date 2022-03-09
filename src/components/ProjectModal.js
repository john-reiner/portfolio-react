import React from 'react'
import '../styles/ProjectModal.css'
import {Col, Row, Modal, Button, Carousel} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function ProjectModal(props) {

    const renderCarouselItems = () => {
        if (props.project.images) {
            return props.project.images.map(image => {
                return (
                    <Carousel.Item className="picture-item">
                        <img
                            src={image.url}
                            alt={image.description}
                            className="picture-item"
                            width="300"
                            height="300"
                        />
                    </Carousel.Item>
                )
            })
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="project-modal"
            >
            <Modal.Header className="project-modal-header">
            
                <Modal.Title id="contained-modal-title-vcenter">
                {props.project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col className="project-images-row">
                    <Carousel className="project-images-container" fade>
                        {renderCarouselItems()}
                    </Carousel>
                    <hr></hr>
                </Col>
            </Row>
                <p>{props.project.description}</p>
            </Modal.Body>
            <Modal.Footer className="project-modal-footer">
                <a href={props.project.github} target="_blank" rel="noreferrer" className='project-modal-button'> <button> GitHub <Icon icon="akar-icons:github-fill" /></button></a>
                {/* {<Button variant="link" href={props.project.github} target="_blank" >GitHub</Button>} */}
                {props.project.url && <a href={props.project.url} target="_blank" rel="noreferrer" className='project-modal-button'> <button> Live Demo <Icon icon="fluent:content-view-20-filled" /></button></a>}
            </Modal.Footer>
        </Modal>
    )
}
