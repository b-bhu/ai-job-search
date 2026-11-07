# Lesson 02 — A clear target

Prepared lesson. Status: Not started. Track: Core.

## Objective

Turn a vague request into observable behavior.

## Predict

What is missing from ‘make the transfer flow reliable’?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

‘Make dinner better’ is hard to check. ‘Serve a warm meal without peanuts’ gives the chef a target and a boundary.

## Model

Name the trigger, expected result and failure behavior. Your experience helps you decide what matters. Give the agent enough intent to make decisions without prescribing every keystroke.

1. **Trigger**: User submits
2. **Expected behavior**: Evidence of outcome
3. **Failure behavior**: Useful recovery

## Worked example

Trigger: submit a transfer in a local fixture. Success: show the confirmed result. Failure: show an error without erasing the input. A lost response stays uncertain until reconciled.

```ts
type Outcome =
  | { kind: 'confirmed'; signature: string }
  | { kind: 'failed'; reason: string }
  | { kind: 'unknown'; signature?: string };
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Write a trigger and expected result for adding a token to a watchlist.

Hint if requested: Start with ‘When the user…’ and ‘The user can observe…’.

## Fresh transfer check

What should happen if saving succeeds but the response never reaches the browser?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Interview 2:09–10:21, 25:05–32:57. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
