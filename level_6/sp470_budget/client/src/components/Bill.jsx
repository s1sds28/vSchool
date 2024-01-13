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

  const { deleteBill, updateBill } = useContext(UserContext)

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
    deleteBill(_id)
  }

  function handleSubmit(e){
    e.preventDefault()
    updateBill(_id, formData)
    setIsEditing(prev => !prev)
  }

  const originalIssueDate = new Date(formData.issueDate);
  const formattedIssueDate = originalIssueDate.toISOString().slice(0, 10);

  const originalDueDate= new Date(formData.dueDate);
  const formattedDueDate = originalDueDate.toISOString().slice(0, 10);

  return (
    <>
    {isEditing ? (
      <form className="account" onSubmit={handleSubmit} >
      <label htmlFor="paymentStatus">Payment Status</label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            onChange={handleInputChange}
            value={formData.paymentStatus}
          >
            <option value="N/A">N/A</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
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
            checked={formData.isPaid}
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
          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button>
          <button onClick={handleDelete}>Delete</button>

      </form>
    ):(
      <div className="account">
        <h3>Bill</h3>
        <p>issue Data: {formattedIssueDate}</p>
        <p>isPaid: {isPaid.toString()}</p>
        <p>dueDate: {formattedDueDate}</p>
        <p>paymentStatus: {paymentStatus}</p>
        <p>amount: {amount}</p>
        <button onClick={()=> setIsEditing(prev => !prev)}>Edit</button>
      </div>
    )}
    </>
  );
}
