import { useState } from 'react'

import Buttons from './Buttons'
import SquaresGrid from './SquaresGrid'
import AudioPlayer from './AudioPlayer'

import './App.css'

function App() {
  const [squares, setSquares] = useState(["white", "white", "white", "white"])


  const colors = ["white", "black", "yellow", "green"]

  const randomInt = () => Math.floor(Math.random() * 4)

  function smallTimeDJ() {
    setSquares((prevState) => 
      prevState.map(() => prevState[0]!=="white" ? "white" : "black"))
  }

  function partyDJ() {
    setSquares((prevState) => ["purple", "purple", `${prevState[2]}`, `${prevState[3]}`]
    )
  }
  
  function leftBlue() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[2] = "blue"
      return newSquares
    })
  }
  function rightBlue() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[3] = "blue"
      return newSquares
    })
  }

  function topLeft() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[0] = colors[randomInt()]
      return newSquares
    })

  }

  function topRight() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[1] = colors[randomInt()]
      return newSquares
    })
  }
  function bottonLeft() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[2] = colors[randomInt()]
      return newSquares
    })
  }
  function bottomRight() {
    setSquares((prevState) => {
      const newSquares = [...prevState]
      newSquares[3] = colors[randomInt()]
      return newSquares
    })
  }

  function oneOfTheGreats() {
    console.log("okay")
  }
  return (
    <>
      <SquaresGrid squares={squares}/>
      <br></br>
      <Buttons
        smallTimeDJ={smallTimeDJ}
        partyDJ={partyDJ}
        leftBlue={leftBlue}
        rightBlue={rightBlue}
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottonLeft}
        bottomRight={bottomRight}
        oneOfTheGreats={oneOfTheGreats}
      />
      <AudioPlayer />
    </>
  )
}

export default App


