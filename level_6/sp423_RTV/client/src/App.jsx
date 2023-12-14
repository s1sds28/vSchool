import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import { UserContext } from './context/UserProvider.jsx'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <Router>
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route path="/" element={ token ? <Navigate to="/profile"/> : <Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/public" element={<Public />} />
      </Routes>
    </div>
    </Router>
  )
}