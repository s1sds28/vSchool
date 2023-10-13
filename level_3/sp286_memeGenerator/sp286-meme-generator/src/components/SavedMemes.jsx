import React from "react";

import Meme from "./Meme";

import './Components.css';

function SavedMemes(props){
    const { savedMemes, handleDelete, handleEdit } = props


    const allSavedMemes = savedMemes.map(meme => {
        return (
            <Meme 
            meme={meme}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />
        )
    })

    return (
        <div>
            { allSavedMemes }
        </div>

    )
}

export default SavedMemes;