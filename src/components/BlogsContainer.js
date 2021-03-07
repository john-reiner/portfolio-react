import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

export default function BlogsContainer(props) {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setBlogs(props.blogs)
    }, [props.blogs])

    const renderBlogs = () => {
        console.log(blogs)
    }

    return (
        <Container className="glass-container">
            <Row className="glass">
                <Col>
                    {renderBlogs()}
                </Col>
            </Row>
        </Container>
    )
}
