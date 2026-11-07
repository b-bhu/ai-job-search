# Lesson 15 — Coordinators and ownership

Prepared lesson. Status: Not started. Track: Core.

## Objective

Understand when grouping reports and isolating work helps.

## Predict

Five reports look similar. What would justify creating one task instead of five?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A kitchen manager notices that five bad dishes share one faulty oven. Assigning five chefs to repair the same oven creates collisions.

## Model

A coordinator groups evidence that shares a cause and assigns bounded work. Clear ownership, a queue and isolated checkouts reduce collisions. Increase the number of workers only after one worker produces useful verified results. Coordination has token and review costs.

1. **Reports**: Preserve evidence
2. **Cause grouping**: Require a real link
3. **Owned task**: One responsible owner
4. **Isolated worker**: Separate checkout
5. **Review**: Evidence + diff

## Worked example

Failure reports from two screens trace to one mapper. One worker owns the mapper change. Another can work on an unrelated fixture in its own checkout. They need an explicit plan if both must touch shared files.

```ts
const workItem = {
  id: 'mapper-failure', owner: 'worker-1',
  affectedReports: ['A', 'B'], scope: 'outcome mapper'
};
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

What evidence would you require before grouping two transfer bugs?

Hint if requested: Similar wording alone is weak. Trace the runtime path or shared cause.

## Fresh transfer check

Why can adding workers increase your intervention burden?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Interview 40:49–45:07, 51:55–54:42; ownership/checkouts are our adaptation. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
