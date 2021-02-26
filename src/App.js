import React, { useState, useEffect } from 'react';
import './App.css'

import Landing from './components/Landing.js'
import MainContent from './components/MainContent.js'


function App() {

  const [user, setUser] = useState({})

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

  return (
    <div id="app" >

      <Landing 
        first_name={user.first_name} 
        last_name={user.last_name}
        bio={user.bio}
        email={user.email}
        links={user.links}
      />

      <MainContent projects={user.projects} technologies={user.technologies} />
    

    </div>
  );
}

export default App;
