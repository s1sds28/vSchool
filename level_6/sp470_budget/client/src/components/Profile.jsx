import React, { useContext, useEffect } from 'react'

import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username
    },
  } = useContext(UserContext)

  const isProfile = true;

  // useEffect(() => {
  //   getUserIssues()
  //   }, [])

  return (
    <>
      <p>Profile</p>
    </>
  )
}