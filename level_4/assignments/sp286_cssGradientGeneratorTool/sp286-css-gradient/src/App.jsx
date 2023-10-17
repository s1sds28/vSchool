import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GradientBox from './components/GradientBox'

function App() {

  const [info, setInfo] = useState({
    color1: '#000000',
    color2: "#000000",
    color3: "#000000",
    degree: 0, 
  })

  function handleChange(e){
    const { name, value } = e.target;
    setInfo((prevInfo => ({
      ...prevInfo,
      [name]: value
    })))
  }

  return (
    <>
      <h1>CSS Gradient Code Generator</h1>
      <div className='gradient--box--container'>
        <GradientBox>
          <div style={{background: `linear-gradient(${info.degree}deg, ${info.color1}, ${info.color2}, ${info.color3})`}}className='colored--box'>TEST</div>
            <textarea 
              className='colored--box--text'
              readOnly 
              value=
              {
                `background: linear-gradient(${info.degree}deg, ${info.color1}, ${info.color2}, ${info.color3});
                -moz-background: linear-gradient(${info.degree}deg, ${info.color1}, ${info.color2}, ${info.color3});
                -webkit: linear-gradient(${info.degree}deg, ${info.color1}, ${info.color2}, ${info.color3});`
              }
            />

        </GradientBox>

        <GradientBox>
          <h4>Options:</h4>
          <div class="grid-container">
              <div>
                  <label htmlFor="color1">Color 1: {info.color1}</label>
                  <input type="color" id="color1" name="color1" value={info.color1} onChange={handleChange} className="color-picker"/>
              </div>
              <div>
                  <label htmlFor="color2">Color 2: {info.color2}</label>
                  <input type="color" id="color2" name="color2" value={info.color2} onChange={handleChange} className="color-picker"/>
              </div>
              <div>
                  <label htmlFor="color3">Color 3: {info.color3}</label>
                  <input type="color" id="color3" name="color3" value={info.color3} onChange={handleChange} className="color-picker"/>
              </div>
              <div>
                <label htmlFor="degree">Degree {info.degree}</label>
                <input type='number' id="degree" name="degree" value={info.degree} onChange={handleChange} className='color-picker'/>
              </div>
          </div>
        </GradientBox>
      </div>

    </>
  )
}

export default App
