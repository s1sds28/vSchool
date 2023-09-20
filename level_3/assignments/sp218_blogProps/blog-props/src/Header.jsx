import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <p className="header-top-text">Start Bootstrap</p>
        <ul className="header-ul">
          <li>Home</li>
          <li>About</li>
          <li>Sample Post</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h1>Clean Blog</h1>
        <h5>A blog Theme by Start Bootstrap</h5>
      </div>
    </div>
  );
};
export default Header;