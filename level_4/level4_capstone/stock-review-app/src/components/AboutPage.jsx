import React from 'react';

import './components.css';

import { Link } from 'react-router-dom';

const AboutPage = () => {


  return (
    <div className="about-page">
      <h1>About Stock Research</h1>
      <p>The Stock Research application retrieves the highest and lowest trading prices for a stock. Below, I've outlined a case for your reference</p>
 
      <section className='example'>

      <div className='input-container'>
        <input value="AAPL"/>
        <p className='about--description'>Enter the Ticker</p>
      </div>
      <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
      </div>
        <input
        type='date'
        value="2023-01-01"/>
        <p style={{margin: "10px"}}>Enter the Date</p>

        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
        </div>
          <button style={{margin: "10px"}}>Fetch Data</button>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
      </div>      
      <Link to="/research">
        <button>Try it yourself :)</button>
      </Link>
      </section>
    </div>
  );
};

export default AboutPage;
