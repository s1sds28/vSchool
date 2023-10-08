import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

import Card from './components/Card'



function App() {
  const [backgroundColor, setBackGroundColor] = useState('sea')
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
      <p>{`${count}`}</p>
      <button onClick={handleChange}>Change Background Color</button>
    </>
  )
}

export default App


// const [starWarsData, setStarWarsData] = React.useState({})
// const [count, setCount] = React.useState(0)

// /**
//  * Quiz:
//  * 1. What will happen if I put back our Star Wars API call
//  *    into the effect function?
//  * 2. How will the useEffect be different if I use 
//  *    setStarWarsData() instead of console.log()
//  * 3. What SHOULD be in our dependencies array in this case?
//  */
// React.useEffect(function() {
//     console.log("Effect ran")
//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
// }, [])

// return (
//     <div>
//         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         <h2>The count is {count}</h2>
//         <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//     </div>
// )
// }