import React, { useContext, useEffect } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

export default function Home(){
  const { 
    user: { 
      username,
      accounts,
      bills
    },

  } = useContext(UserContext)



  return (
    <>
      <p>Home</p>
    </>
  )
}