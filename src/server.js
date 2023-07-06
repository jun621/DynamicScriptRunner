// entry point for the backend server


const express = require('express');
const multer = require('multer');
const { handleFileUpload } = require('./fileUploadHandler');

const app = express();
const upload = multer();

// Define a route handler for file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // add a console log argument
     console.log('req.file:', req.file);

    // Call handleFileUpload function with the file data and bucket name
    const result = await handleFileUpload(req.file, 'fullstackjun');
    console.log('File uploaded:', result);

    // Perform additional actions, such as saving file information to DynamoDB

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
