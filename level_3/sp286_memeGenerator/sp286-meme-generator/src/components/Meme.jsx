import React, {useEffect} from 'react'

import './Components.css'

export default function Meme(props){
    
    const { meme, handleDelete, handleEdit } = props

    const [toggle, setToggle] = React.useState(true)

    const [edit, setEdit] = React.useState({
        topText: meme.topText,
        bottomText: meme.bottomText,
        randomImage: meme.randomImage
    })

    // useEffect(() => {
    //     setEdit({
    //         topText,
    //         bottomText,
    //         randomImage
    //     })
    //   }, [toggle])

    function handleChange(event) {
        const {name, value} = event.target
        setEdit(prevEdit => {
            return {
                ...prevEdit,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        handleEdit(meme.id, edit)
        console.log("handle Submit")

        setToggle(prev => !prev)
    }


    return (
        <>   
        {toggle ? (      
        <div key={meme.id} className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom--edit">{meme.bottomText}</h2>
            <br/>
            <button
            className='meme--save--button'
            onClick={() => setToggle(prevState => !prevState)}
            >Edit</button>
            <br/>
            <button
            className='meme--edit--button' 
            onClick={() => handleDelete(meme.id)}
            >Delete</button>
        </div>
        ) : ( 
            <form onSubmit={handleSubmit}>
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <input 
                    className="meme--edit top"
                    value = {edit.topText}
                    name="topText"
                    onChange={handleChange}
                    placeholder={edit.topText}
                    />
                <input 
                    className="meme--edit bottom"
                    value = {edit.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                    placeholder={edit.bottomText}
                    />                
                </div>
                
                <button 
                    className='meme--save--button'
                >Save</button>
                <br/>
                <button 
                className='meme--edit--button' 
                onClick={() => setToggle(prev => !prev)}
                >Cancel</button>
            </form>
        )}
    </>

    )
}