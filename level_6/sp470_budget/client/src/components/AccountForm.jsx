import React, { useState, useContext } from 'react'

import { UserContext } from '../context/UserProvider.jsx'


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
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='company'
                onChange={handleChange}
                placeholder='company'
                value={inputs.company}
                />
            <input
                type='text'
                name='schedule'
                onChange={handleChange}
                placeholder='schedule'
                value={inputs.schedule}
                />
            <input
                type='text'
                name='paymentMethod'
                onChange={handleChange}
                placeholder='paymentMethod'
                value={inputs.paymentMethod}
                />
            <input
                type='number'
                name='accountNumber'
                onChange={handleChange}
                placeholder='accountNumber'
                value={inputs.accountNumber}
                />
            <input
                type='number'
                name='budgetAmount'
                onChange={handleChange}
                placeholder='budgetAmount'
                value={inputs.budgetAmount}
                />
            <input
                type='text'
                name='description'
                onChange={handleChange}
                placeholder='description'
                value={inputs.description}
                />
            <button>Add Account</button>
        </form>
    )


















}