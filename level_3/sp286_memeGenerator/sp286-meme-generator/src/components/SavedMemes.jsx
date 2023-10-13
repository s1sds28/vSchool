import React from "react";

function SavedMemes(props){

    const { savedMemes } = props

    const allSavedMemes = savedMemes.map(meme => <p>meme</p>)

    return (
        <div>
            { allSavedMemes }
        </div>

    )
}

export default SavedMemes;