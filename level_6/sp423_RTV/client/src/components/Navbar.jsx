import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/">Login</Link>
      <Link to="/public">Public</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}