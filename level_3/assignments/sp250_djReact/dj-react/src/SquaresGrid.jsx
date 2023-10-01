import React from 'react';

const SquaresGrid = ({ squares }) => {
  return (
    <section className='squareGrid'>
      {squares.map((square, index) => (
        <div key={index} className={`${square}`}></div>
      ))}
    </section>
  );
};

export default SquaresGrid;
