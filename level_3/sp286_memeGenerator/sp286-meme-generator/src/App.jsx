import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'

import NewMeme from './components/NewMeme'


function App() {

  const [meme, setMeme] = useState({
    topText: "TOPTEXT",
    bottomText: "BOTTOMTEXT",
    randomImage: "RANDOMIMAGE"
  })

  const [allMemeImages, setAllMemeImages] = useState()

  // function handleChange(){
  //   setMeme(prevState => ...prevState, )
  // }

  return (
    <>
      <Header />
      <NewMeme 
      topText={meme.topText}
      bottomText={meme.bottomText}
      randomImage={meme.randomImage}
     />
    </>
  )
}

export default App
