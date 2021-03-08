import React, { useState, useEffect } from 'react';
import './App.css'

import Landing from './components/Landing.js'
// import MainContent from './components/MainContent.js'
import Menu from './components/Menu'
import ProjectsContainer from './components/ProjectsContainer'
import BlogsContainer from './components/BlogsContainer'
import EducationsContainer from './components/EducationsContainer'


function App() {

  const [user, setUser] = useState({})
  const [show, setShow] = useState(0)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = () => {
    fetch('http://localhost:3001/users/1.json')
    .then(response => response.json())
    .then(user => {
      setUser(user)
    })
    .catch(errors => console.log(errors))
  }

  const renderContainer = () => {
      const componentArray = [
      <Landing first_name={user.first_name} last_name={user.last_name} bio={user.bio} email={user.email} links={user.links}/>,
      <ProjectsContainer projects={user.projects} technologies={user.technologies}/>,
      <BlogsContainer blogs={user.blogs} technologies={user.technologies}/>,
      <EducationsContainer educations={user.educations} technologies={user.technologies}/>
    ]
    return componentArray[show]
  }

  const handleMenuClick = id => setShow(id)

  return (
    <div id="app" >

      {renderContainer()}
      <Menu handleMenuClick={handleMenuClick} />
      {/* <MainContent educations={user.educations} blogs={user.blogs} projects={user.projects} technologies={user.technologies} /> */}
    

    </div>
  );
}

export default App;
