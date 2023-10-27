import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Form from './components/Form'
import UglyThings from './components/UglyThings'

function App() {
  
  return (
    <>
      <Header/>
      <Form/>
      <UglyThings/>
    </>
  )
}

export default App
