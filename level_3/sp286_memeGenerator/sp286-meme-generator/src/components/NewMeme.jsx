import React from "react";

function NewMeme(props){
    return (
        <>
        {props.topText}
        {props.bottomText}
        {props.randomImage}
        </>
    )
}

export default NewMeme;