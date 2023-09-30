import { useState } from 'react'
import './App.css'

function App() {
  const [squares, setSquares] = useState(["white", "white", "white", "white"])


  const colors = ["white", "black", "yellow", "green"]

  const randomInt = () => Math.floor(Math.random() * 4)


  let squareElements = squares.map((square, index)=> (
    <div key={index} className={`${square}`}></div>
  ))

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
      <section className='squareGrid'>
        {squareElements}
      </section>
      <br></br>
      <button onClick={smallTimeDJ}>Small Time DJ</button>
      <button onClick={partyDJ}>Party DJ</button>
      <button onClick={leftBlue}>left Blue</button>
      <button onClick={rightBlue}>right Blue</button>


      <button onClick={topLeft}>Top left</button>
      <button onClick={topRight}>Top right</button>
      <button onClick={bottonLeft}>Bottom Left</button>
      <button onClick={bottomRight}>Bottom Right</button>

      <button onClick={oneOfTheGreats}>One of the Greats</button>
    </>
  )
}

export default App


