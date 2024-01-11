import React, { useState } from "react";


import { UserContext } from "../context/UserProvider.jsx";

import '../css/account.css'

export default function Account(props) {


  const { updateAccount, _id, company, schedule, paymentMethod, accountNumber, budgetAmount, description } = props;

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

  function handleSubmit(e){
    e.preventDefault()
    updateAccount(_id, formData)
    setIsEditing(prev => !prev)
  }

  return (
    <>
    {isEditing ? (
        <form className="account" onSubmit={handleSubmit} >

          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Submit</button>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Schedule:
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Payment Method:
            <input
              type="text"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Account Number:
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Budget Amount:
            <input
              type="text"
              name="budgetAmount"
              value={formData.budgetAmount}
              onChange={handleInputChange}
            />
          </label>
        </form>
    ):(    
        <div className="account" onClick={()=> setIsEditing(prev => !prev)}>
            <h3>{company}</h3>
            <p>Schedule: {schedule}</p>
            <p>Payment Method: {paymentMethod}</p>
            <p>Account Number: {accountNumber}</p>
            <p>Budget Amount: {budgetAmount}</p>
            <p>Description: {description}</p>
        </div>)}
    </>

  );
}
