# Lesson 03 — Correctness and quality

Prepared lesson. Status: Not started. Track: Core.

## Objective

Separate behavior that passes from design that remains maintainable.

## Predict

Two fixes pass the same behavioral check. One copies logic into five files. Are they equally good? Why?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A meal can be safe to eat and still taste poor. Checking safety alone does not settle whether you want it on the menu.

## Model

Correctness asks whether the behavior meets the requirement. Quality asks whether the design fits the codebase and will be understandable to change. Human judgment remains useful for both.

1. **Behavior check**: Does it work?
2. **Design review**: Does it fit?
3. **Useful change**: Evidence + judgment

## Worked example

A transfer failure banner appears in both fixes. One uses the existing outcome model. The other adds scattered string checks. Passing behavior is evidence, then the review checks duplication and boundaries.

```ts
// Behavior assertion
expect(screen.banner).toBe('Failed');
// Review question: does this use the existing Outcome model?
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Name one correctness check and one quality question for a watchlist save fix.

Hint if requested: Correctness can be observed. Quality often involves how future changes would work.

## Fresh transfer check

Could code be neatly organized and still show a false success message? Explain.

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk quality/correctness discussion; interview 49:34–51:45. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
