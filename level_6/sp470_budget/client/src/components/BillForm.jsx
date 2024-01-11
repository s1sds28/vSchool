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


    const { issueDate, amount, isPaid, dueDate, paymentStatus } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='paymentStatus'
                onChange={handleChange}
                placeholder='Payment Status'
                value={inputs.paymentStatus}
                />
            <button>Add Account</button>
        </form>
    )


}