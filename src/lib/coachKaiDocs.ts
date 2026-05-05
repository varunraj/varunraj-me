export type CoachKaiDoc = {
  slug: string;
  title: string;
  description: string;
};

export const coachKaiDocs: CoachKaiDoc[] = [
  {
    slug: "architecture-overview",
    title: "Architecture Overview",
    description:
      "High-level system overview of the CoachKai backend: serverless architecture, major domains, request lifecycle, event-driven insight generation, and data ownership boundaries.",
  },
  {
    slug: "llm-recipe-system",
    title: "LLM Recipe System",
    description:
      "Versioned LLM recipe framework covering prompts, models, memory, session history, safety rules, context, triggers, and output instructions.",
  },
  {
    slug: "llm-evaluation",
    title: "LLM Evaluation",
    description:
      "Offline evaluation system with golden scenarios, structured scoring, promotion workflow, and regression-focused reports.",
  },
  {
    slug: "serverless-cdk-architecture",
    title: "Serverless CDK Architecture",
    description:
      "AWS CDK infrastructure documentation: API Gateway, Lambda, DynamoDB, S3, SQS, KMS, EventBridge, CloudFront, SSM, workers, and scheduled jobs.",
  },
  {
    slug: "rest-api-contract",
    title: "REST API Contract",
    description:
      "Public-safe REST API summary covering auth, route structure, response patterns, chat flows, media ingestion, and insight read models.",
  },
  {
    slug: "dynamodb-data-model",
    title: "DynamoDB Data Model",
    description:
      "Schema and access-pattern design for user records, meal logs, feedback read models, Kai Loop state, chat tables, GSIs, and query strategies.",
  },
  {
    slug: "voice-photo-ingestion",
    title: "Voice + Photo Ingestion",
    description:
      "Media ingestion architecture: presigned upload flow, transcription/photo analysis, ingestion lifecycle, object layout, and coaching integration.",
  },
];

export function getCoachKaiDocBySlug(slug: string) {
  return coachKaiDocs.find((doc) => doc.slug === slug);
}
