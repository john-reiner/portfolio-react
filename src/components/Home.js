import React from 'react'
import '../styles/Home.css'
import {Col, Row, Container} from 'react-bootstrap'
import { Icon } from '@iconify/react';
import Typical from 'react-typical'


export default function Home(props) {
  return (
    <div id='home-container'>
      <Row>
        <Col >
          <Row>
              <Col >
                <div className="window-container">
                  <div className="window-bar">
                    <div className="window-bar-buttons">
                      <div className="red-button"></div>
                      <div className="yellow-button"></div>
                      <div className="green-button"></div>
                    </div>
                    <div className="window-bar-content">Hello World!</div>
                  </div>
                  {/* content Start */}
                  <div id="home-logo">
                    <h1 id="name">John Reiner</h1>
                    <div id="typical">
                      <Typical
                        steps={
                          [
                            'Software Developer', 1000,
                            'Solutions Engineer', 1000,
                            'Ruby on Rails', 1000,
                            'React JS', 1000,
                            'Python', 1000,
                            'Python', 1000,
                          ]
                        }
                        loop={Infinity}
                        wrapper="h4"
                        
                      />
                    </div>
                  </div>
                  {/* {Content finish} */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col id="typical">
              </Col>
            </Row>

              {/* </div> */}
          {/* </div> */}
        </Col>
      </Row>
    </div>
  )
}
