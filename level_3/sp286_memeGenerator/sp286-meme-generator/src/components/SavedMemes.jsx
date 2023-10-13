import React from "react";

function SavedMemes(props){
    console.log("props", props)
    const { savedMemes } = props

    const allSavedMemes = savedMemes.map(meme => {
        console.log({meme})
        return (
            <>
                <div key={meme.id}>{meme.topText}</div>
                    <p>{`topText: ${meme.topText} bottomText: ${meme.bottomText}`}</p>
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