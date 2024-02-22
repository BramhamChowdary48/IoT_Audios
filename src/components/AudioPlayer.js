import React, { useState, useEffect } from 'react';

function AudioPlayer() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [audioPlayer, setAudioPlayer] = useState(null);

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

  useEffect(() => {
    if (audioPlayer && audioFiles.length > 0 && currentAudioIndex >= 0 && currentAudioIndex < audioFiles.length) {
      audioPlayer.src = audioFiles[currentAudioIndex].url;
      audioPlayer.currentTime = JSON.parse(localStorage.getItem('currentAudioTime')) || 0;
      audioPlayer.play();
    }
  }, [audioPlayer, audioFiles, currentAudioIndex]);

  useEffect(() => {
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
    localStorage.setItem('currentAudioIndex', JSON.stringify(currentAudioIndex));
  }, [audioFiles, currentAudioIndex]);

  const handleAudioEnded = () => {
    if (currentAudioIndex < audioFiles.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    } else {
      setCurrentAudioIndex(0);
    }
  };

  const handleAudioTimeUpdate = () => {
    localStorage.setItem('currentAudioTime', JSON.stringify(audioPlayer.currentTime));
  };

  return (
    <audio
      ref={(audio) => setAudioPlayer(audio)}
      onEnded={handleAudioEnded}
      onTimeUpdate={handleAudioTimeUpdate}
    />
  );
}

export default AudioPlayer;