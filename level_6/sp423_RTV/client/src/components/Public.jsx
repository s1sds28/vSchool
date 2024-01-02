import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList.jsx'

import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username
    },
    allIssues,
    getAllIssues,
  } = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
    }, [])

  return (
    <div className='profile'>
    <h1>Profile component: Welcome { username }!</h1>

    <h3>All Issues</h3>
    <IssueList issues={ allIssues }/>
    </div>
  )
}