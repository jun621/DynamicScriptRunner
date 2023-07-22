/* Frontend : ResponsiveUI component with text input and file input functionalities.
Users can enter a changeable string, choose and upload a file to S3, and submit the form.
Handles form submission logic.
*/

import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import axios from 'axios';

function ResponsiveUI() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputText, setInputText] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChooseFile = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        // Upload the file to S3 using AWS Amplify
        const fileName = selectedFile.name;
        await Storage.put(fileName, selectedFile);
        console.log('File uploaded to S3 successfully!');

        // Send the POST request to the server
        const formData = new FormData();
        formData.append('file', selectedFile);
        await axios.post('http://localhost:5000/upload', formData);
        console.log('File uploaded to the server successfully!');

        // Perform additional actions after file upload
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic here for handling the form submission
    console.log('Input Text:', inputText);
  };

  return (
    <div>
      {/* Adding text field where users can enter a changeable string */}
      <input
        type="text"
        name="textInput"
        placeholder="[input text]"
        value={inputText}
        onChange={handleTextChange}
      />
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button onClick={handleChooseFile}>Choose File</button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleFileUpload}>Upload File</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ResponsiveUI;
