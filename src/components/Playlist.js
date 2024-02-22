import React, { useState, useEffect } from 'react';

function Playlist() {
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    const storedAudioFiles = JSON.parse(localStorage.getItem('audioFiles'));
    if (storedAudioFiles) {
      setAudioFiles(storedAudioFiles);
    }
  }, []);

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {audioFiles.map((audioFile, index) => (
          <li key={index}>{audioFile.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;