import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

import Technologies from './Technologies'
import Blog from './Blog'

export default function BlogsContainer(props) {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setBlogs(props.blogs)
    }, [props.blogs])

    const renderBlogs = () => {
        if (blogs) {
            return blogs.map(blog => {
                return <Blog {...blog} />
            })
        }
    }

    return (
        <Container className="glass-container" style={{marginTop: '3rem'}}>
            <Row className="glass">
                <Col>
                    <h2 style={{display: "flex", justifyContent: "center"}}>Blogs</h2>
                    <Technologies technologies={props.technologies} />
                    {renderBlogs()}
                </Col>
            </Row>
        </Container>
    )
}
