import React from "react";

export default function Account(props) {
  const { _id, company, schedule, paymentMethod, accountNumber, budgetAmount, description } = props;

  return (
    <div>
      <h3>{company}</h3>
      <p>Schedule: {schedule}</p>
      <p>Payment Method: {paymentMethod}</p>
      <p>Account Number: {accountNumber}</p>
      <p>Budget Amount: {budgetAmount}</p>
      <p>Description: {description}</p>
    </div>
  );
}
