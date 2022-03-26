import React, {useState, useEffect} from 'react'
import Markdown from 'markdown-to-jsx'
import '../styles/ProjectModal.css'
import {Col, Row, Modal, Carousel} from 'react-bootstrap'
import { Icon } from '@iconify/react';

export default function ProjectModal(props) {

    const [githubmd, setGithubmd] = useState('');

    useEffect(() => {
        if (props.project.github) {
            fetchGithubReadme()
        }
    }, [props.project.github]);

    const fetchGithubReadme = () => {
        fetch(`https://raw.githubusercontent.com/${props.project.github.slice(19)}/main/README.md`)
        .then(response => response.text())
        .then(markdown => setGithubmd(markdown))
    }

    const renderCarouselItems = () => {
        if (props.project.images) {
            let key_id = 0
            return props.project.images.map(image => {
                key_id ++
                return (
                    <Carousel.Item key={key_id}>
                        <img
                            src={image.image_url}
                            alt={image.description}
                            className="picture-item"
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
            <Modal.Header closeButton closeVariant='white' className="project-modal-header">
            
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
            <Row>
                <Col className="project-body">
                    {githubmd === "400: Invalid request" || githubmd === "404: Not Found" ? props.project.description : <Markdown>{githubmd}</Markdown>}
                </Col>
            </Row>
                
            </Modal.Body>
            <Modal.Footer className="project-modal-footer">
                <a href={props.project.github} target="_blank" rel="noreferrer" className='project-modal-button'> <button> GitHub <Icon icon="akar-icons:github-fill" /></button></a>
                {/* {<Button variant="link" href={props.project.github} target="_blank" >GitHub</Button>} */}
                {props.project.url && <a href={props.project.url} target="_blank" rel="noreferrer" className='project-modal-button'> <button> Live Demo <Icon icon="fluent:content-view-20-filled" /></button></a>}
            </Modal.Footer>
        </Modal>
    )
}
