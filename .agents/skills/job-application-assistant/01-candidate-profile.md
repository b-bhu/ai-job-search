---
framework_version: 1.0.0
---

# Candidate Profile

## Identity
- **Name:** Bibhu Padhy
- **Location:** Hyderabad, India
- **Phone:** +91 7008255263
- **Email:** bibhupadhy140@gmail.com
- **LinkedIn:** linkedin.com/in/bibhupadhy
- **GitHub:** github.com/bucketshop69
- **X/Twitter:** x.com/bs_dev_
- **Languages:** English (fluent), Hindi (fluent)
- **Status:** Independent / self-employed since Aug 2024, open to new remote roles
- **Constraints:** Targeting fully remote roles; based in Hyderabad, India, not seeking relocation
- **DeFi / trading background (personal, as a user):** ~4-5 years trading experience overall; ~2 years hands-on in DeFi. Started providing liquidity on PancakeSwap (BSC), moved to Solana as Jupiter grew, now primarily active on Meteora (Solana liquidity/DLMM). Distinct from the professional building work since Aug 2024 — this is lived market/user experience that directly informs myBoon's product thesis.

## Education

| Degree | Period | Institution | Key Topics |
|--------|--------|-------------|------------|
| Bachelor's in Computer Applications | (not disclosed) | (not disclosed) | Core CS/programming fundamentals |

## Professional Experience

### Independent Work - Solana / Crypto Products (Aug 2024 - Present)
Remote / Hyderabad, India
- Since 2024, building Solana/crypto products through public projects, hackathons, and product experiments where users need clarity before taking action.
- See Independent Projects below for myBoon, Magic Bet, and LPCLI in detail.

### Senior Front-End Engineer - Winsupply (Apr 2023 - Jul 2024)
Hyderabad, India
- Built React-based internal tools for product and pricing workflows.
- Built spreadsheet-like screens, filters, API-backed views, and data-heavy interfaces.

### Senior Front-End Engineer - Project10k (Dec 2021 - Mar 2023)
- Built React applications and reusable UI components.
- Built a Firebase-backed chat module with theming support.

### Front-End Developer - RRS Solutions (May 2021 - Nov 2021)
Hyderabad, India
- Built React features, Redux Toolkit flows, API integrations, CRUD-heavy business screens.

### Junior Front-End Developer - iCriya (Sep 2017 - May 2021)
Hyderabad, India
- Built Angular modules, forms, dashboards, API integrations, business application features.

## Independent Projects

- **myBoon** (Mar 2026 - Present, pre-beta, actively in development) — github.com/bucketshop69/myboon
  A mobile-first, "context-to-action" crypto app: turns scattered market signals (X, Telegram, dashboards, trading apps, wallets) into remembered entity context, then connects that context to integrated market actions (Polymarket, perps, swaps).
  - Designed the core loop: collect a market signal -> connect it to an entity -> update entity memory -> explain what changed -> help the user decide what to watch or do next.
  - Built the Entity Manager: stores research as entities, claims, evidence, relationships, and timeline updates instead of treating every signal as a one-off feed item.
  - Architected a monorepo: Expo/React Native mobile app, Next.js 15 landing page, Hono API server, Supabase/Postgres database, a Solana transaction-parsing package, pnpm workspaces.
  - Built a multi-stage async data pipeline for market signals (Data Collector -> Researcher -> Editor -> Publisher); Collector and Researcher stages are live in production on a VPS via PM2, the remaining stages are built but not yet in the live rollout.
  - Designed the monetization model: Polymarket builder affiliate revenue, perps/swap fee share, and a planned x402 micropayment API post-MVP.

- **Magic Bet** (Solana Graveyard Hackathon / MagicBlock) — github.com/bucketshop69/magic_bet — **2nd place**
  A real-time betting game where two deterministic AI Snake agents play live and users bet SOL on the winner.
  - Built an Anchor program with round, bet, vault, house, and config accounts; kept money movement on Solana L1 while game execution ran through MagicBlock Ephemeral Rollups.
  - Built the round lifecycle and Node.js crank: open betting, place bet, close betting, run game, settle result, claim winnings, retries, websocket updates, health checks.
  - Built the web client with Phantom wallet connection, live game boards, betting UI, and claim flow.

- **LPCLI** (Nosana Builders Challenge #4 / ElizaOS Challenge) — **3rd place**
  A terminal/onboarding concept where a user pays in SOL, the system swaps to NOS, and NOS rents GPU capacity through the Nosana CLI.

## Technical Skills

### Programming & Frameworks
- **TypeScript / JavaScript** (primary): React, React Native / Expo, Next.js, Node.js, Hono
- **Solana / Anchor** (AI-assisted, not deep Rust fluency): on-chain program development, transaction parsing, wallet integration (Phantom), MagicBlock Ephemeral Rollups
- **Angular** (earlier career): modules, forms, business dashboards
- **Redux Toolkit**, CSS, Firebase

### Domain Expertise
- Crypto/Web3 product design (signal -> context -> action loops)
- On-chain / off-chain architecture
- Entity and data modeling (claims, evidence, relationships, timeline updates)
- Async, multi-stage data pipeline design (collector/researcher/editor/publisher worker pattern)
- Monorepo management (pnpm workspaces)

### Software & Tools
- Claude Code, Codex (AI-assisted development workflow)
- PostgreSQL / Supabase, PLpgSQL
- PM2, VPS deployment
- Git / GitHub

## Publications
None.

## Awards
- 2nd place - MagicBlock / Solana Graveyard Hackathon (Magic Bet)
- 3rd place - Nosana Builders Challenge #4 (LPCLI)

## References
None on file yet — add via `/setup --section references` when available.

Available upon request.
