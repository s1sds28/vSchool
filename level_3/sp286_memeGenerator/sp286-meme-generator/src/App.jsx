import React, { useState, useEffect } from 'react'
import './App.css'


import {v4 as uuidv4} from 'uuid'

import './App.css';
import Header from './components/Header';
import NewMeme from './components/NewMeme'; // Import the new component

import SavedMemes from './components/SavedMemes'


function App() {

    // set up state for meme object
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        id: uuidv4()
    })

    // save memes in an array 
    const [ savedMemes, setSavedMemes ] = React.useState([])

    // fetch an array of memes from api
    const [ allMemes, setAllMemes ] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // get a new meme at random 
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            id: uuidv4()
        }))  
    }

    // Change the meme's top and bottom text
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    function saveMeme(event) {
        setSavedMemes([...savedMemes, meme]);
        console.log(savedMemes)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                topText: "",
                bottomText: "",
                id: uuidv4()
            }
        })
    };

    function handleDelete(id) {
        setSavedMemes(prevMemes => prevMemes.filter(meme => meme.id !== id))
    }

    function handleEdit(id, update){
        console.log("handleEdit in App.js")
        setSavedMemes(prevMemes => prevMemes.map(meme => meme.id !== id ? meme : update))
      }

  return (
    <>
        <Header />
        <NewMeme
            meme={meme}
            getMemeImage={getMemeImage}
            handleChange={handleChange}
            saveMeme={saveMeme}
        />
        <SavedMemes
            savedMemes={savedMemes}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />
    </>
  )
}

export default App;
