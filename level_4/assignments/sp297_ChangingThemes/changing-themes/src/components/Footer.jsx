import React from 'react'

import '../App.css'
import { ThemeContext } from '../ThemeContext';

function Footer(props){

    const { color } = React.useContext(ThemeContext)

    return (
        <footer className={`footer footer-${color}`}>My Awesome Footer</footer>
    )
}

export default Footer;