# Progress
- Lesson 1 (transactions): diagnostic done; signing/token accounts explained (not yet shown back).
- Lesson 2 (NEAR access keys): SHOWN — identified key-leak risk, recipient limits, and that rules belong in the contract (added: enforcement, since a leaked key bypasses agent code).
- Spec for agent-wallet-with-rules: done (paused before coding; fundamentals first).
- Chain abstraction / Intents / 1Click: taught; allowlist design question still open.
- Chain Signatures / MPC: taught (shares, threshold, no full key). Teach-back started (threshold idea correct; nodes concept filled in).

Next: Foundation project (Bibhu’s pick) — NEAR testnet controls a Solana devnet address. Signing-request flow explained; pending prediction: after the MPC signature returns, has SOL moved yet? No coding or independent demonstration yet.

## Resume here (checkpoint 2026-11-07, topic switch to interview practice)
- Goal: NEAR hackathon. Current step: foundation project — testnet NEAR account (exact account name unconfirmed in these notes) controls a Solana devnet address and sends devnet SOL via Chain Signatures. Still no coding.
- Last exchange: asked what the NEAR account sends the MPC signer. He said "No idea"; tutor supplied the answer (serialized unsigned Solana tx message + derivation path, e.g. "solana-1"). NOT independently demonstrated — stays in review queue.
- Next (unchanged after 2026-11-07 housekeeping): explain how the `sign` request looks on NEAR (plain English, no code), then continue the 5-step plan.
- MPC threshold: an earlier note said "~11 of 17" live; treat as previously reported, not live-verified. Check the signer contract state before relying on it.

## Current checkpoint — 2026-11-08
Resumed NEAR. Explained two separate transactions: authenticated NEAR call requests a signature over the serialized Solana message using a derivation path and signing scheme; signed Solana transaction must then be broadcast for execution. Pending question: after the signature is returned, before broadcasting to Solana, has SOL moved? No answer yet; not marked learned. Earlier resume entries are history.

- 2026-11-08 detour: privacy explained (public chain vs TEE private compute vs distributed key custody). Taught only. Pending prediction unchanged: has SOL moved after signature, before broadcast?

## Current checkpoint — 2026-11-09
Compared account models (Solana / EVM / NEAR). Pending teach-back: when our NEAR account sends devnet SOL, which chain moves the SOL and what NEAR contributes. Not marked learned.
