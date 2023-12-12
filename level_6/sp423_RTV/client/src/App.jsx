import React, { useState, useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './context/UserProvider.jsx'

import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'


function App() {
  const { token, logout } = useContext(UserContext)
  return (


    <div className="app">
      <Navbar logout={logout}/>
      {/* <Routes>
        <Route
          path="/profile"
          element={ <Profile /> }
        />
      </Routes> */}
    </div>
  )
}

export default App
