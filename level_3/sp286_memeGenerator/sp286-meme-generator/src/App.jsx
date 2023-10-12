import React, { useState, useEffect } from 'react'
import './App.css'


import {v4 as uuidv4} from 'uuid'

import './App.css';
import Header from './components/Header';
import NewMeme from './components/NewMeme'; // Import the new component


function App() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: uuidv4()
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            id: uuidv4()
        }))  
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function saveMeme(event) {
    console.log(meme.id)
    }

  return (
    <>
      <Header />
      <main>
        <NewMeme
          meme={meme}
          allMemes={allMemes}
          getMemeImage={getMemeImage}
          handleChange={handleChange}
          saveMeme={saveMeme}
        />
      </main>
    </>
  )
}

export default App
