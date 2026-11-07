# Lesson 01 — The agent's kitchen

Prepared lesson. Status: Not started. Track: Core.

## Objective

Explain why a useful environment comes before more agents.

## Predict

An agent changes a transfer screen and says ‘fixed’. What would help you trust that statement? Give one piece of evidence you would want.

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A chef can cook faster in a kitchen with labeled ingredients, working equipment and a way to taste the food. Hiring more chefs does not repair a broken oven.

## Model

You organize the kitchen. The agent does the task inside it. Clear intent, useful tools and observable results let the agent discover whether its work helped.

1. **Your intent**: What should happen?
2. **Agent + tools**: Can it run the task?
3. **Observable result**: What actually happened?
4. **Your judgment**: Does the evidence fit?

## Worked example

In a fake MyBoon transfer, the RPC reports failure. The screen must show Failed, preserve the entered amount and offer a safe retry path. A screenshot of that outcome helps us check the claim.

```ts
const fixture = { rpcResult: 'failed' };
const expected = { banner: 'Failed', amountKept: true };
// Compare the observed UI against this expectation.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

For a watchlist Save button, name one visible result that would convince you the item was actually saved.

Hint if requested: Imagine reopening the watchlist. What should still be there?

## Fresh transfer check

If the page only displays a green toast, what might remain uncertain?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk 8:37–12:29; interview 11:20–19:22. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
