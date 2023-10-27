import React from "react";



const StockCard = ({id, afterHours, close, from, high, low, open, preMarket, status, symbol, volume}) => {
    return (
      <div className="card">
        <h2>STOCK DATA</h2>
        <p>{`Date: ${from}`}</p>
        <p>{`Ticker: ${symbol}`}</p>
        <p>{`dayHigh: ${high}`}</p>
        <p>{`dayLow: ${low}`}</p>
      </div>
    );
  };
  
  export default StockCard;
  