import React from 'react';

const Bill = ({ bill }) => {
  console.log("BILL", bill)
  return (
    <div>
      <p>Bill component</p>
      <p>{bill.issueDate}</p>
      <p>Amount: $ {bill.amount}</p>
      {/* Add more bill details as needed */}
    </div>
  );
};



export default Bill;