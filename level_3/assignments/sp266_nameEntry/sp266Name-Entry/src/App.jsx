import React, { useState } from 'react'
import './App.css'


//https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable


function App() {
  const [firstName, setFirstName] = useState("")
  const [allNames, setAllNames] = useState([])

  function handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit");
    setAllNames(prevNames => [...prevNames, firstName]);
    setFirstName(""); // Reset the input field after submission
  }

  const allNameElements = allNames.map(name=> (<li>{name}</li>))

  return (
    (<>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
        <br/>
        <input
          name="firstName"
          type="text"
          placeholder="Enter Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}>
        </input>

        {firstName ? <h1>{firstName}</h1> : <h1>&nbsp;</h1>}

      </form>
      <ul>
        {allNameElements}
      </ul>
      </>)
  )
}

export default App
