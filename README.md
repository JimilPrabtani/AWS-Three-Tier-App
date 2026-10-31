# AWS Three-Tier App

Website delivery using AWS services with a three-tier architecture.

## Overview

This project demonstrates a scalable, production-ready web application deployed on AWS using a three-tier architecture. The architecture separates concerns into presentation, application logic, and data layers for improved maintainability, scalability, and security.

## Architecture

The three-tier architecture consists of:

- **Presentation Tier**: Frontend web interface served via AWS CloudFront and S3
- **Application Tier**: Backend services running on AWS EC2 or Lambda
- **Data Tier**: Database layer using AWS RDS or DynamoDB

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Cloud Platform**: Amazon Web Services (AWS)
- **Services**: CloudFront, S3, EC2, RDS, and more

## Features

- Scalable web application architecture
- Separation of concerns across three tiers
- AWS cloud-native deployment
- Content delivery optimization
- Database persistence layer

## Project Structure

```
AWS-Three-Tier-App/
├── README.md
├── CloudFront-Project-01/     # CloudFront and S3 website delivery example
├── frontend/                   # Presentation tier (HTML, CSS, JavaScript)
├── backend/                    # Application tier (API and business logic)
├── database/                   # Data tier configuration
└── infrastructure/             # AWS infrastructure as code
```

## Getting Started

### Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured with your credentials
- Node.js (if using Node.js for backend)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JimilPrabtani/AWS-Three-Tier-App.git
cd AWS-Three-Tier-App
```

2. Configure AWS credentials:
```bash
aws configure
```

3. Deploy infrastructure (specific commands depend on your setup):
```bash
# If using CloudFormation or Terraform
./deploy.sh
```

## Deployment

The application is deployed using AWS services:

1. **Frontend**: Static files hosted on S3 and distributed via CloudFront
2. **Backend**: Application servers running on EC2 or Lambda
3. **Database**: Managed database service (RDS/DynamoDB)

For detailed deployment instructions, refer to the infrastructure documentation.

## Usage

[Add specific usage instructions for your application]

## Configuration

Environment variables and configuration should be set in:
- `.env` files for local development
- AWS Systems Manager Parameter Store or Secrets Manager for production

## Architecture Benefits

- **Scalability**: Each tier can be scaled independently
- **Security**: Network isolation between tiers using security groups
- **Maintainability**: Clear separation of concerns
- **Availability**: Multi-AZ deployment support
- **Performance**: CDN for static content delivery

## AWS Services Used

- **Amazon S3**: Static content storage
- **Amazon CloudFront**: Content Delivery Network (CDN)
- **Amazon EC2**: Compute resources
- **Amazon RDS**: Relational database
- **AWS Security Groups**: Network security
- **AWS IAM**: Identity and access management

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

[Specify your license here - e.g., MIT, Apache 2.0, etc.]

## Contact

**Author:** Jimil Prabtani  
**Email:** jimilprabtani0816@gmail.com

For questions or support, please feel free to reach out.

## Resources

- [AWS Architecture Center](https://aws.amazon.com/architecture/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Three-Tier Architecture on AWS](https://aws.amazon.com/blogs/architecture/)

---

**Note**: This is a comprehensive README template. Please update sections with your specific project details, actual directory structures, deployment steps, and configuration examples based on your implementation.

## Project Walkthrough: Building a Three-Tier Web Application

This project demonstrates how to build and connect a three-tier web application using AWS services. The project separates the presentation, logic, and data layers to provide a clear, scalable architecture.

### Project Goals and Learning Objectives

The goal of this project was to build a working three-tier web application and gain hands-on experience with AWS storage, content delivery, serverless application logic, APIs, and databases.

### Delivering the Website Through CloudFront

#### Presentation Tier Architecture

The presentation tier uses an Amazon S3 bucket to store the website files. Amazon CloudFront delivers those static files to users through a globally distributed content delivery network.

![Delivering the Website Through CloudFront](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_3a4b5c6d)

#### Accessing the Delivered Website

The website was accessed through the CloudFront distribution URL after the frontend files were uploaded to Amazon S3.

### Building Serverless Application Logic

#### Logic Tier Architecture

The logic tier uses an AWS Lambda function to process requests from the API. The function retrieves user data from the database when it receives a request containing a user ID.

![Building Serverless Application Logic](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_6a7b8c9d)

#### Retrieving Data with Lambda

The Lambda function looks up a user by ID in the user table and returns the matching data to the API Gateway endpoint.

### Creating the DynamoDB Data Layer

#### Data Tier Architecture

The data tier uses Amazon DynamoDB to store user information. DynamoDB provides a managed, highly available NoSQL database for the application.

#### DynamoDB Table Design

The user table uses a partition key based on the user ID. This key enables efficient lookups when the Lambda function retrieves a specific user.

![Creating the DynamoDB Data Layer](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_u1v2w3x4)

### Connecting the Application Tiers

#### Integration Strategy

After setting up the three layers, the `script.js` and `index.html` files were updated to send requests to the API Gateway endpoint and display the returned user data in the website.

![Connecting the Application Tiers](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_a112c3d5)

#### Testing API Responses

The first website test did not display the user data. The issue was caused by the API URL not being configured in `script.js`.

#### Diagnosing and Fixing the CloudFront Error

The CloudFront-distributed website was still using an older version of the JavaScript file without the API Gateway URL. The API URL was added to the `fetch` request in `script.js`, and the updated file was uploaded to the S3 bucket.

### Troubleshooting and Validating the Full Web App

#### End-to-End Validation

The CloudFront website was tested again after the JavaScript update to verify that the frontend could communicate with the backend API and retrieve data from DynamoDB.

![Troubleshooting and Validating the Full Web App](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_a1b2c3d5)

#### Diagnosing the Browser Error

A second error occurred because of the browser's CORS policy. By default, API Gateway did not allow requests from the CloudFront website origin.

#### Resolving CORS in API Gateway

CORS was enabled for the `/users` resource in the API Gateway dashboard so that requests from the CloudFront website could reach the API.

![Resolving CORS in the API](https://nextwork.ai/affectionate_green_mysterious_penguin/uploads/f10f5983-0a15-5628-94b2-1cc37b19cb8c_1qthryj2)

#### Updating Lambda for CORS

The Lambda response was also updated to include the required CORS headers. This allowed the browser to accept the user data returned through API Gateway.

#### Verifying the Completed Connection

The complete connection was verified by searching for a user on the CloudFront website and confirming that the user data was retrieved from DynamoDB through Lambda and API Gateway.

### Services and Concepts Learned

The project used the following AWS services:

- Amazon S3 for static website storage
- Amazon CloudFront for content delivery
- Amazon API Gateway for the application API
- AWS Lambda for serverless business logic
- Amazon DynamoDB for user data storage

Key concepts practiced included designing a three-tier web application, writing Lambda functions, connecting frontend code to an API, configuring a CDN, enabling CORS, and storing and retrieving data from DynamoDB.

### Project Experience and Reflection

The project took approximately one hour to complete. It provided hands-on practice with AWS services and demonstrated how the three application tiers work together in a complete web application.
