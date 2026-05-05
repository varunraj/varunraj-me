# LLM Recipe System

CoachKai uses a recipe-based LLM architecture. A recipe is a versioned configuration that defines the model, context layers, prompt components, output contract, and evaluation profile for a specific assistant capability.

This keeps LLM behavior observable, testable, and rollback-friendly.

## Problem

Hard-coded prompts become difficult to maintain as an assistant gains more use cases:

- meal logging
- meal correction
- post-meal analysis
- snack analysis
- daily check-ins
- open-ended chat
- recipe generation
- image prompt generation
- intent classification

Each task needs different context, output shape, model settings, and evaluation criteria. The recipe system makes those choices explicit.

## Recipe Model

```mermaid
classDiagram
  class ChatRecipe {
    recipe_id
    recipe_version
    model_config
    context_layers
    evaluation_profile
  }

  class ModelConfig {
    model_id
    temperature
    max_tokens
  }

  class ContextLayers {
    safety_profile_id
    persona_id
    session_history_strategy_id
    memory_strategy_id
    situation_context_id
    trigger_builder_id
    output_template_id
  }

  class EvaluationProfile {
    task_type
    scoring_dimensions
    required_output_format
  }

  ChatRecipe --> ModelConfig
  ChatRecipe --> ContextLayers
  ChatRecipe --> EvaluationProfile
```

## Prompt Assembly

```mermaid
flowchart TD
  Recipe[Recipe Registry Entry]
  Safety[Safety Profile]
  Persona[Persona]
  History[Session History Strategy]
  Memory[Memory Strategy]
  Situation[Situation Context]
  Trigger[Task Trigger]
  Output[Output Instructions]
  Runtime[Prompt Runtime]
  Model[LLM Call]
  Parser[Output Parser / Validator]

  Recipe --> Safety
  Recipe --> Persona
  Recipe --> History
  Recipe --> Memory
  Recipe --> Situation
  Recipe --> Trigger
  Recipe --> Output

  Safety --> Runtime
  Persona --> Runtime
  History --> Runtime
  Memory --> Runtime
  Situation --> Runtime
  Trigger --> Runtime
  Output --> Runtime

  Runtime --> Model --> Parser
```

## Runtime Flow

```mermaid
sequenceDiagram
  participant API as Chat API Handler
  participant Router as Intent Classifier
  participant Registry as Recipe Registry
  participant DDB as DynamoDB
  participant Memory as Memory Service
  participant Runtime as Prompt Runtime
  participant LLM as LLM Provider

  API->>DDB: Load session and recent turns
  par Classify intent
    API->>Router: Classify user message
    Router->>Registry: Load intent recipe
    Router->>Runtime: Build classification prompt
    Runtime->>LLM: JSON-only intent call
    LLM-->>Router: Parsed intent
  and Prefetch memory
    API->>Memory: Search user memories
    Memory-->>API: Relevant memory summary
  end
  API->>Registry: Select downstream recipe
  API->>Runtime: Assemble prompt layers
  Runtime->>LLM: Generate task response
  LLM-->>Runtime: Assistant output
  Runtime-->>API: Parsed response + metadata
  API->>DDB: Persist user and assistant turns
```

## Supported Recipe Types

| Recipe | Purpose |
| --- | --- |
| `intent_classifier` | Route a user message to the correct downstream task |
| `meal_log_entry` | Convert natural language into structured meal log output |
| `meal_correction` | Update existing meal records based on user corrections |
| `post_meal_analysis` | Score and explain a logged meal |
| `post_snack_analysis` | Provide snack-specific feedback |
| `daily_checkin` | Generate daily coaching messages |
| `open_chat` | Handle general coaching conversation |
| `next_meal_ideas` | Suggest next meals based on context |
| `full_recipe_generation` | Generate complete structured recipes |
| `recipe_image_prompt` | Generate image prompts for recipe images |

## Versioning Strategy

Each layer can evolve independently:

- model version
- safety profile
- persona
- memory strategy
- session history formatting
- situation context builder
- task trigger
- output instructions
- schema or parser

```mermaid
flowchart LR
  V1[meal_log_entry v1.0.0]
  V2[meal_log_entry v2.0.0]
  V3[meal_log_entry v3.0.0]

  V1 -->|Change output instructions| V2
  V2 -->|Change model + scoring target| V3
```

Versioned recipes make it possible to compare behavior across versions and roll back by changing configuration rather than rewriting application logic.

## Observability

Each LLM call should be traceable by:

- recipe id
- recipe version
- component ids
- model id and parameters
- input context summary or hash
- parsed output
- latency
- token usage
- downstream outcome signals

This metadata supports debugging, evaluation, and controlled rollout decisions.

