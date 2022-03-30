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
    handleClose()
  }, [componentIndex]);

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPortfolioPayload = () => {
    fetch('https://john-reiner-portfolio-manager.herokuapp.com/portfolios/1/public.json')
    .then(response => response.json())
    .then(data => setPortfolioPayload(data));
  }

  const renderComponent = (index) => {

    const components = [
        [<Home setComponentIndex={setComponentIndex} resume_url={portfolioPayload.resume_url} />, "Home"],
        [<About about={portfolioPayload}/>, "About"],
        [<Projects projects={portfolioPayload.projects}/>, "Projects"],
        [<Skills skills={portfolioPayload.skills}/>, "Skills"],
        [<Contact />, "Contact"]
    ]
    return (
      components[index]
    )
  }

  return (
    <div>
      <NavBar handleShow={handleShow} pageName={renderComponent(componentIndex)[1]}/>
        {renderComponent(componentIndex)[0]}
      <RightBar show={show} handleClose={handleClose} setComponentIndex={setComponentIndex} />
    </div>
  );
}

export default App;
