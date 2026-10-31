## Introducing Today's Project!

In this project, I am going to a Develop a serverless Lambda function. Configure an API with API Gateway. Connect Lambda with API Gateway and Write JSON documentation for your API.

### ✍️ What are we doing in this step?

In this step, I am going to create a lambda function that is going to fetch the data from the database.

### Tools and concepts

Services I used were API gateway and Lambda Function. Key concepts I learnt include Lambda functions and API gateway.

### Project reflection

This project took me approximately 1 hour.

I chose this project today because I wanted to practise API gateway and lambda function on AWS.

## Lambda functions

AWS Lambda is a service that let us run code without having to manage a servers or computers.

The code I added to my function will looks for specific user data based on a 'userId' and return that data.  If there's an error e.g. the userId doesn't exist in the database, it returns an error message.

### ✍️ What are we doing in this step?

In this step, I will be creating an API that carries requests from user's browser to your Lambda function.

![Lambda functions](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_a1b2c3d5)

## API Gateway

APIs are application programming interface by which different software systems talk to each other. There are different types of APIs, like REST, Graph, HTTP and Websocket. I an going to use REST api which is Representational State Transfer which is a type of API that uses HTTP methods to interact with resources (more on HTTP methods later in this step).

Amazon API Gateway is front door for lambda function. I'm using API Gateway in this project because directly exposing the lambda functions to user requests isn't best practise, because Lambda doesn't have built in security or API management features. API Gateway brings in authentication and authorization features, and advanced API management capabilities (e.g. request routing) that make your app more efficient.

When a user makes a request and it goes to the API gateway and processes it and forewards it to lambda function.

![API Gateway](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_m3n4o5p6)

### ✍️ What are we doing in this step?

In this step, I am going to create resource because Resources are like the different sections or pages of your API. They help organize how your API handles different requests.

## API Resources and Methods

An API is made up of resources, which are individual endpoint within the API that handle different parts of its functionality.

![API Resources and Methods](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_u1v2w3x4)

### ✍️ What are we doing in this step?

In this step, I will create an GET method in the api because this function is going to help us get the user data on the website, and connect it to the lambda function.

Each resource consists of methods, which are the actions you can perform on a resource and it consists of GET, POST, PUT, DELETE etc.

I created a HTTP GET method which helps get the user data from the Database when the request is made.

### ✍️ What are we doing in this step?

In this step, I will deploy the API. because Deploying makes our API accessible through a public endpoint, so we can actually start using it.

![API Resources and Methods](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_c9d0e1f2)

## API Deployment

When you deploy an API, you deploy it to a specific stage. A stage is a snap shot of  everytime one deploys the api. I deployed to New stage and named it as prod = production.

To visit my API, I got error saying missing authentication token. The API displayed an error because we haven't created database and linked it to the API and lamba function.

![API Deployment](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_3ethryj2)

## API Documentation

For my project's extension, I am writing API documentation because API documentation is a detailed description of an API's functionality, including its endpoints (e.g. /users), methods (e.g. GET), parameters (e.g. userId), and responses (e.g. errors or success response).

Once I prepared my documentation, I can publish it to prod stage.

My published and downloaded documentation showed me other text in this file are documentation that API Gateway has automatically generated for me! I can see metadata like API's version and title, resources (/users), and methods (like GET) I can perform on these endpoints.

![API Documentation](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/aws-compute-api_z9a0b1c2)
