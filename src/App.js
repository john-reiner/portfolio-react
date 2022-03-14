import './styles/App.css';
import React, { useState, useEffect } from 'react';

// import {Container, Row, Offcanvas } from 'react-bootstrap' 

// import payload from './payload.json'

import About from './components/About'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
// import Resume from './components/Resume'
import Skills from './components/Skills'
import NavBar from './components/NavBar';
import RightBar from './components/RightBar';

function App() {

  const [componentIndex, setComponentIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [portfolioPayload, setPortfolioPayload] = useState({});

  useEffect(() => {
    fetchPortfolioPayload()
  }, []);

  useEffect(() => {
    if (show) {
      setShow(false)
    }
  }, [componentIndex]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPortfolioPayload = () => {
    fetch('http://localhost:3001/portfolios/1/public.json')
    .then(response => response.json())
    .then(data => setPortfolioPayload(data));
  }

  const renderComponent = (index) => {

    const components = [
        <Home resume_url={portfolioPayload.resume_url}/>,
        <About about={portfolioPayload}/>,
        <Projects projects={portfolioPayload.projects}/>,
        <Skills skills={portfolioPayload.skills}/>,
        <Contact />
    ]
    return (
      components[index]
    )
  }

  return (
    <div>
      <NavBar handleShow={handleShow} pageName={renderComponent(componentIndex).type.name}/>
        {renderComponent(componentIndex)}
      <RightBar show={show} handleClose={handleClose} setComponentIndex={setComponentIndex} />
    </div>
  );
}

export default App;
