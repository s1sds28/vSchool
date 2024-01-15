import React from 'react'
import { Link } from 'react-router-dom'

import '../css/navBar.css'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/public">Public</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Home">Home</Link></li>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  )
}