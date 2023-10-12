import React, {useState} from 'react'

import './App.css'
import Badge from './components/Badge'
import CardList from './components/CardList'

function App() {
  const [submittedForms, setSubmittedForms] = useState ([])

  const handleFormSubmit = (formData) => {
    setSubmittedForms([...submittedForms, formData]);
  };

  function handleDelete(badgeId){
    setSubmittedForms(prevForms => prevForms.filter(badge => badge.id !== badgeId))
  }

  function handleEdit(badgeId, update){
    setSubmittedForms(prevForms => prevForms.map(badge => badge.id !== badgeId ? badge : update))
  }

  return (
    <>
      <Badge 
        submittedForms={submittedForms}
        handleFormSubmit={handleFormSubmit}
      />
      <CardList 
      submittedForms={submittedForms}
      handleDelete = {handleDelete}
      handleEdit = {handleEdit}
      />
    </>
  )
}

export default App
