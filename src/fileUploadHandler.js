/* Backend component of the function which takes care of file upload
It contains the logic to upload files to S3 using AWS SDK, and it checks the file
size before uploading to ensure it does not exceed the maximum allowed size.
*/

const AWS = require('aws-sdk');
const MAX_FILE_SIZE = 10 * 1024 * 1024; // max filesize is 10MB


// Create an instance of the S3 service
const s3 = new AWS.S3();

// Handle the file upload to S3
const handleFileUpload = async (file, bucketName) => {
  const fileName = file.originalname;
  const fileSize = file.size;
  // check fileSize to the maximum fileSize
  if (fileSize > MAX_FILE_SIZE) {
    throw new Error('You have exceeded the max fileSize');
  }
  const s3Params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file.buffer,
  };

  try {
    // Upload the file to S3
    const uploadResult = await s3.putObject(s3Params).promise();
    console.log('File uploaded successfully!', uploadResult);

    // Return the S3 file path or any other relevant information
    return uploadResult;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

module.exports = { handleFileUpload };
