import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css"

function Header() {
  return (
    <nav className='header'>
      <Link to="/" className='navbar-link'>Home</Link>
      <Link to="/about" className='navbar-link'>About</Link>
      <Link to="/trackbills" className='navbar-link'>Track Bills</Link>

    </nav>
  );
}

export default Header;
