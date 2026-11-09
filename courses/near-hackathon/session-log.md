## 2026-10-24
Started course from hackathon link. Diagnostic answer on wallet send. Explained signing and SPL token accounts. Asked about agent-wallet risk.
## 2026-10-24 (2)
Agent-wallet risk answered well (leak = total loss; restrict recipients). Taught NEAR named accounts, multiple keys, function-call keys. Asked where the allowlist should live.
## 2026-10-24 (3)
Answered "contract not agent" correctly; taught enforcement argument. Asked Rust vs TS for first contract.
## 2026-10-24 (4)
Chose Rust. Taught NEAR stack overview. Asked view vs change prediction.
## 2026-10-24 (5)
View vs change: he got storage cost; added consensus\/gas and signature-for-authorization, plus NEAR storage staking. Assigned toolchain install + scaffold.
## 2026-10-24 (6)
Account creation failed: used top-level 'bibhu' (registrar only). Taught hierarchical account names; retry with bibhu.testnet. He scaffolded in 'auction' folder.
bibhu.testnet taken; suggested bibhu-dev.testnet (free as of 21:53 IST).
## 2026-10-24 (7)
Testnet account created. Explained cargo near scaffold files via npm analogies. Asked for lib.rs + view\/change prediction.
## 2026-10-25
Walked auction lib.rs in his words (structs/impl/init analogies good). View/change right, signals taught. Asked allowlist variation.
## 2026-10-25 (2)
Allowlist variation: 2/3 right; pay misclassified. Explained purpose of 3 functions (company-card model).
## 2026-10-25 (3)
Owner-only reasoning correct. Assigned first Rust exercise: allowlist contract.
## 2026-10-25 (4)
He flagged he loses context jumping to code early. Agreed; switched to plain-English spec first. Asked for stored fields.
## 2026-10-25 (5)
Feedback: I was giving half context / unclear goal. Restated big goal, practice project, path. Rule: state goal + where we are on the path at each step.
## 2026-10-25 (6)
Spec written mostly by him. Asked lazy daily-reset question.
## 2026-10-25 (7)
Daily reset: taught day-number integer division + lazy reset. Spec done. Asked pay step-order teach-back.
## 2026-10-25 (8)
pay steps taught back mostly right; asked him to find missing spent_today update.
## 2026-10-25 (9)
He found spent_today update. Taught update-state-before-transfer. Spec saved. Started step 3: struct fields.
## 2026-11-01
He wants NEAR fundamentals before any coding. Agreed. Started 'why NEAR' from Solana UX pain.
## 2026-11-01 (2)
UX pain answered well. Introduced chain abstraction. Asked cross-chain swap steps prediction.
## 2026-11-02
Cross-chain swap steps right. Taught Intents/solvers/Chain Signatures. Asked agent cross-chain payment teach-back.
## 2026-11-02 (2)
Misconception: agent must know solver/bridge. Corrected. Asked why that's safer.
## 2026-11-02 (3)
He asked how intents actually execute. Taught 1Click API flow from docs. Asked allowlist design question.

## 2026-11-03
Asked allowlist design (vendor Solana addr vs 1Click deposit addr). He went harder: what about Meteora DLMM open-position? Taught: 1Click = swaps only; DLMM needs Chain Signatures (build Solana tx, MPC signs). Asked new risk question.

## 2026-11-03 (2)
Asked how MPC stays private. Taught vault/shares model + address derived from NEAR account + path. Asked teach-back: why one hacked node can't sign.

## 2026-11-03 (3)
Teach-back: threshold idea right (~51% intuition); corrected that threshold is set by network (t-of-n), not automatically 51%. Explained MPC nodes as independent operator machines. Added to review queue.

## 2026-11-03 (4)
He pivoted: skip agent for now; first prove bibhu's testnet NEAR account can send Solana→Solana privately (no Solana key). Agreed. Set foundation 5-step plan (derive, fund devnet, build transfer, MPC sign, broadcast). Asked what NEAR account sends to MPC for step 4.

## 2026-11-06
"No idea" on what to send MPC. Hinted + answered: unsigned Solana tx message bytes + path (e.g. solana-1). Confirmed docs: testnet signer `v1.signer-prod.testnet`, Solana EdDSA domain_id 1, threshold ~11 of 17 (previously reported; not live-verified). Offered: stick with plan, or dig into the `sign` request shape first.

## 2026-11-07
Topic switch: saved interview-practice drill (courses/interview-practice/). No NEAR teaching this entry. Resume point recorded in progress.md.

## 2026-11-07 (2)
Side inventory of saved learning tracks (no NEAR teaching). Resume point unchanged: explain the `sign` request in plain English, no code.

## 2026-11-07 (3)
Housekeeping: synced course records to remote and added root CURRENT-FOCUS.md. No teaching. Note: the account actually created after bibhu.testnet was taken is not confirmed in these notes. Resume point unchanged.

## 2026-11-08
Resumed foundation project, no coding. Explained signing request in plain English: NEAR call carries Solana message + path/signing scheme, signed with NEAR access key; MPC returns Solana signature, not execution. Clarified serialized Solana message, not arbitrary hash. Pending prediction: has SOL moved after receiving the signature but before Solana broadcast? No evidence recorded yet.

## 2026-11-08 (2) — conceptual detour
Asked if NEAR is "privacy by default". Explained: the site has no such claim; Track 03 "Privacy & Private AI — Private by design" (TEE, NEAR AI Cloud). NEAR L1 txs/state are public like Solana; Chain Signatures hide key custody (key shares distributed, no single node normally holds the full key — correcting earlier "no private key exists"), not the transfer; NEAR AI Cloud private inference runs in TEEs with attestation (docs.near.ai/cloud/private-inference). Taught, not learned; no exercise. Pending question unchanged: after MPC signature returns, before broadcast, has SOL moved?

## 2026-11-09
Bibhu summarized Solana/EVM/NEAR models in his own words. Corrections: Solana programs are stateless and data lives in separate accounts listed in the tx; EVM contracts keep code + storage together; NEAR is closer to EVM (one contract per account, own storage) plus named accounts, multiple keys with limited permissions, async cross-contract calls, sharding. Key misconception fixed: NEAR doesn't execute on other chains; it signs and the target chain executes. AI is a separate layer. Asked teach-back: which chain moves the SOL and what NEAR contributes. Earlier open questions (has SOL moved before broadcast; what Solana Explorer sees) fold into this one.
