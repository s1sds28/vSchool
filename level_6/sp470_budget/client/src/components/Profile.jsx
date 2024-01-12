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
      username
    },
    getUserData,
  } = useContext(UserContext)

  useEffect(() => {
    getUserData();
  }, []);

  const [displayAccountForm, setDisplayAccountForm] = useState(false)
  const [displayAccounts, setDisplayAccounts] = useState(false)
  const [displayBills, setDisplayBills] = useState(false)

return (
  <>
    <div className='main-profile'>
      <h1>Welcome { username }</h1>
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
            Add a Bill to an Account
          </h3>
          {<BillForm/>}
        </div>
        <div className='profile-dropdown'>
          <h3>
            Bills
          </h3>
          {<BillList/>}
        </div>
      </div>
    </div>
  </>
);
}