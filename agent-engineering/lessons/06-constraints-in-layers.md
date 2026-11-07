# Lesson 06 — Constraints in layers

Prepared lesson. Status: Not started. Track: Core.

## Objective

Choose a strong place to enforce a repeated rule.

## Predict

An agent repeatedly passes a token amount as a JavaScript number. Where could you prevent that mistake?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A kitchen can label a hot surface, but a guard that prevents touching it provides stronger protection. Both can help.

## Model

The talk's hierarchy is codebase patterns, static checks, rules, skills and style guides. Static checks include types, compiler, lint and CI. Put enforceable boundaries in code and checks. Use instructions for context that code cannot express.

1. **Patterns**: Existing structure
2. **Types / lint / CI**: Enforceable checks
3. **Rules**: Working agreement
4. **Skills**: Repeatable method
5. **Style guide**: Presentation choices

## Worked example

A function that accepts only a validated amount type catches many incorrect calls earlier. AGENTS.md explains why that boundary exists. A skill explains how to investigate violations.

```ts
type AtomicAmount = bigint & { readonly __brand: 'AtomicAmount' };
function buildTransfer(amount: AtomicAmount) { /* description only */ }
// A plain number is not accepted by this signature.
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

Pick an enforcement layer for ‘every failed transfer must preserve the input’. Explain your choice.

Hint if requested: Can a behavioral check observe it? Could a shared component make the pattern easier to follow?

## Fresh transfer check

Why does a type check alone fail to prove that the error banner appears?

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Talk 16:30–18:30; interview 25:05–32:57. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
