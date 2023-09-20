import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Card'

import data from './data'

export default function App() {
  const cards = data.map(item =>{
    return (
      <div>
        <Card
          place={item.place}
          price={item.price}
          timeToGo={item.timeToGo}
        />
      </div>
    )
  })

  return (
    <div>
      { cards }
    </div>
  )
}


