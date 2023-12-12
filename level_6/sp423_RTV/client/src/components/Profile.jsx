import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  // const { 
  //   user: { 
  //     username 
  //   }
  // } = useContext(UserContext)

  return (
    <div className="profile">
      <p>Hello World</p>
    </div>
  )
}