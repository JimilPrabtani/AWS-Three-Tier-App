# AWS Three-Tier App

![Project Cover](https://nextwork.ai/covers/screenshot_331486fc2afe4198878eaee9e0c06040.png)

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
- **AWS Lambda**: Serverless application logic
- **Amazon API Gateway**: HTTP API fronting Lambda
- **Amazon DynamoDB**: NoSQL data layer for user information

## Project Implementation Walkthrough

Based on `3tier app.md` — end-to-end build notes for this project.

### 1. Delivering the Website Through CloudFront (Presentation Tier)

For the presentation tier, set up an S3 storage bucket and upload the website files, so that CloudFront can fetch the static files from the bucket.

Accessed the delivered website via the CloudFront URL.

### 2. Building Serverless Application Logic (Logic Tier)

For the logic tier, set up a Lambda function and wrote its code, so that users can retrieve their data from the database using a GET request.

The Lambda function retrieves data by using the user ID from the user table.

### 3. Creating the DynamoDB Data Layer (Data Tier)

For the data tier, set up the database to store user information.

DynamoDB table uses a partition key (user ID) for fast, efficient lookups.

### 4. Connecting the Application Tiers

**Integration strategy:**
Once all three layers are set up, update `script.js` and `index.html` to make a request to the API Gateway endpoint and display the returned data.

**Testing API responses:**
Initial test showed no user data on the website.

**Root cause:**
The API URL had not been updated in the `script.js` file, and the S3 file was still the old version without the API URL. This also caused the CloudFront distribution to error.

**Fix:**
Updated the API URI in the `fetch()` call in `script.js`, then re-uploaded it to S3 to replace the old file.

### 5. Troubleshooting and Validating the Full Web App

**End-to-end validation:**
Retested the CloudFront site after the script update.

**Second error — CORS:**
Ran into a CORS policy error, because API Gateway does not allow CloudFront to access the method by default — CORS needs to be enabled.

**Fixes applied:**
1. In API Gateway dashboard, went to the `/users` resource and enabled CORS to allow CloudFront.
2. Updated the Lambda function to allow invocation from the CloudFront URL so it can return user data.

**Verification:**
Verified the fixed connection between API Gateway and CloudFront by searching for the user on the website — data returned successfully.

### 6. Reflection

**Services used:** S3 bucket, CloudFront, DynamoDB, API Gateway, and Lambda function.

**Key learnings:** Designing a web app, writing function code, configuring CDN, and adding data to the database.

**Experience:** Took about an hour to complete. Chosen for hands-on practice of AWS services.

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
