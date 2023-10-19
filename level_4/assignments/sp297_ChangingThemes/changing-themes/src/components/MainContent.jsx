import React from "react";
import { ThemeContext } from "../ThemeContext";

function MainContent(props){

    const { color, toggleTheme } = React.useContext(ThemeContext)

    return  (
        <>
            <div className={`main-content main-content-${color}`}>
                <p>Click the button to toggle the theme</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
        )
}

export default MainContent;