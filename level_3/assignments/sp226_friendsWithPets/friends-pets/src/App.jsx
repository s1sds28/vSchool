import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FriendsList from './components/FriendsList'

import Friend from './components/Friend'

import Pet from './components/Pet'

import data from './data'

import './index.css'

function App() {
  const friend = data.map(item =>{
    return (
        <Friend
          name={item.name}
          age={item.age}
        />
    )
  })

  const pet = data.map(item => {
    return item.pets.map(arrPets => {
      return (
        <Pet
          name= {arrPets.name}
          breed= {arrPets.breed}
          />
      )
    })
  })

  const friendList = data.map(item => {
    return (
      <>
        <span className='friend-list-friend-card-container'>
          <Friend
            name={item.name}
            age={item.age}
          />
        </span>
      {item.pets.map(arrPets => {
        return (
          <span className='friend-list-pet-card-container'>
            <Pet
              name= {arrPets.name}
              breed= {arrPets.breed}
            />
          </span>
            )
          }
        )
      }
      </>

    )
  })
  
  return (
    <>
      <div className='friend-card-container'>
        <h1>Friends: </h1>
        { friend }
      </div>
      <div className='pet-card-container'>
        <h1>Pets: </h1>
        { pet }
      </div>
      <div className='friends-list-card-container'>
          <h1>Friends List</h1>
          { friendList }
      </div>
    </>
  )
}

export default App
