import React from 'react';

const Buttons = (props) => {

  return (
    <div>
      <button onClick={props.smallTimeDJ}>Small Time DJ</button>
      <button onClick={props.partyDJ}>Party DJ</button>
      <button onClick={props.leftBlue}>Left Blue</button>
      <button onClick={props.rightBlue}>Right Blue</button>
      <button onClick={props.topLeft}>Top Left</button>
      <button onClick={props.topRight}>Top Right</button>
      <button onClick={props.bottomLeft}>Bottom Left</button>
      <button onClick={props.bottomRight}>Bottom Right</button>
    </div>
  );
};

export default Buttons;
