import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

import Card from './components/Card'



function App() {
  const [backgroundColor, setBackGroundColor] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const apiUrl = `https://www.colr.org/json/color/random?timestamp=${Date.now()}`;

    axios.get(apiUrl)
      .then(response => {
        const newColor = response.data.colors[0].hex
        setBackGroundColor(newColor);
      })

      .catch(error => {
        console.error('Error fetching data:', error)
      })

  }, [count])

  function handleChange(){
    setCount(prevState => prevState + 1)
  }

  return (
    <>
      <Card
        backgroundColor={backgroundColor}
        count={count} />
      <p style={{ backgroundColor: `#${backgroundColor}`}} className="read-the-docs">
        change the backgroundColor
      </p>
      {/* <p>{`${count}`}</p> */}
      <button onClick={handleChange}>Change Background Color</button>
    </>
  )
}

export default App
