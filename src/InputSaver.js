// Lambda function for saving input data and S3 file paths into DynamoDB Filetable via API authorizer.
// Extracts input_text and input_file_path from the request payload, generates a unique ID, and saves the item to DynamoDB.
const AWS = require('aws-sdk');
const { nanoid } = require('nanoid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    // Extract input data from request payload
    const { input_text, input_file_path } = JSON.parse(event.body);

    // Generate a unique ID for the item
    const id = nanoid(22);

    // Define the DynamoDB item
    const params = {
      TableName: 'Filetable',
      Item: {
        id,
        input_text,
        input_file_path,
      },
    };


    // Save the item to DynamoDB
    await dynamodb.put(params).promise();

    // Return a successful response
    const response = {
      statusCode: 200,
      body: JSON.stringify('Data saved to DynamoDB'),
    };

    return response;

  } catch (error) {

    // Return an error response if something goes wrong
    console.error(error);
    const response = {

      statusCode: 500,
      body: JSON.stringify('An error occurred'),

    };

    return response;
  }
};
