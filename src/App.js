import React, { useState, useEffect } from 'react';

import './App.css'

import MainContent from './components/MainContent'

import Menu from './components/Menu'

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

  const handleMenuClick = id => setShow(id)

  return (
    <div id="app" >

      <Menu handleMenuClick={handleMenuClick} />
      <MainContent show={show} user={user} />

    </div>
  );
}

export default App;
