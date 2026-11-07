# Lesson 10 — Descriptions and effects

Prepared lesson. Status: Not started. Track: Core.

## Objective

Separate planning a transaction from performing it.

## Predict

If a transaction simulates successfully, does that guarantee the later live transaction succeeds?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

Writing a shopping list is different from paying at the checkout. You can inspect the list before spending anything.

## Model

An effect changes or interacts with the outside world. Keep pure descriptions separate from construction, simulation, signing and submission. Simulation supplies evidence under its conditions. State can change before submission and confirmation. Give each executor only the capabilities its task needs. A preview function should not have a signing capability.

1. **Intent**: Description
2. **Construct**: Unsigned bytes
3. **Simulate**: Evidence
4. **Authorize + sign**: Explicit boundary
5. **Submit + observe**: Outcome or uncertainty

## Worked example

A mock executor can reject a transfer and let the UI demonstrate recovery. A real executor requires separate authorization. Submitted, confirmed, failed and unknown describe different states and should not collapse into one green banner.

```ts
type TxState =
  | { kind: 'draft' }
  | { kind: 'submitted'; signature: string }
  | { kind: 'confirmed'; signature: string }
  | { kind: 'failed'; reason: string }
  | { kind: 'unknown'; signature?: string };
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Place ‘show a preview’ and ‘send a signed transaction’ on opposite sides of the effect boundary.

Hint if requested: Which action can change an external account state?

## Fresh transfer check

What should the UI communicate if submission may have succeeded but observation timed out?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 4:00–5:20, 27:11–30:48; interview 55:44–59:26; lifecycle is our adaptation. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
