<!--
title: Serverless Framework - AWS Lambda Guide - Introduction
menuText: Intro
menuOrder: 1
description: An introduction to using AWS and AWS Lambda with the Serverless Framework.
layout: Doc
-->

<!-- DOCS-SITE-LINK:START automatically generated  -->
### [Read this on the main serverless docs site](https://www.serverless.com/framework/docs/providers/aws/guide/intro)
<!-- DOCS-SITE-LINK:END -->

# Introduction

The Serverless Framework helps you develop and deploy serverless architectures built with AWS Lambda, Google CloudFunctions, Azure Functions, IBM OpenWhisk and other serverless compute providers, effortlessly.

It's a command line interface (CLI) that offers structure, automation and best practices out-of-the-box, allowing you to build sophisticated, event-driven, serverless architectures, in minutes.  

A few things the Serverless Framework does differently than a normal application Framework are:

* It manages your code as well as your infrastructure
* It supports multiple languages (Node.js, Python, Java, and more)

This guide focuses exclusively on using the Serverless Framework with AWS and AWS Lambda.

## Concepts

### Functions

A Function is an AWS Lambda function.  It's an independent unit of deployment, like a microservice.  It's merely code, deployed in the cloud, that is most often written to perform a single job such as:

* *Saving a user to the database*
* *Processing a file in a database*
* *Performing a scheduled task*

You can perform multiple jobs in your code, but we don't recommend doing that without good reason. Separation of concerns is best and the Framework is designed to help you easily develop and deploy many Functions, so you can maintain separation of concerns, without hassle.

### Events

Anything that triggers an AWS Lambda Function to execute is regarded by the Framework as an **Event**.  Events state changes on your AWS infrastructure such as:

* *An AWS API Gateway HTTP endpoint (e.g., for a REST API)*
* *An AWS S3 bucket upload (e.g., for an image)*
* *A CloudWatch timer (e.g., run every 5 minutes)*
* *An AWS SNS topic (e.g., a message)*
* *A CloudWatch Alert (e.g., something happened)*
* *And more...*

When you define an Event for your AWS Lambda functions in the Serverless Framework, the Framework will automatically create any infrastructure necessary for that Event (e.g., an API Gateway endpoint) and configure your AWS Lambda Functions to listen to it.

### Resources

**Resources** are AWS infrastructure resources which your Functions use such as:

* *An AWS DynamoDB Table (e.g., for saving Users/Posts/Comments data)*
* *An AWS S3 Bucket (e.g., for saving images or files)*
* *An AWS SNS Topic (e.g., for sending messages asynchronously)*
* *Anything that can be defined in CloudFormation is supported by the Serverless Framework*

The Serverless Framework not only deploys your Functions and the Events that trigger them, but it also deploys the AWS infrastructure components your Functions depend upon.

### Services

A **Service** is the Framework's unit of organization. You can think of it as a project (though you can have multiple Services for a single project or application). A Service is where you define your Functions, the Events that trigger them, and the Resources your Functions use, all in a single file entitled `serverless.yml`. It looks like this:

```yml
# serverless.yml

service: users

functions: # Your Functions
  usersCreate:
    events: # The Events that trigger this function
      - http: post users/create
  usersCreate:
    events:
      - http: delete users/delete

resources: # The Resources your Functions use.  Raw AWS CloudFormation syntax goes in here.
```

When you deploy with the Framework by running `serverless deploy`, everything in `serverless.yml` is deployed at once.

### Plugins

You can overwrite or extend the functionality of the Framework using **Plugins**.  Every `serverless.yml` can contain a `plugins:` property, which features multiple plugins.

```yml
# serverless.yml

plugins:
  - serverless-offline
  - serverless-secrets
```
