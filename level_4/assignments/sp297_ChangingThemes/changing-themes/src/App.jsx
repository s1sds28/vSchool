import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { ThemeContextProvider } from './ThemeContext'


function App(props) {

  return (
    <>
      <ThemeContextProvider>
        <div className='app-container'>
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
