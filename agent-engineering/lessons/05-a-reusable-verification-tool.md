# Lesson 05 — A reusable verification tool

Prepared lesson. Status: Not started. Track: Core.

## Objective

Recognize which repeated operations belong in a deterministic tool.

## Predict

The agent repeats the same browser clicks after every transfer fix. What part could become a reusable tool?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

An oven thermometer gives the same kind of measurement each time. A chef should not have to invent a temperature-checking ritual for every meal.

## Model

Extract stable setup, actions and evidence collection into an app-specific CLI. A CLI is a command-line tool. Make failure visible with a nonzero exit status. Keep judgment about the requirement outside a blindly repeated script.

1. **Known fixture**: Repeatable setup
2. **Stable actions**: UI or API path
3. **Evidence**: Logs / image
4. **Pass / fail**: Honest exit status

## Worked example

A proposed verify command loads a failed-transfer fixture, submits the form, checks the banner and input, and stores evidence. It is a design for a future tool, not a command installed by this course.

```ts
// Proposed contract, pseudocode
verify('transfer-failure', fixture)
// returns { passed, observed, evidencePaths }
// process exits nonzero when a required check fails
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Choose one stable browser action and one judgment that should stay with the reviewer.

Hint if requested: Clicking Submit is stable. Deciding whether the requirement covers every important failure is judgment.

## Fresh transfer check

If a tool exits 0 after silently skipping a check, what happens to trust?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk 8:37–12:29; interview 19:39–24:50. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
