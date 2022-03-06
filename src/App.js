import './App.css';
import React, { useState } from 'react';

import {Container, Row } from 'react-bootstrap' 

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import NavBar from './components/NavBar';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Projects />
      <Skills/>
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
