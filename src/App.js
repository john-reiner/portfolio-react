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
    fetch('http://localhost:3001/users/1')
    .then(response => response.json())
    .then(user => setUser(user))
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

      <MainContent />
    

    </div>
  );
}

export default App;
