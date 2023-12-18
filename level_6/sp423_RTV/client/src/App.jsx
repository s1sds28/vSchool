import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { UserContext } from './context/UserProvider.jsx'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <Router>
    <div className="app">
      { token && <Navbar logout={logout}/>}


      <Routes>
        <Route path="/" element={ token ? <Navigate to="/profile"/> : <Auth />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route
        path="/public" 
        element={
          <ProtectedRoute token={ token } redirectTo="/">
            <Public/>
          </ProtectedRoute>
        } 
      />
      </Routes>
    </div>
    </Router>
  )
}