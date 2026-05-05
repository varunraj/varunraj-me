# Serverless CDK Architecture

CoachKai infrastructure is defined with AWS CDK and deployed as environment-specific serverless stacks. The backend is built primarily with API Gateway, Lambda, DynamoDB, S3, SQS, EventBridge, KMS, CloudFront, and Cognito integration.

## Infrastructure Overview

```mermaid
flowchart TD
  CDK[AWS CDK App]
  Config[Environment Config]
  Stack[CoachKai Backend Stack]

  APIGW[API Gateway REST API]
  Auth[Custom Lambda Authorizer]
  Lambda[Node.js Lambda Functions]
  DDB[(DynamoDB Tables)]
  S3[(S3 Buckets)]
  KMS[KMS Keys]
  SQS[SQS Queues]
  EventBridge[EventBridge Rules]
  CloudFront[CloudFront Distributions]
  Logs[CloudWatch Logs]
  SSM[SSM Parameter Store]

  CDK --> Config --> Stack
  Stack --> APIGW
  Stack --> Auth
  Stack --> Lambda
  Stack --> DDB
  Stack --> S3
  Stack --> KMS
  Stack --> SQS
  Stack --> EventBridge
  Stack --> CloudFront
  Stack --> Logs
  Stack --> SSM
```

## Main AWS Services

| Service | Usage |
| --- | --- |
| API Gateway | REST API routing, CORS, authorizer integration |
| Lambda | TypeScript route handlers, stream processors, scheduled jobs, async workers |
| DynamoDB | User profiles, logs, chat sessions, chat turns, feedback, ingestion records, recipes |
| S3 | Voice uploads, photo uploads, recipe images, content assets |
| KMS | Server-side encryption for media uploads |
| SQS | Async recipe generation, image generation, and meal analysis workers |
| EventBridge | Scheduled weekly/recent insight jobs |
| DynamoDB Streams | Daily rollup and same-day focus recomputation |
| CloudFront | Public delivery for selected content and generated assets |
| SSM Parameter Store | Cross-stack configuration such as Cognito resource identifiers |
| CloudWatch Logs | Lambda logging and operational debugging |

## Environment Strategy

```mermaid
flowchart LR
  Source[Source Code]
  Dev[Dev Environment]
  Prod[Prod Environment]

  Source --> Dev
  Source --> Prod

  Dev --> DevPolicy[Destroyable Data / Debug Logging / Relaxed Limits]
  Prod --> ProdPolicy[Retained Data / PITR / Stricter Limits / Monitoring]
```

The stack uses environment-specific configuration for:

- resource names
- removal policies
- point-in-time recovery
- usage limits
- alerting and monitoring behavior
- deployment target

Production resources retain durable data, while development resources can be easier to tear down and recreate.

## API Gateway and Lambda

```mermaid
flowchart TD
  APIGW[API Gateway]
  Authorizer[Token Authorizer Lambda]
  User[User Lambdas]
  Coach[Coach Lambdas]
  Ingestion[Voice / Photo Lambdas]
  Recipe[Recipe Lambdas]
  Content[Content Lambdas]
  Feedback[Feedback Lambdas]

  APIGW --> Authorizer
  APIGW --> User
  APIGW --> Coach
  APIGW --> Ingestion
  APIGW --> Recipe
  APIGW --> Content
  APIGW --> Feedback
```

The backend uses dedicated Lambda handlers by domain rather than one monolithic handler. This keeps IAM permissions, environment variables, timeouts, and operational behavior easier to reason about.

## Async Worker Pattern

```mermaid
sequenceDiagram
  participant API as API Lambda
  participant DDB as DynamoDB
  participant Q as SQS Queue
  participant W as Worker Lambda
  participant LLM as LLM / Image API

  API->>DDB: Create job or update record
  API->>Q: Enqueue work
  API-->>API: Return accepted response
  Q->>W: Deliver message
  W->>DDB: Load job context
  W->>LLM: Perform slow generation
  W->>DDB: Persist result or failure
```

This pattern keeps slow or expensive LLM work out of latency-sensitive API routes.

## Scheduled and Stream Processing

```mermaid
flowchart TD
  EventBridge[EventBridge Schedule]
  Weekly[Weekly Insights Scheduler]
  UserLogs[(User Logs Table)]
  Stream[DynamoDB Stream]
  Daily[Daily Rollup Lambda]
  Feedback[(Coach Feedback Table)]
  Summary[(Daily Summary Table)]

  EventBridge --> Weekly --> Feedback
  UserLogs --> Stream --> Daily
  Daily --> Summary
  Daily --> Feedback
```

Scheduled jobs compute weekly and recent insights. Stream processors recompute daily summaries and same-day focus when meal logs change.

## Cross-Stack Configuration

The backend reads shared identity resources from SSM Parameter Store. This allows the identity stack and backend stack to be deployed independently while still sharing Cognito identifiers and issuer metadata.

```mermaid
flowchart LR
  Identity[Identity Stack]
  SSM[(SSM Parameters)]
  Backend[Backend CDK Stack]
  Authorizer[Lambda Authorizer]

  Identity --> SSM
  Backend --> SSM
  Backend --> Authorizer
```

## CDK Design Choices

- CDK constructs define API routes, tables, buckets, queues, workers, and permissions in code.
- Lambda bundling supports TypeScript, markdown prompt assets, and JSON recipe artifacts.
- DynamoDB tables use environment-aware retention and point-in-time recovery.
- S3 uploads are encrypted and signed through short-lived presigned URLs.
- API routes consistently use Cognito-backed authorization except explicitly public endpoints.

