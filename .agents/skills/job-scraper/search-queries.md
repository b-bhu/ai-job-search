# Search Queries for Job Scraper

## Discovery channel note (important)

Bibhu's target roles (Product Engineer / Web3-fintech, high-ownership remote startups) are frequently posted **directly on X/Twitter by founders**, often before or instead of appearing on any job board. This framework has no X/Twitter search CLI (no public search API without paid/authenticated access), so `/scrape` covers only the **secondary** channel below. The primary channel is manual: Bibhu finds postings on X himself and brings them to `/apply` directly.

## Installed portal CLIs (secondary for `/scrape`)

`/scrape` discovers every portal skill under `.agents/skills/*/SKILL.md` and runs its CLI first. Shipped country-agnostic CLIs include `linkedin-search` and `freehire-search`. Danish portal CLIs (jobbank, jobdanmark, jobindex, jobnet) are installed but not relevant to this search (Denmark-specific).

The `site:` query templates below are the **WebSearch fallback** — for portals without a CLI, company career pages, or when a CLI fails.

## Search Sites

Primary (secondary channel for this profile):
- **linkedin.com/jobs** — filter: Remote; also covered by `linkedin-search` CLI
- **freehire-search** CLI — country-agnostic job aggregation

Secondary (company career pages via Google):
- Direct Google searches with `site:` filters for known target companies (e.g. Squads-protocol-adjacent fintechs, Solana-native startups)

## Query Categories

### Priority 1a: Product Engineer / Full-Stack Web3

Equal-priority lane #1.

```
site:linkedin.com/jobs "Product Engineer" Solana remote
site:linkedin.com/jobs "Full-Stack Engineer" Web3 remote
"Product Engineer" Solana remote hiring
"Founding Engineer" Solana TypeScript React remote
```

### Priority 1b: Developer Relations / Developer Advocate (Solana/crypto)

Equal-priority lane #2. Bibhu builds real Solana products (myBoon, hackathon placements) and can communicate technical work clearly — a strong DevRel fit.

```
site:linkedin.com/jobs "Developer Relations" Solana remote
site:linkedin.com/jobs "Developer Advocate" Solana remote
"Developer Relations engineer" crypto Web3 remote hiring
"DevRel" Solana remote
```

### Priority 2: Solana / Crypto Domain

These match direct domain expertise (on-chain product building, Anchor, Solana infra).

```
site:linkedin.com/jobs Solana Anchor TypeScript remote
"Solana engineer" React remote hiring
Solana fintech "product engineer" remote
```

### Priority 3: Adjacent Roles

Roles Bibhu could pivot into using the same skill base.

```
site:linkedin.com/jobs "Frontend Engineer" crypto remote
site:linkedin.com/jobs "Full-Stack Engineer" fintech remote
"Web3 frontend engineer" React remote
```

### Priority 4: Broader Technical (wider net)

General remote React/TypeScript roles as a fallback.

```
site:linkedin.com/jobs "React developer" remote TypeScript
site:linkedin.com/jobs "Full-Stack developer" remote React Node
```

## Location Filter

Bibhu is based in Hyderabad, India, and is targeting **fully remote roles only** — no relocation.

- Remote (global or US/EU-friendly time zones): ideal
- Remote with occasional required overlap hours: acceptable, evaluate case by case
- Hybrid or in-office (any location): too far / not a fit
- Relocation required: too far / not a fit

## Date Filter

Only include jobs posted within the last 14 days, or with an application deadline that has not yet passed. If a posting date cannot be determined, include it but flag as "date unknown".

## Adapting Queries

If the user specifies a focus area, select queries from the matching category and also generate 2-3 custom queries for that focus. For example:
- "/scrape founding engineer" -> Priority 1 queries + custom founding-engineer-specific queries
