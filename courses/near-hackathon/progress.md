# Progress
- Lesson 1 (transactions): diagnostic done; signing/token accounts explained (not yet shown back).
- Lesson 2 (NEAR access keys): SHOWN — identified key-leak risk, recipient limits, and that rules belong in the contract (added: enforcement, since a leaked key bypasses agent code).
- Spec for agent-wallet-with-rules: done (paused before coding; fundamentals first).
- Chain abstraction / Intents / 1Click: taught; allowlist design question still open.
- Chain Signatures / MPC: taught (shares, threshold, no full key). Teach-back started (threshold idea correct; nodes concept filled in).

Next: Foundation project (Bucket's pick) — NEAR testnet account controls a Solana **devnet** address and sends SOL, no Solana private key. Pending his choice: stick with the 5-step plan, or dig into how the `sign` request looks on NEAR first. Answer given for "what to send MPC": unsigned tx bytes (or message) + path.

## Resume here (checkpoint 2026-11-07, topic switch to interview practice)
- Goal: NEAR hackathon. Current step: foundation project — testnet NEAR account (bibhu.testnet) controls a Solana devnet address and sends devnet SOL via Chain Signatures. Still no coding.
- Last exchange: asked what the NEAR account sends the MPC signer. He said "No idea"; tutor supplied the answer (serialized unsigned Solana tx message + derivation path, e.g. "solana-1"). NOT independently demonstrated — stays in review queue.
- Next: explain how the `sign` request looks on NEAR (plain English, no code), then continue the 5-step plan.
- MPC threshold: an earlier note said "~11 of 17" live; treat as previously reported, not live-verified. Check the signer contract state before relying on it.
