# DynamicScriptRunner
A full-stack project with a sleek UI, enabling file uploads to S3, storing inputs and paths in DynamoDB, triggering VM scripts, and automatic VM termination for seamless workflow automation.

## System Components 
 Frontend Component :
 
a : Responsive UI utilizes TailwindCSS , React.js with a textinput and file input

Backend Component : 

   a : Upload the inputFile to S3 from the browser directly

   b : Save the inputs and filePath to DynamoDB FileTable via api gateway (AWS Cognito) and lambda function

   c : Upon file upload to S3 and DynamoDb trigger a scriptrun in EC2 via DynamoDB event

     c.1
