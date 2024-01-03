import React, { useContext, useEffect } from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'

import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username
    },
    addIssue,
    issues,
    getUserIssues,
  } = useContext(UserContext)

  const isProfile = true;

  useEffect(() => {
    getUserIssues()
    }, [])

  return (
    <div className='profile'>
    <h1>Profile component: Welcome { username }!</h1>
    <h3>Add an Issue</h3>
    <IssueForm addIssue={addIssue}/>
    <h3>Your Issues</h3>
    <IssueList issues={ issues } isProfile={ isProfile }/>
    </div>
  )
}