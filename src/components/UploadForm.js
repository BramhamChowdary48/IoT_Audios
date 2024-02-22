import React, { useState } from 'react';

function UploadForm() {
  const [audioFiles, setAudioFiles] = useState([]);

  const handleFileChange = ({ target: { files } }) => {
    const newAudioFiles = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setAudioFiles([...audioFiles, ...newAudioFiles]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
  };

  return (
    <div>
      <h2>Upload Audio Files</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="audio/*" multiple onChange={handleFileChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UploadForm;