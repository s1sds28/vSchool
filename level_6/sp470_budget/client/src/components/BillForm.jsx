import React, { useState, useContext } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

import '../css/addBillForm.css'
export default function AccountForm(props){

    const { 
        user: {
          _id
        },
        filteredBills,
        addBill,
        accountNumforBill,
      } = useContext(UserContext)

    const initInputs = {
        issueDate: "",
        amount: "",
        isPaid: "",
        dueDate: "",
        paymentStatus: "",
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
        console.log("submit")
    }

    const hasAccount = accountNumforBill !== null ? true : false;


    console.log(hasAccount)

    const { issueDate, amount, isPaid, dueDate, paymentStatus } = inputs

    return (
        hasAccount ? (
          <form className='add-bill' onSubmit={handleSubmit}>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              name='amount'
              onChange={handleChange}
              placeholder=""
              value={inputs.amount}
            />
            <label htmlFor='isPaid'>Paid</label>
            <input
              type='checkbox'
              name='isPaid'
              onChange={handleChange}
              placeholder=""
              checked={inputs.isPaid}
            />
            <label htmlFor='dueDate'>Due Date</label>
            <input
              type='date'
              name='dueDate'
              onChange={handleChange}
              placeholder=""
              value={inputs.dueDate}
            />
            <label htmlFor='paymentStatus'>Payment Status</label>
            <input
              type='text'
              name='paymentStatus'
              onChange={handleChange}
              placeholder='Payment Status'
              value={inputs.paymentStatus}
            />
            <button type='submit'>Add Bill</button>
          </form>
        ) : (
          <div className='add-bill'>
            <p>Display bills on an Account to add a bill</p>
          </div>
        )
      );
      


}