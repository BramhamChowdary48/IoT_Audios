import React, { useState, useEffect } from 'react';

function NowPlaying() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  useEffect(() => {
    const storedAudioFiles = JSON.parse(localStorage.getItem('audioFiles'));
    if (storedAudioFiles) {
      setAudioFiles(storedAudioFiles);
    }
    const storedCurrentAudioIndex = JSON.parse(localStorage.getItem('currentAudioIndex'));
    if (storedCurrentAudioIndex !== null) {
      setCurrentAudioIndex(storedCurrentAudioIndex);
    }
  }, []);

  return (
    <div>
      <h2>Now Playing</h2>
      <h3>{audioFiles[currentAudioIndex].name}</h3>
    </div>
  );
}

export default NowPlaying;