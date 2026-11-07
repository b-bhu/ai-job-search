Big goal: ship NEAR hackathon project by 14 Nov 2026 (public repo + X demo).
Practice project: "agent wallet with rules" — owner funds contract, allowlists recipients; AI agent calls pay, limited to approved accounts + daily cap. Fits Agent Economy / AI Security tracks.

Path (revised 2026-11-03 / continued 2026-11-06):
1. Concepts (done)
2. Plain-English spec for agent wallet (done; coding paused)
3. **Foundation: Chain Signatures by hand** ← current
   - Derive Solana address from NEAR testnet account + path
   - Fund with Solana **devnet** SOL (faucet; no real funds)
   - Build a normal Solana transfer
   - Ask NEAR MPC signer (`v1.signer-prod.testnet`) to sign
   - Broadcast to Solana devnet
4. Then: Rust agent-wallet contract (rules on who/what may be signed or paid)
5. Deploy testnet + CLI calls
6. Small frontend / simple agent
7. Pick final idea + track, build through 14 Nov
