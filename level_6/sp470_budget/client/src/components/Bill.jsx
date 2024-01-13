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

  const initData = {
    issueDate: issueDate || "",
    amount: amount || 0,
    isPaid: isPaid || false,
    dueDate: dueDate || "",
    paymentStatus: paymentStatus || "",
    account: account,
    user: user,
    _id: _id
  }

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(initData)

  function handleInputChange(e){
    e.preventDefault()
    const { name, value, type, checked } = e.target
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({
        ...prev,
        [name]: inputValue
    }));
}

  function handleCancel(e){
    e.preventDefault()
    setIsEditing(prev => !prev)
    setFormData(initData)
  }

  function handleDelete(e){
    e.preventDefault()
    console.log("handleDelete")
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("handleSubmit")
  }

  function handleDisplayBills(e){
    e.preventDefault()
    console.log("handleDisplayBills")
  }

  const originalIssueDate = new Date(formData.issueDate);
  const formattedIssueDate = originalIssueDate.toISOString().slice(0, 10);

  const originalDueDate= new Date(formData.dueDate);
  const formattedDueDate = originalDueDate.toISOString().slice(0, 10);

  return (
    <>
    {isEditing ? (
      <form className="account" onSubmit={handleSubmit} >
        <label htmlFor="issueDate">Issue Date</label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            onChange={handleInputChange}
            placeholder={formData.issueDate}
            value={formattedIssueDate}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={handleInputChange}
            placeholder={formData.amount}
            value={formData.amount}
          />
          <label htmlFor="isPaid">Is Paid</label>
          <input
            type="checkbox"
            id="isPaid"
            name="isPaid"
            onChange={handleInputChange}
            placeholder={formData.isPaid.toString()}
            value={formData.isPaid}
          />
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            onChange={handleInputChange}
            placeholder={formData.dueDate}
            value={formattedDueDate}
          />
          <label htmlFor="account">Account</label>
          <input
            type="text"
            id="account"
            name="account"
            placeholder="account"
            value={formData.account}
            readOnly
          />
          <label htmlFor="user">user</label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="user"
            value={formData.user}
            readOnly
          />
          <label htmlFor="_id">_id</label>
          <input
            type="text"
            id="_id"
            name="_id"
            placeholder="_id"
            value={formData._id}
            readOnly
          />

          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button>
          <button onClick={handleDelete}>Delete</button>

      </form>
    ):(
      <div className="account">
        <h3>Bill</h3>
        <p>account: {account}</p>
        <p>isPaid: {isPaid.toString()}</p>
        <p>paymentStatus: {paymentStatus}</p>
        <p>user: {user}</p>
        <p>issue Data: {issueDate}</p>
        <p>amount: {amount}</p>
        <p>dueDate: {dueDate}</p>
        <p>_id: {_id}</p>
        <button onClick={()=> setIsEditing(prev => !prev)}>Edit</button>
      </div>
    )}
    </>
  );
}
