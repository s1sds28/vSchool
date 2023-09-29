import React from "react";
import "./DiceBox.css";

function DiceBox() {
  const [numbers, setNumbers] = React.useState([null, null, null, null, null, null]);

  function getNewNumbers() {
    setNumbers(prevState =>
      prevState.map(() => Math.floor(Math.random() * 6) + 1)
    );
  }

  function resetNumbers() {
    setNumbers([null, null, null, null, null, null])
  }

  return (
    <>
      <div className="dice-container">
        {numbers.map((number, index) => (
          <div key={index} className={`die die-${number}`}>
            {number}
          </div>
        ))}
      </div>
      <button onClick={getNewNumbers}>Roll Dice</button>
      <br/><br/>  
      <button onClick={resetNumbers}>Reset Dice</button>
    </>
  );
}

export default DiceBox;
