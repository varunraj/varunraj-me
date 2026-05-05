# Voice and Photo Ingestion

CoachKai supports voice and photo inputs through a direct-to-S3 upload flow. The backend issues short-lived presigned URLs, tracks ingestion state in DynamoDB, and performs transcription or photo analysis after the client uploads media.

## Design Goals

- Avoid sending large media payloads through API Gateway and Lambda
- Keep uploads encrypted at rest
- Track upload lifecycle server-side
- Return useful text back to the client for downstream coaching flows
- Keep structured food interpretation in the chat/LLM recipe system

## Shared Upload Flow

```mermaid
sequenceDiagram
  participant C as Client
  participant API as API Gateway
  participant Start as Start Upload Lambda
  participant DDB as Ingestions Table
  participant S3 as S3 Media Bucket
  participant Analyze as Analyze / Transcribe Lambda
  participant AI as OpenAI API

  C->>API: POST /voice/start-upload or /photo/start-upload
  API->>Start: Request upload URL
  Start->>DDB: Create INGESTION record with CREATED status
  Start->>S3: Generate presigned PUT URL
  Start-->>C: uploadId + presignedPutUrl + required headers
  C->>S3: PUT media file directly to S3
  C->>API: POST /uploads/{id}/transcribe or /analyze
  API->>Analyze: Process uploaded object
  Analyze->>DDB: Mark TRANSCRIBING / ANALYZING
  Analyze->>S3: Read uploaded media
  Analyze->>AI: Transcribe audio or analyze image
  AI-->>Analyze: Text result
  Analyze->>DDB: Persist result + final status
  Analyze-->>C: transcript or photo description
```

## Voice Flow

```mermaid
flowchart TD
  Start[POST /voice/start-upload]
  Upload[Client PUT audio to S3]
  Transcribe["POST /voice/uploads/{id}/transcribe"]
  Whisper[OpenAI Speech-to-Text]
  Text[Transcript Text]
  Chat[Chat Meal Logging / Coaching Flow]

  Start --> Upload --> Transcribe --> Whisper --> Text --> Chat
```

Voice ingestion returns transcript text. Food interpretation happens later in the chat flow so the same meal logging recipe can handle typed, voice-transcribed, and photo-described inputs consistently.

## Photo Flow

```mermaid
flowchart TD
  Start[POST /photo/start-upload]
  Upload[Client PUT image to S3]
  Analyze["POST /photo/uploads/{uploadId}/analyze"]
  Vision[OpenAI Vision Model]
  Description[Short Food Description]
  Chat[Chat Meal Logging / Coaching Flow]

  Start --> Upload --> Analyze --> Vision --> Description --> Chat
```

Photo ingestion returns a short human-readable description. Structured nutrition parsing is intentionally handled downstream by the chat recipe system.

## Ingestion Record Model

```mermaid
flowchart TD
  IngestionRecord[IngestionRecord\nPK=INGESTION#uploadId\nSK=META]
  CoreFields[Core Fields\nuserId, ingestionType, status, s3Key,\ncontentType, createdAt, updatedAt, ttl,\nresultText, model, latencyMs, errorCode, errorMessage]
  VoiceFields[Voice Fields\ntranscriptText, transcriptDuration, transcriptLanguage]
  PhotoFields[Photo Fields\nphotoDescriptionText, noFoodDetected, rawModelText]

  IngestionRecord --> CoreFields
  IngestionRecord --> VoiceFields
  IngestionRecord --> PhotoFields
```

## Status Lifecycle

```mermaid
stateDiagram-v2
  [*] --> CREATED
  CREATED --> TRANSCRIBING: voice transcribe requested
  CREATED --> ANALYZING: photo analyze requested
  TRANSCRIBING --> TRANSCRIBED
  ANALYZING --> ANALYZED
  TRANSCRIBING --> FAILED
  ANALYZING --> FAILED
  CREATED --> FAILED
```

## S3 Object Layout

Media objects use environment, domain, user, date, and upload id in the key.

```text
{environment}/coach-kai/audio/{userId}/{YYYY}/{MM}/{DD}/{uploadId}.{ext}
{environment}/coach-kai/photo/{userId}/{YYYY}/{MM}/{DD}/{uploadId}.{ext}
```

This makes objects easy to inspect operationally while keeping access controlled through IAM and presigned URLs.

## Presigned URL Security

```mermaid
flowchart LR
  Lambda[Lambda Execution Role]
  Sign[Generate SigV4 Presigned URL]
  URL[Short-Lived PUT URL]
  Client[Client Upload]
  S3[S3 Validates Signature]

  Lambda --> Sign --> URL --> Client --> S3
```

The signed upload request includes:

- object key
- HTTP method
- expiration
- content type
- encryption headers
- credential scope
- signature

The client must upload with the required signed headers. If headers differ, S3 rejects the upload because the signature no longer matches.

## Why Direct Uploads

Direct-to-S3 uploads avoid:

- API Gateway payload limits
- Lambda memory pressure from binary uploads
- unnecessary backend bandwidth
- long request times for media transfer

The backend still controls who can upload, where the object lands, how long the URL is valid, and how ingestion state is recorded.

