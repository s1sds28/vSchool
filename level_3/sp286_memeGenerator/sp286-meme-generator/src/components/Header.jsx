import React from 'react'

import './Header.css'

import myImg from '../images/face.jpg'

const Header = () => {
    return (
        <header className='header'>
                <img className='header--image' src= {myImg} />
                <h1 className='header--title'>Meme Generator</h1>

            <h5 className='header--project'>React Course - Project 3</h5>

        </header>
    )
}








export default Header;