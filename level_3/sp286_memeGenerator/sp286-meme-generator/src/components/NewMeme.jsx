import React from "react";

function NewMeme(props){
    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={props.getMemeImage}
                >
                    Get a new meme image
                </button>
                <img src={props.memeImage}/>
            </form>
            {props.topText}
            {props.bottomText}
            {props.randomImage}
        </main>

    )
}

export default NewMeme;