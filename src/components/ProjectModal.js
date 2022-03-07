import React from 'react'
import {Col, Row, Modal, Button, Carousel} from 'react-bootstrap'

export default function ProjectModal(props) {

    const renderCarouselItems = () => {
        if (props.project.images) {
            return props.project.images.map(image => {
                return (
                    <Carousel.Item>
                        <img
                            src={image.url}
                            alt={image.description}
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
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col id="project-images-row">
                    <Carousel id="project-images-container" fade>
                        {renderCarouselItems()}
                    </Carousel>
                </Col>
            </Row>
                <p>{props.project.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" href={props.project.github} target="_blank" >GitHub</Button>
                {props.project.url && <Button variant="link" href={props.project.url} target="_blank" >Live Demo</Button>}
            </Modal.Footer>
        </Modal>
    )
}
