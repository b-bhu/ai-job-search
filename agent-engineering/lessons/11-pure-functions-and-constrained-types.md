# Lesson 11 — Pure functions and constrained types

Prepared lesson. Status: Not started. Track: Core.

## Objective

Understand when a function is easier to reason about.

## Predict

Which is easier to check: a fee calculation using only its inputs, or one that reads a changing global variable?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A labeled conversion table gives the same output for the same input. A cook who secretly changes the pantry adds hidden context.

## Model

A pure function returns from its inputs without hidden effects. Under purity, totality and parametricity, a generic A → A has very limited behavior. Total means it returns for every allowed input. TypeScript can throw, loop forever, use casts or access globals, so its signature alone does not establish those guarantees.

1. **Explicit input**: All needed data
2. **Pure calculation**: No hidden effects
3. **Explicit output**: Substitution works

## Worked example

Calculate a preview from supplied integer units and fee units. Fetch the current fee outside that calculation. This makes the arithmetic independently checkable.

```ts
function remaining(balance: bigint, amount: bigint, fee: bigint) {
  return balance - amount - fee;
}
// Caller separately validates nonnegative values and affordability.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Name a hidden dependency you would move into an input for a watchlist filter.

Hint if requested: Consider the current time, user settings or network response.

## Fresh transfer check

Can function identity<A>(a: A): A throw an error in TypeScript despite its signature?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 15:01–17:29, 27:11–29:08. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
