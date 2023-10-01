

import React, { useState, useRef } from 'react';

import song from './song.mp3'

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>
      <audio ref={audioRef} src={song} />
    </div>
  );
};

export default AudioPlayer;
