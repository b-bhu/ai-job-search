# Lesson 12 — Independent and dependent work

Prepared lesson. Status: Not started. Track: Deeper track.

## Objective

Recognize mapping, independent combination and dependent sequencing.

## Predict

Can you fetch two unrelated account summaries independently? Can you confirm a transaction before obtaining its signature?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

You can chop carrots and wash lettuce independently. Baking depends on having the batter first.

## Model

A functor maps over values in a context. An applicative combines work whose structure is independent. A monad sequences work when later work depends on earlier results. These are patterns with laws, not names for every loop or promise. Nested applicatives compose generically. Arbitrary monads need additional structure to compose.

1. **Map**: Change values in context
2. **Combine independently**: Inputs do not choose each other
3. **Sequence dependently**: Next step uses prior result

## Worked example

Map amounts to display strings. Fetch two independent mock account summaries together. Observe a submitted transaction using the signature returned by submission. Real submission stays behind authorization.

```ts
const labels = [10n, 20n].map(String);
const [a, b] = await Promise.all([readMockA(), readMockB()]);
const sig = await mockSubmit(intent);
const outcome = await mockObserve(sig);
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Classify formatting a list, reading two independent fixtures, and observing a returned signature.

Hint if requested: Ask whether the next action needs a value from an earlier action.

## Fresh transfer check

Why is nesting any two effectful abstractions not automatically enough to combine them safely?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 17:31–22:56, 23:00–29:08. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
