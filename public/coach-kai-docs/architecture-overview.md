# CoachKai Backend Architecture Overview

CoachKai is a serverless backend for an AI nutrition coach. It supports authenticated user profiles, meal logging, chat-based coaching, voice and photo ingestion, recipe generation, coaching insights, and content delivery.

The system is built around a few core principles:

- API-first contracts for mobile and web clients
- Serverless infrastructure managed with AWS CDK
- DynamoDB access patterns designed up front
- LLM behavior configured through versioned recipes instead of hard-coded prompts
- Offline evaluation for critical LLM tasks before production rollout
- Separation between canonical user facts, derived insights, and assistant conversation state

## High-Level System

```mermaid
flowchart LR
  Client[Mobile / Web Client]
  Auth[AWS Cognito]
  APIGW[Amazon API Gateway]
  Authorizer[Lambda Token Authorizer]
  Lambdas[TypeScript Lambda Handlers]
  DDB[(DynamoDB Tables)]
  S3[(S3 Media Buckets)]
  SQS[SQS Worker Queues]
  Workers[Async Lambda Workers]
  Events[EventBridge Schedules]
  Streams[DynamoDB Streams]
  OpenAI[OpenAI APIs]
  Memory[External Memory Service]
  CDN[CloudFront]

  Client --> Auth
  Client --> APIGW
  APIGW --> Authorizer
  Authorizer --> Auth
  APIGW --> Lambdas
  Lambdas <--> DDB
  Lambdas <--> S3
  Lambdas --> SQS
  SQS --> Workers
  Workers <--> DDB
  Workers --> OpenAI
  Lambdas --> OpenAI
  Lambdas --> Memory
  Events --> Lambdas
  Streams --> Lambdas
  Client --> CDN
  CDN --> S3
```

## Main Domains

| Domain | Responsibility |
| --- | --- |
| Identity | Cognito access token validation through a custom API Gateway authorizer |
| User Profile | Profile, preferences, onboarding, account deletion, usage tracking |
| Meal Logs | Canonical user activity facts, including meals, items, summaries, and corrections |
| Coaching Chat | Session and turn storage, intent routing, memory/context assembly, LLM response generation |
| LLM Recipes | Versioned prompt components, model config, context layers, and output contracts |
| Insights | Daily focus, recent patterns, weekly signals, and read models for the client |
| Voice / Photo | Presigned upload, encrypted S3 storage, transcription/photo analysis, ingestion state tracking |
| Recipes | Generated recipes, expansion, image refresh, and async worker processing |
| Content | Curated educational bits and image assets delivered through API and CDN |

## Request Path

```mermaid
sequenceDiagram
  participant C as Client
  participant A as API Gateway
  participant Z as Lambda Authorizer
  participant H as Lambda Handler
  participant D as DynamoDB
  participant L as LLM / External APIs

  C->>A: HTTPS request with Cognito access token
  A->>Z: Validate token
  Z-->>A: IAM policy + cached auth context
  A->>H: Invoke route handler
  H->>D: Read/write domain records
  opt LLM-backed route
    H->>L: Build prompt / call model / parse output
  end
  H-->>A: JSON response
  A-->>C: API response
```

## Data Ownership

The backend separates data by purpose:

- User facts live in user profile, preferences, and meal log records.
- Conversation state lives in chat session and chat turn tables.
- Derived coaching insight read models live in coach feedback records.
- Durable assistant action/focus state lives in Kai Loop records.
- Upload lifecycle state lives in ingestion records.
- Generated recipe state lives in recipe records and worker queues.

This separation makes each read path explicit and avoids mixing canonical nutrition facts with assistant-generated guidance.

## Event-Driven Paths

```mermaid
flowchart TD
  MealWrite[Meal Log Created or Updated]
  Stream[DynamoDB Stream]
  DailyRollup[Daily Rollup Lambda]
  Summary[(Daily Summary Table)]
  Focus[Daily Focus Computation]
  Feedback[(Coach Feedback Table)]

  Schedule[EventBridge Schedule]
  WeeklyScheduler[Weekly Insights Scheduler]
  WeeklyLogic[Weekly / Recent Signal Computation]

  MealWrite --> Stream --> DailyRollup
  DailyRollup --> Summary
  DailyRollup --> Focus --> Feedback
  Schedule --> WeeklyScheduler --> WeeklyLogic --> Feedback
```

## Why This Architecture Works

- API Gateway and Lambda keep operational overhead low.
- CDK gives repeatable infrastructure and environment-specific behavior.
- DynamoDB supports predictable low-latency reads when access patterns are modeled directly.
- SQS isolates slower LLM and image generation work from request-response APIs.
- EventBridge and DynamoDB Streams let derived insight computation run outside user-facing request paths.
- Versioned LLM recipes allow prompt changes, model changes, and output changes without scattering prompt logic through application code.

