import React from "react";

import { StockContext } from "./StockContext"


const StockCard = ({id, afterHours, close, from, high, low, open, preMarket, status, symbol, volume}) => {
  
  const { handleDeleteCard } = React.useContext(StockContext)

  const handleDeleteClick = () => {
    handleDeleteCard(symbol, from);
  };
 
  return (
      <div className="card">
        <h2>STOCK DATA</h2>
        <p>{`Date: ${from}`}</p>
        <p>{`Ticker: ${symbol}`}</p>
        <p>{`dayHigh: ${high}`}</p>
        <p>{`dayLow: ${low}`}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  };
  
  export default StockCard;