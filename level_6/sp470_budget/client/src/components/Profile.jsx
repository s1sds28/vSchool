import React, { useState, useContext, useEffect } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

import AccountForm from './AccountForm.jsx'
import AccountList from './AccountList.jsx'

export default function Profile(){
  const { 
    user: {
      _id,
      username
    },
    accounts,
    bills,
    addAccount
  } = useContext(UserContext)

  // I don't have accounts here
  // console.log("accounts", accounts, 'username', username, "id", _id)

  const [displayAccountForm, setDisplayAccountForm] = useState(false)
  const [displayAccounts, setDisplayAccounts] = useState(false)

  return (
    <>
      <div className='profile'>
        <h1>Profile Welcome { username }</h1>
        <h3 onClick={() => setDisplayAccountForm(prev => !prev)}>
        Click here to add an Account to your budget
        </h3>
      {displayAccountForm && <AccountForm/>}
        <h3 onClick={() => setDisplayAccounts(prev => !prev)}>
        Click here to show Acconts in your budget
        </h3>
      {displayAccounts && <AccountList/>}
      </div>
    </>
  )
}