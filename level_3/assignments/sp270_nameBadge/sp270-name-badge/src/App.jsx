import React, {useState} from 'react'

import './App.css'
import Badge from './components/Badge'
import CardList from './components/CardList'

function App() {
  const [submittedForms, setSubmittedForms] = useState ([])

  const handleFormSubmit = (formData) => {
    setSubmittedForms([...submittedForms, formData]);
  };

  //map over submittedForms 

  return (
    <>
      <Badge 
        submittedForms={submittedForms}
        handleFormSubmit={handleFormSubmit}
      />
      <CardList 
      submittedForms={submittedForms}
      />
    </>
  )
}

export default App
