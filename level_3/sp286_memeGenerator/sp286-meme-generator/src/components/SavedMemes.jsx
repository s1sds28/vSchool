import React from "react";

import './Components.css';

function SavedMemes(props){
    const { savedMemes, handleDelete, handleEdit } = props

    const { toggle, setToggle} = React.useState(true)

    const { edit, setEdit } = React.useState({
        topText,
        bottomText,

    })

    useEffect(() => {
        setEdit({
            topText,
            bottomText,
        })
    }, [toggle])

    function handleChange(event) {
        const {topText, bottomText} = event.target
        setEdit(prevEdit => {
            return {
                ...prevEdit,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        handleEdit(id, edit)
        setToggle(prev => !prev)
    }

    const allSavedMemes = savedMemes.map(meme => {
        console.log({meme})
        return (
            <>   
                {toggle ? (      
                <div key={meme.id} className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    <br/>
                    <button onClick={() => setToggle(prevState => !prevState)}>Edit</button>
                    <button onClick={() => handleDelete(meme.id)}>Delete</button>
                </div>
                ) : ( 
                    <form onSubmit={handleSubmit}>
                        <input 
                            value = {edit.topText}
                            name="topText"
                            onChange={handleChange}
                        />
                        <input
                            value = {edit.bottomText}
                            name="bottomText"
                            onChange={handleChange}
                        />
                    </form>
                )}
            </>
        )
    })

    return (
        <div>
            { allSavedMemes }
        </div>

    )
}

export default SavedMemes;