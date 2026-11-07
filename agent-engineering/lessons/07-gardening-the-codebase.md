# Lesson 07 — Gardening the codebase

Prepared lesson. Status: Not started. Track: Core.

## Objective

Use evidence to remove recurring causes of rework.

## Predict

You see similar error-handling code in several files. Should an agent immediately rewrite all of it? What evidence would you ask for?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A gardener identifies a weed before pulling it. Removing every unfamiliar plant can destroy the garden.

## Model

Collect examples of a recurring problem, find the shared cause and make a bounded improvement. Prevent new violations while dealing with old ones gradually. Do not turn an aesthetic suspicion into a broad refactor.

1. **Observed failures**: Real evidence
2. **Shared cause**: Explain the link
3. **Bounded fix**: Small reviewable change
4. **Prevent recurrence**: Pattern or check

## Worked example

Three false-success reports come from the same outcome mapper. Fixing that mapper and adding a fixture check addresses the shared cause. Rewriting unrelated screens adds risk without evidence.

```ts
const reports = ['screen A', 'screen B', 'screen C'];
// Trace each report to the outcome mapper before changing it.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Describe one piece of evidence that would justify a shared fix instead of three separate fixes.

Hint if requested: Look for the same function or boundary in each reproduction.

## Fresh transfer check

If an old violation remains, how could you stop new violations without blocking every change?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk 24:30–26:41; interview 45:51–48:59. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
