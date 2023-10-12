// MainContent.js is 
import React from 'react';

function NewMeme(props) {

    const { meme, allMemes, getMemeImage, handleChange, saveMeme } = props

  return (
    <>
      <div className="form">
        <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    refresh meme image
                </button>

            </div>

      </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      <button className="save--button" onClick={saveMeme}>Save meme</button>
    </>
  );
}

export default NewMeme;
