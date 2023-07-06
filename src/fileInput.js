// frontend  component of the responsive UI
import React, { useState } from 'react';
import AWS from 'aws-sdk';
import axios from 'axios';

function NewFileInput() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChooseFile = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      // Configure AWS credentials
      AWS.config.update({
        accessKeyId: 'AKIAR4UEPZKHMGLQENAH',
        secretAccessKey: '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',
        region: 'us-west-1',
      });

      // Create an instance of the S3 service
      const s3 = new AWS.S3();

      // Prepare the S3 bucket and file information
      const bucketName = 'fullstackjun';
      const fileName = selectedFile.name;
      const s3Params = {
        Bucket: bucketName,
        Key: `${fileName}.txt`,
        Body: selectedFile,
      };

      try {
        // Upload the file to S3
        await s3.putObject(s3Params).promise();
        console.log('File uploaded to S3 successfully!');

        // Send the POST request to the server
        const formData = new FormData();
        formData.append('file', selectedFile);
        await axios.post('http://localhost:5000/upload', formData);
        console.log('File uploaded to server successfully!');

        // Perform additional actions after file upload
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      <button onClick={handleChooseFile}>Choose File</button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default NewFileInput;





