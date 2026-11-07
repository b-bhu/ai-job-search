# Lesson 18 — One reliable worker

Prepared lesson. Status: Not started. Track: Capstone.

## Objective

Combine the ideas into one reviewable, observable experiment.

## Predict

Which one small UI or transaction bug would you choose as a safe first experiment, and why?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

Before opening a second kitchen, demonstrate that one kitchen can reliably handle an order and recover from a problem.

## Model

Choose one reproducible bug in a fake or local environment. Specify behavior, reproduce it, propose a bounded fix, collect evidence and record interventions. Strengthen one recurring weak boundary. Expand orchestration only when the worker is dependable.

1. **One bug**: Bounded scope
2. **Behavior + fixture**: Observable target
3. **Reproduce / verify**: Before + after
4. **Record interventions**: Human corrections
5. **One stronger boundary**: Type / check / tool / skill

## Worked example

Capstone scenario: a failed mock transfer displays Success and erases 0.01. Your packet includes the expected failed banner, retained input, reproduction, proposed correction, success/failed/unknown checks, evidence and limits. Planning is enough initially. Real code execution belongs to a separately requested learning exercise.

```ts
type EvidencePacket = {
  requirement: string; before: string; after: string;
  checks: string[]; interventions: string[];
  uncertainty: string[]; nextConstraint: string;
};
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Draft a short evidence packet for the failed mock transfer. Explain your next constraint.

Hint if requested: Use ordinary language first. No syntax memorization or production repository changes are required.

## Fresh transfer check

A later screenshot looks right but your unknown-outcome check fails. What can you honestly claim?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Our course adaptation of the three talks; no implementation or production change claimed. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
