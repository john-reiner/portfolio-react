import React, {useState} from 'react'
import './styles/Contact.css'
import {Col, Row, Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';


export default function Contact() {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [messageErrors, setMessageErrors] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleChange = (e) => setMessage({...message, [e.target.name] : e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    setSendingMessage(true)
    fetch('https://john-reiner-portfolio-manager.herokuapp.com/portfolios/1/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"message": message}),
    })
    .then(response => response.json())
    .then(data => {
      if (data.created_at) {
        alert("Message Sent!")
        setSendingMessage(false)
      } else {
        setMessageErrors(data)
        setSendingMessage(false)
      }

    })
    .catch((error) => {
      setSendingMessage(false)
      alert("Message Failed!")
      console.error('Error:', error);
    });
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
              
              <input className="text-input" type="text" id="contact-name" name="name" value={message.name} onChange={handleChange} placeholder={messageErrors.name ? messageErrors.name[0] : "Name"} required/><br></br>
              
              <input className="text-input" type="email" id="contact-email" name="email" value={message.email} onChange={handleChange} placeholder="Email" required/><br></br>
              {/* <label for="w3review">Message:</label><br></br> */}
              <textarea placeholder="Message" className="text-area" id="contact-message" name="message" rows="4" cols="50" value={message.message} onChange={handleChange} required/><br></br>
              {sendingMessage ? "Sending..." : <button id="contact-submit" type="submit"> Contact Me <Icon icon="bi:send"/> </button>}
            </form> 
            </div>

            {/* {Content finish} */}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
