import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResearchPage from './components/ResearchPage';

import { StockContextProvider } from './components/StockContext';

function App() {
  return (
    <Router>
      <header>
        <nav style={{ margin: 10}}>
          <Link to="/" style={{ padding: 5}}>Home</Link>
          <Link to="/about" style={{ padding: 5 }}>About</Link>
          <Link to="/research" style={{ padding: 5 }}>Research</Link>
        </nav>
      </header>
      <main>
      <StockContextProvider>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/research" element={ <ResearchPage/> } />
        </Routes>
      </StockContextProvider>
      </main>
    </Router>
  );
}


export default App
