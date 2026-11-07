# Lesson 08 — The smallest adequate language

Prepared lesson. Status: Not started. Track: Core.

## Objective

Keep meaningful structure until execution needs a lower-level form.

## Predict

Which is easier to validate: an arbitrary instruction string or a structured transfer description with named fields?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A recipe preserves ingredients and steps. A recording of hand movements is harder to inspect and edit as a recipe.

## Model

Choose the least powerful representation that still describes the task. Arbitrary strings and commands allow many things, which makes reasoning harder. Structured descriptions can retain information for validation, analysis and multiple interpreters.

1. **Structured intent**: Meaning retained
2. **Validation**: Rules inspect fields
3. **Execution form**: Lower level when needed

## Worked example

Represent a proposed transfer as fields before producing transaction bytes. The same description can drive a preview, validation and a fake executor. It does not grant permission to sign or send.

```ts
type TransferIntent = {
  recipient: ValidatedAddress;
  amount: AtomicAmount;
};
// Type names stand for validated boundaries, explained next.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Describe a watchlist action as named fields rather than an arbitrary command string.

Hint if requested: What action and token identity would the description need?

## Fresh transfer check

What information becomes harder to recover after compiling source code into lower-level instructions?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 0:51–5:20, 8:35–14:48, 34:25–35:19. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
