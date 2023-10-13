import React, {useEffect} from 'react'



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
                <button>Save</button>
                <button onClick={() => setToggle(prev => !prev)}>Cancel</button>
            </form>
        )}
    </>

    )
}