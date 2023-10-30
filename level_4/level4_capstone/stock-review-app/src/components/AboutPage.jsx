import React from 'react';

import './components.css';

import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Stock Research</h1>
      <p>The Stock Research application retrieves the highest and lowest trading prices for a stock. Below, I've outlined a case for your reference</p>
      <h1>Utilize the Research page to analyze a stock of your choice</h1>
      <h3>Example stock: AAPL, MSFT</h3>
      <section className='example'>

      <div className='input-container'>
        <input placeholder="AAPL"/>
        <p className='about--description'>Enter the Ticker</p>
      </div>
      <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
      </div>
      <div className='card'>
        <h2>Save the data</h2>
          <p>{`Date: XXX`}</p>
          <p>{`Ticker: XXX`}</p>
          <p>{`dayHigh: XXX`}</p>
          <p>{`dayLow: XXX`}</p>
        </div>


        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
        </div>
        <div className='card'>
        <h2>Saved for review</h2>
          <p>{`Date: XXX`}</p>
          <p>{`Ticker: XXX`}</p>
          <p>{`dayHigh: XXX`}</p>
          <p>{`dayLow: XXX`}</p>
        </div>
        <div className='card'>
        <h2>Saved for review</h2>
          <p>{`Date: XXX`}</p>
          <p>{`Ticker: XXX`}</p>
          <p>{`dayHigh: XXX`}</p>
          <p>{`dayLow: XXX`}</p>
        </div>
        <div className="arrow-container">
          <div className="arrow"></div>
          <div className="text">Next Step</div>
      </div>
        <h3>Go to the Research Page</h3>
      </section>
    </div>
  );
};

export default AboutPage;
