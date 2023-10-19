import React from 'react'

function Header(props){
    return (
        <header className='header'>
            <ul id='bullet-points'>
                <li className='list-items'>Home</li>
                <li className='list-items'>About</li>
                <li className='list-items'>Contact</li>
            </ul>
        </header>
    )
}

export default Header;