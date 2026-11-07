# Lesson 09 — Exact amounts and honest boundaries

Prepared lesson. Status: Not started. Track: Core.

## Objective

Explain exact representation and runtime validation.

## Predict

Why could converting an exact token amount into an ordinary floating-point number too early be a problem?

Ask this first in conversation and wait. The following explanation is prepared material, not learner evidence.

## Analogy

A measuring cup marked in whole units preserves an exact count. Rounding it early can lose a distinction you need later.

## Model

Preserve exact token units and validate data when it enters from outside. Semantic types distinguish an address from an unrelated string. TypeScript annotations disappear at runtime, so RPC data still needs parsing and checks. A cast alone does not validate anything.

1. **External data**: Untrusted shape
2. **Runtime parser**: Check shape + meaning
3. **Semantic value**: Amount / address
4. **App logic**: Known contract

## Worked example

For SOL, 0.01 SOL corresponds to 10,000,000 lamports. Token decimal counts vary. Keep integer units as bigint and format only for display. The example parser below checks decimal digits only and leaves upper bounds to the real boundary.

```ts
function parseUnits(raw: unknown): bigint {
  if (typeof raw !== 'string' || !/^[0-9]+$/.test(raw))
    throw new Error('Expected whole units');
  return BigInt(raw);
}
```

Illustrative teaching snippet. Referenced helper functions and branded types may be placeholders. This is not an installed program or a complete production implementation.

## Your attempt

An RPC returns amount = 'banana'. At which boundary should you reject it, and why?

Hint if requested: Before app logic treats it as a valid amount.

## Fresh transfer check

Does ‘raw as AtomicAmount’ prove the value has been checked? Explain.

Use after discussing the attempt. Do not give the answer before the learner tries. Record assistance, actual reasoning and the exact pending question.

## Source

Runar 6:10–8:33, 11:21–14:48; TypeScript/Solana example is our adaptation. See [sources](../sources.md). Product examples are course adaptations, not claims that the speakers implemented these particular Solana patterns.
