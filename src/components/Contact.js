import React, {useState} from 'react'
import '../styles/Contact.css'
import {Col, Row, Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';


export default function Contact() {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => setMessage({...message, [e.target.name] : e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)
  }
  

  return (
    <div id="contact-container">
      <Container>
        <Row>
          <Col id='contact-col'>
          <div className="window-container">
            <div className="window-bar">
                <div className="window-bar-buttons">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
                </div>
                <div className="window-bar-content">Contact Me</div>
            </div>
            {/* content Start */}
            <div id="form-container">
            <form onSubmit={handleSubmit}>
              {/* <label for="fname">Name:</label> <br></br> */}
              <input className="text-input" type="text" id="contact-name" name="name" value={message.name} onChange={handleChange} placeholder="Name"/><br></br>
              {/* <label for="lname">Email:</label><br></br> */}
              <input className="text-input" type="email" id="contact-email" name="email" value={message.email} onChange={handleChange} placeholder="Email"/><br></br>
              {/* <label for="w3review">Message:</label><br></br> */}
              <textarea placeholder="Message" className="text-area" id="contact-message" name="message" rows="4" cols="50" value={message.message} onChange={handleChange}/><br></br>
              <button id="contact-submit" type="submit"> Contact Me <Icon icon="bi:send"/> </button>
            </form> 
              {/* <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div id="send-button">Contact Me <Icon icon="bi:send" /></div>
              </Form> */}
            </div>

            {/* {Content finish} */}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
