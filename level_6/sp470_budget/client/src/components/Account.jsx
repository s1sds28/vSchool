import React, { useContext, useState } from "react";


import { UserContext } from "../context/UserProvider.jsx";

import '../css/account.css'

export default function Account(props) {


  const {
    deleteAccount,
    updateAccount,
    _id,
    company,
    schedule,
    paymentMethod,
    accountNumber,
    budgetAmount,
    description
    } = props;

    const { filterBills } = useContext(UserContext)

  const initData = {
    company: company || "",
    schedule: schedule || "",
    paymentMethod: paymentMethod || "",
    accountNumber: accountNumber || "",
    budgetAmount: budgetAmount || "",
    description: description || ""
  }

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(initData)

  function handleInputChange(e){
    e.preventDefault()
    const {name, value} = e.target;
    setFormData(prev => {
        return {
            ...prev,
            [name]: value
        }
    })
  }

  function handleCancel(e){
    e.preventDefault()
    setIsEditing(prev => !prev)
    setFormData(initData)
  }

  function handleDelete(e){
    e.preventDefault()
    deleteAccount(_id)
    setIsEditing(prev => !prev)
  }

  function handleSubmit(e){
    e.preventDefault()
    updateAccount(_id, formData)
    setIsEditing(prev => !prev)
  }

  function handleDisplayBills(e){
    e.preventDefault()
    filterBills(_id)
  }
  return (
    <>
    {isEditing ? (
        <form className="account" onSubmit={handleSubmit} >


          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
            placeholder="Enter company name"
            value={formData.company}
          />
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            onChange={handleInputChange}
            placeholder="Enter payment Schedule"
            value={formData.schedule}
          />

          <label htmlFor="paymentMethod">Payment Method:</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            onChange={handleInputChange}
            placeholder="Enter payment method"
            value={formData.paymentMethod}
          />

          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="number"
            id="accountNumber"
            name="accountNumber"
            onChange={handleInputChange}
            placeholder="Enter account number"
            value={formData.accountNumber}
          />
          <label htmlFor="budgetAmount">Budget Amount:</label>
          <input
            type="number"
            id="budgetAmount"
            name="budgetAmount"
            onChange={handleInputChange}
            placeholder="Enter budget amount"
            value={formData.budgetAmount}
          />
          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button>
          <button onClick={handleDelete}>Delete</button>


        </form>
    ):( 
        <div className="account">
            <h3>{company}</h3>
            <p>Account _id: {_id}</p>
            <p>Schedule: {schedule}</p>
            <p>Payment Method: {paymentMethod}</p>
            <p>Account Number: {accountNumber}</p>
            <p>Budget Amount: {budgetAmount}</p>
            <p>Description: {description}</p>
            <button onClick={handleDisplayBills}>Display Bills</button>
            <button onClick={()=> setIsEditing(prev => !prev)}>Edit</button>
        </div>)}
    </>

  );
}
