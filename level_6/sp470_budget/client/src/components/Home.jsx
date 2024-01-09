import React, { useContext, useEffect } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

export default function Home(){
  const { 
    user: { 
      username
    },

  } = useContext(UserContext)

  // useEffect(() => {
  //   getAllIssues()
  //   }, [])

  return (
    <>
      <p>Home</p>
    </>
  )
}