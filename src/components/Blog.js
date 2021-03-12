import React from 'react'
import {Image, Button, Row, Col} from 'react-bootstrap'

import Technology from './Technology'


export default function Blog(props) {

    const getFormattedDate = date => {
        var dateArray = date.split('-')
        return `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    }

    const renderTechnologies = () => {
        if (props.technologies) {
            return props.technologies.map(technology => {
                return <Technology handleTechnologyClick={props.handleTechnologyClick} name={technology.name} image={technology.image} id={technology.id}/>
            })
        }
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Row className="blog">
            <Col xs={6}>
                <Button variant="link" id="blog-button" onClick={() => openInNewTab(props.address)} ><h4>{props.title}</h4></Button>
                <p>{props.summary}</p>
                <p><small>Published: {getFormattedDate(props.date)}</small></p>
            </Col>
            <Col>
                <div>{renderTechnologies()}</div>
            </Col>

            <Col>
                <Image src={props.image} className="blog-image" fluid rounded />
            </Col>
        </Row>
    )
}
