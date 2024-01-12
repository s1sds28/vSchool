import React, { useContext, useState } from "react";


import { UserContext } from "../context/UserProvider.jsx";

import '../css/account.css'

export default function Bill(props) {


  const {
    text,
    issueDate,
    amount, 
    isPaid,
    dueDate,
    paymentStatus,
    account,
    user,
    _id,
    } = props;

    const displayBills = account ? true : false;
  return (
        <div className="account">
            <h3>Bill</h3>
            <p>account: {account}</p>
            <p>isPaid: {isPaid}</p>
            <p>paymentStatus: {paymentStatus}</p>
            <p>user: {user}</p>
            <p>issue Data: {issueDate}</p>
            <p>amount: {amount}</p>
            <p>dueDate: {dueDate}</p>
            <p>_id: {_id}</p>



        </div>

  );
}
