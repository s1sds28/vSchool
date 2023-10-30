import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Stock Review</h1>
      <p>Get an overview of a stock without going to multiple websites.</p>
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
