# Lesson 13 — Objects and descriptions

Prepared lesson. Status: Not started. Track: Deeper track.

## Objective

Build intuition for abstractions without losing track of what they omit.

## Predict

If two implementations match the same description, must they be identical?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

Many different chairs fit the description ‘has four legs’. The description does not uniquely identify one chair.

## Model

A Galois connection relates ordered concrete and abstract views. Think about objects that satisfy a description and descriptions that fit objects. This is not a one-to-one pairing. More specific descriptions generally admit fewer objects. Currying turns multiple arguments into a sequence of one-argument functions. A list is a free monoid: elements can be combined by concatenation with an empty-list identity. A free construction adds only the structure needed for its laws. A forgetful view omits that structure.

1. **Concrete objects**: Several implementations
2. **Abstraction**: Properties retained
3. **Descriptions**: What we can say
4. **Allowed objects**: May include many

## Worked example

‘Shows failure and keeps the input’ admits many UI implementations. A detailed screenshot is more specific but still does not prove every runtime behavior. Choose an abstraction that retains what the check needs.

```ts
const byStatus = (status: string) => (item: { status: string }) =>
  item.status === status; // curried predicate
const combined = [...['A'], ...['B']]; // concatenation
// [] is the identity for list concatenation.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Name a detail lost when a screenshot is reduced to ‘the page looked correct’.

Hint if requested: Consider the exact error text, input value or disabled button state.

## Fresh transfer check

Does matching a description prove that no other implementation could match it?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 35:22–43:18, 43:18–47:56. See sources.md for correction and formal-detail limits.. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
