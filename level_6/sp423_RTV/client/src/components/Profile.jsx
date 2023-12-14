import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username 
    }
  } = useContext(UserContext)

  return (
    <p>Profile component</p>
  )
}