# Lesson 14 — The inner and outer loops

Prepared lesson. Status: Not started. Track: Core.

## Objective

Separate execution of one task from selecting and updating work.

## Predict

While an agent fixes one bug, a new report changes the priority. Which loop handles that new context?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A chef follows one order while the kitchen manager watches new orders, shortages and feedback.

## Model

The inner loop works on a bounded task snapshot. The outer loop watches evolving context, chooses work and updates priorities. Incoming Slack, Sentry or monitoring signals are examples of sources, not permissions or integrations created by this course.

1. **Incoming evidence**: New context
2. **Outer loop**: Select / update
3. **Task snapshot**: Scope + acceptance
4. **Inner loop**: Fix + verify
5. **Result**: Review / feed back

## Worked example

A mock failure report becomes a scoped task with a fixture and expected banner. The worker verifies that task. A later report can cause the manager to revise the queue instead of silently changing a running worker's assumptions.

```ts
type Task = {
  id: string; scope: string;
  expectedBehavior: string; fixture: string;
}; // A snapshot supplied to one worker
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Which loop owns ‘choose the next bug’ and which owns ‘run the failure fixture’?

Hint if requested: One chooses work. One performs the chosen task.

## Fresh transfer check

What could go wrong if the worker's acceptance condition silently changes halfway through?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk 32:36–35:12; interview 34:36–39:48. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
