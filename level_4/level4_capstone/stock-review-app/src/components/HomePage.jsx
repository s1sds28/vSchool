import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Stock Review</h1>
      <p>Get an overview of a stock without going to multiple websites.</p>
      <Link to="/research">
        <button>Review a Stock</button>
      </Link>
    </div>
  );
};

export default HomePage;
