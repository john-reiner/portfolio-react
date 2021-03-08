import React, {useEffect, useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

import Technologies from './Technologies'
import Blog from './Blog'

export default function BlogsContainer(props) {

    const [blogs, setBlogs] = useState([])
    const [technologyId, setTechnologyId] = useState('')

    useEffect(() => {
        setBlogs(props.blogs)
    }, [props.blogs])

    const renderBlogs = () => {
        if (blogs) {
            return blogs.map(blog => {
                return <Blog handleTechnologyClick={handleTechnologyClick} {...blog} />
            })
        }
    }

    useEffect(() => {
        fetchBlogs(technologyId)
    }, [technologyId])

    const fetchBlogs = id => {
        fetch(`http://localhost:3001/blogs/sort/${id}.json`)
        .then(response => response.json())
        .then(blogs => {
            setBlogs(blogs)
        })
        .catch(errors => console.log(errors))
    }

    const handleTechnologyClick = id => setTechnologyId(id)
    const handleAllClick = () => setBlogs(props.blogs)

    return (
        <Container className="glass-container" style={{marginTop: '3rem'}}>
            <Row className="glass">
                <Col>
                    <h2 style={{display: "flex", justifyContent: "center"}}>Blogs</h2>
                    <Technologies handleAllClick={handleAllClick} handleTechnologyClick={handleTechnologyClick} technologies={props.technologies} />
                    {renderBlogs()}
                </Col>
            </Row>
        </Container>
    )
}
