import React, { useState, useEffect } from 'react';

import { StockContext } from "./StockContext"

const ResearchPage = () => {

  const { fetchData } = React.useContext(StockContext)

  const [ticker, setTicker] = useState("")

  const handleChange = e => {
    setTicker(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit")
    fetchData(e)
    }

  return (
    <form onSubmit={ handleSubmit }>
      <input
      name='ticker'
      placeholder='Ticker'
      value={ticker}
      onChange={ handleChange }
      />
      <button type='submit'>Fetch Data</button>
      <p>Stock Cards go here</p>
    </form>
  );
};

export default ResearchPage;
