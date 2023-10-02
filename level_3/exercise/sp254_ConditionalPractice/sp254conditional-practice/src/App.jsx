import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

import Joke from './Joke'

import jokesData from "./jokesData"



function App() {
  const [messages, setMessages] = React.useState(["a", "b"])

  const jokeElements = jokesData.map(joke => {
    return (
        <Joke 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
    })  

  return (
    <>
      {
        messages.length > 0 &&
        <h1>You have {messages.length} unread messages!</h1>
      }
      {jokeElements}
    </>
  )
}

export default App


