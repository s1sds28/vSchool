import React from 'react'

import { ThemeContext } from '../ThemeContext';

function Header(props){
    const {color} = React.useContext(ThemeContext)

    return (
        <header className={`header header-${color}`}>
            <ul id='bullet-points'>
                <li className='list-items'>Home</li>
                <li className='list-items'>About</li>
                <li className='list-items'>Contact</li>
            </ul>
        </header>
    )
}

export default Header;