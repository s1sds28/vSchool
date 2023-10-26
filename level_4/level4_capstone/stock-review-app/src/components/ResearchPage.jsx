import React, { useState, useEffect } from 'react';

import { StockContext } from "./StockContext"

import StockCard from './StockCard';

import './components.css'

import { v4 as uuidv4 } from 'uuid';

const ResearchPage = () => {

  const { ticker, setTicker, formData, setFormData, fetchData, arrReviews } = React.useContext(StockContext)


  const handleChange = e => {
    setTicker(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit")
    fetchData(e)

    }


    const stockCards = arrReviews.map((review) => {
      const uniqueKey = uuidv4()
      console.log(review.symbol)
      return (
        <StockCard
          key={uniqueKey}
          id={uniqueKey}
          afterHours= { review.afterHours }
          close= { review.close }
          from = { review.from }
          high = { review.high }
          low= { review.low }
          open= { review.open }
          preMarket= { review.preMarket }
          status= { review.status }
          symbol= { review.symbol }
          volume= { review.volume }
          />
      );
    });

  
  
  return (
    <>
    <form onSubmit={ handleSubmit }>
      <input
      name='ticker'
      placeholder='Ticker'
      value={ ticker }
      onChange={ handleChange }
      />
      <button type='submit'>Fetch Data</button>
      <p>STOCK CARDS</p>
    </form>
    <section className='cards-list'>
      { stockCards }
    </section>
    </>
  );
};

export default ResearchPage;
