import React, { useState, useContext } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

import '../css/addAccountForm.css'

export default function AccountForm(props){

    const { 
        user: {
          _id
        },
        addAccount
      } = useContext(UserContext)

    const initInputs = {
        company: "",
        schedule: "",
        paymentMethod: "",
        accountNumber: "",
        budgetAmount: "",
        description: "",
        user: _id
    }
    const [inputs, setInputs] = useState(initInputs)


    function handleChange(e){
        const { name, value } = e.target
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        addAccount(inputs)
        setInputs(initInputs)

    }

    const { company, schedule, paymentMethod, accountNumber, budgetAmount, description } = inputs

    return (
        <form className="account" onSubmit={handleSubmit}>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleChange}
            placeholder="Enter company name"
            value={inputs.company}
          />
      
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            onChange={handleChange}
            placeholder="Enter schedule"
            value={inputs.schedule}
          />
      
          <label htmlFor="paymentMethod">Payment Method:</label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            onChange={handleChange}
            placeholder="Enter payment method"
            value={inputs.paymentMethod}
          />
      
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="number"
            id="accountNumber"
            name="accountNumber"
            onChange={handleChange}
            placeholder="Enter account number"
            value={inputs.accountNumber}
          />
      
          <label htmlFor="budgetAmount">Budget Amount:</label>
          <input
            type="number"
            id="budgetAmount"
            name="budgetAmount"
            onChange={handleChange}
            placeholder="Enter budget amount"
            value={inputs.budgetAmount}
          />
      
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleChange}
            placeholder="Enter description"
            value={inputs.description}
          />
      
          <button>Add Account</button>
        </form>
      );

















}