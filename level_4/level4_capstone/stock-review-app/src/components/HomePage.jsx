import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Stock Research</h1>
      <p>Research a stock's previous high and low sales</p>
      <Link to="/about">
        <button style={{margin: "5px"}}>About</button>
      </Link>
      <Link to="/research">
        <button>Research</button>
      </Link>
    </div>
  );
};

export default HomePage;
