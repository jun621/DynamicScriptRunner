# DynamicScriptRunner
A full-stack project with a sleek UI, enabling file uploads to S3, storing inputs and paths in DynamoDB, triggering VM scripts, and automatic VM termination for seamless workflow automation.

## System Components 
 Frontend Component :
 
a : Responsive UI utilizes TailwindCSS , React.js with a textinput and file input

Backend Component : 

   a : Upload the inputFile to S3 from the browser directly

   b : Save the inputs and filePath to DynamoDB FileTable via api gateway (AWS Cognito) and lambda function

   c : Upon file upload to S3 and DynamoDb trigger a scriptrun in EC2 via DynamoDB event
   
   c.1 : Download the script from S3 to VM (upload the script to S3 via CDK) 

   c.2 : Get the inputs from DynamoDB fileTable via auto-generated id 

   c.3 : Download the inputFile from S3 to VM 

   c.4 : Append retireved inputText to inputFile and save 

   c.5 : Upload the outputFile to S3 

   c.6 : Save the outputs and S3 filePath to DynamoDB 

   d   : Upon successful execution terminate VM automatically 
   
   
