import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Header from './Header.jsx'
import './Header.css'


import Footer from './Footer.jsx'
import './Footer.css'

import Card from './Card.jsx'
import './Card.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
