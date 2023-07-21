# DynamicScriptRunner WIP
A full-stack project with a sleek UI, enabling file uploads to S3, storing inputs and paths in DynamoDB, triggering VM scripts, and automatic VM termination for seamless workflow automation.
# System Components 

## Frontend Component 

1. Implement a responsive web UI utilizing ReactJS with a text input and file input

## Backend Component 

2. Upload the input file to S3 from thr browser directly

3. Save the inputs and S3 paths to DynamoDB via AWS cognito (Api gateway authorizer) and lambda function (AWS SDK JavaScript V3)

4. Upon file upload in S3 and added to to DynamoDB, trigger a script run in EC2 instance via DynamoDB event

5. Download the script from S3 to VM (upload the scripts to S3 via AWS CDK)

6. Run the script in VM

   6.1 Get the input from DynamoDB via autogenrated nanoid 

   6.2 Download the inputfile from S3 to VM 

   6.3 Append the retrieved input text to the downloaded input file and save 

   6.4 Upload the output file to S3 

   6.5 Save the outputs and S3 path in DynamoDB 

7. Terminate the VM automatically 
