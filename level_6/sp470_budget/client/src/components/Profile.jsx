import React, { useState, useContext, useEffect } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

import AccountForm from './AccountForm.jsx'
import AccountList from './AccountList.jsx'

import BillForm from './BillForm.jsx'
import BillList from './BillList.jsx'

import "../css/profile.css"

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
  const [displayBills, setDisplayBills] = useState(false)

return (
  <>
    <div className='main-profile'>
      <h1>Profile Welcome { username }</h1>
      <div className='main-container'>
        <div className='profile-dropdown'>
          <h3>
          Add an Account to your budget
          </h3>
          {<AccountForm/>}
        </div>
        <div className='profile-dropdown'>
          <h3>
            Accounts
          </h3>
          {<AccountList/>}
        </div>

                <div className='profile-dropdown'>
          <h3>
          Add an Account to your budget
          </h3>
          {<BillForm/>}
        </div>
        
        <div className='profile-dropdown'>
          <h3 onClick={() => setDisplayBills(prev => !prev)}>
            Bills
          </h3>
          {<BillList/>}
        </div>
      </div>
    </div>
  </>
);
}