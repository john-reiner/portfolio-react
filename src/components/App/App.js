import './styles/App.css';
import React, { useState, useEffect } from 'react';

// Imported components
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import NavBar from '../NavBar/NavBar';
import RightBar from '../RightBar/RightBar';

function App() {

  // States
  const [componentIndex, setComponentIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [portfolioPayload, setPortfolioPayload] = useState({});

  // Effects
  useEffect(() => {
    fetchPortfolioPayload()
  }, []);

  useEffect(() => {
    if (show) {
      setShow(false)
    }
  }, [componentIndex]);

  // Functions
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
  console.log(show)
  return (
    <div>
      <NavBar handleShow={handleShow} pageName={renderComponent(componentIndex).type.name}/>
        {renderComponent(componentIndex)}
      <RightBar show={show} handleClose={handleClose} setComponentIndex={setComponentIndex} />
    </div>
  );
}

export default App;
