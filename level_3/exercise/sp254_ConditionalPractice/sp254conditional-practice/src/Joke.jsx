import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevState => !prevState)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            
            <p>{isShown && props.punchline}</p>
            <button onClick={toggle}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            
            <hr />
        </div>
    )
}