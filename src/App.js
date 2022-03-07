import './App.css';
import React, { useState, useEffect } from 'react';

import {Container, Row, Offcanvas } from 'react-bootstrap' 

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';

function App() {

  const [componentIndex, setComponentIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      setShow(false)
    }
  }, [componentIndex]);

  const renderComponent = (index) => {

    const components = [
        <Header />,
        <About />,
        <Projects />,
        <Skills/>,
        <Contact />
    ]
    return (
      components[index]
    )
  }

  return (
    <div className="App">
      <NavBar handleShow={handleShow} />
      {renderComponent(componentIndex)}
      <RightBar show={show} handleClose={handleClose} setComponentIndex={setComponentIndex} />
    </div>
  );
}

export default App;
