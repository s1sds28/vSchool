import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';

import Home from './components/Home';

import Services from './components/Services';







function App() {

  return (
    <Router>
      <header>
        <nav style={{ margin: 10}}>
          <Link to="/" style={{ padding: 5}}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="/services" style={{ padding: 5 }}>
            Services
          </Link>
        </nav>
      </header>
        <main>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/services" element={ <Services/> } />
          </Routes>
        </main>

      <footer>
        <p>My Awesome Footer</p>
      </footer>

    </Router>

  )
}

export default App
