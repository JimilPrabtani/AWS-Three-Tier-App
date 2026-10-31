## Introducing Today's Project!

In this project, I will be creating a Dynamo Database and which we are going to use to store and retrieve the user data, using lambda function.

### ✍️ What are we doing in this step?

In this step, I am going to create a DymanoDB to store the user data.

### Tools and concepts

Services I used were Lambda, DynamoDB and IAM. Key concepts I learnt include Lambda functions, was that it is used to make the processes faster and easier without having the headache of managing any computers or servers. DynamoDB to store the userdata, and IAM to give the lambda function more granular and precise permission of only GetItem from the Database.

### Project reflection

This project took me approximately 60 mins.

...

## Project Setup

To set up my project, I created a database using AWS console, to be specific I create a DymanoDB which is a fast and efficient way of storing and sorting the data. The partition key is a unique Id which differentiates the different data.

### ✍️ What are we doing in this step?

In this step, I will create a  sample user in side the database.

In my DynamoDB table, I added a test user for the testing purpose. DynamoDB is schemeless, which means that you don't have to define data in any field or columns.

### ✍️ What are we doing in this step?

In this step, I will create a lambda function. because we are going to user this function to  retrieve the user data from the database.

![Project Setup](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_a112c3d5)

### AWS Lambda

AWS Lambda is a service that lets you run code without needing to manage any servers/computers. I'm using Lambda in this project to process that user data.

## AWS Lambda Function

My Lambda function has an execution role, which is means what the function is allowed to do, e.g. accessing other AWS services like DynamoDB.. By default, the role grants Lambda with basic permissions for writing logs to CloudWatch.

### ✍️ What are we doing in this step?

In this step, I will be going to write the code for the lambda function because without this code the function wont function.

My Lambda function will take a userId as input, grabs the corresponding data from the UserData table, and returns it to us.

The code uses AWS SDK, which is AWS Software Development Kit and it is a set of tools that lets developers build apps that interact with AWS. My code uses SDK to interact with the DymanoDB that I created.

![AWS Lambda Function](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_a1b2c3d5)

### ✍️ What are we doing in this step?

In this step, I am going to test the code to get the user data from the database because if I don't test and directly deploy it and it has error in it the whole flow will break.

## Function Testing

To test whether my Lambda function works, I. have to go to the test section and add the userId: 1 in the event JSON to get the test users data. The test displayed a 'success' because the function is working properly but the function's response was actually an error of permission denied because we haven't given proper permission to the lambda function to read the DymanoDB

### ✍️ What are we doing in this step?

In this step, I will add a role AmazonDynamoDBReadOnlyAccess to the policy to give the permission to lambda function to read the database.

### 🤔 Which policy should you pick?

I am going to pick AmazonDynamoDBReadOnlyAccess policy, because it is the appropriate for this scenario.

![Function Testing](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_u1v2w3x4)

## Function Permissions

To resolve the Access Denied error we can add a permission policy that give us the permissions we're lacking!

There were four DynamoDB permission policies I could choose from, but I didn't pick AWSLambdaDynamoDBExecutionRole and AWSLambdaInvocation-DynamoDB because these role donot align with just allowing the read only permission to the lambda function.

AmazonDynamoDBReadOnlyAccess was the right choice because it has the Get Item function in it.

### ✍️ What are we doing in this step?

In this step, I will re run the function and check if the function is working or not.

![Function Permissions](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_3ethryj2)

## Final Testing and Reflection

To validate my new permission settings, I tested the code again. The results were that I got the user data from the database.

Web apps are a popular use case of using Lambda and DynamoDB. For example, I could use it help customers to find products, get products, its information or see their product history by fetching data from the DynamoDB. Lambda can help social media apps fetch user profiles or automatically retrieve all content (e.g. videos or images) linked with a profile. Lambda can help news sites or blogs fetch articles based on user queries.

![Final Testing and Reflection](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_p9thryj2)

## Enhancing Security

For my project extension, I challenged myself to make the function calling more secure by just allowing the lambda function to access only the user data table.

To create the permission policy, I used. used allow get item to retrieve the data from the database by adding more granular access to the table in the permission.

When updating a Lambda function's permission policies, you could risk of give the function of assigning the role of DynamoDBReadOnlyAccess. I validated that my Lambda function still works by adding more granular permission by creating an inline permission of only get item.

![Enahancing Security](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-lambda_1qthryj2)
