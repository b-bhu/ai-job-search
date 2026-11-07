# Drill: practical system design (inspired by a hiring post)

## Source (what the post actually says)
- Link: https://x.com/samposwal/status/2088290167954223517
- Author: Sameer Poswal (@samposwal), bio "Founding Engineer @ReferRush". Posted 14 Aug 2026 (21:12 IST). Quotes his earlier post: "Terrible experience while interviewing candidates." Fetched 7 Nov 2026 via X API; no media attached.
- Summary of the post:
  - ~20 of 200+ applicants interviewed; he and @kanishktwt blocked 4 hrs/day, Mon–Fri. 4 candidates sent to CEO @vikpai for a culture-fit round.
  - Interview format: introduction; explain/show your best work; 1 system design problem; technical questions in the candidate's niche.
  - System design questions were systems they had built or will build, not "design an elevator":
    1. A payout service that pays eligible referrers when rewards mature.
    2. An email follow-up system that reminds users who haven't referred anyone.
    3. An internal wallet for merchants to manage referral/affiliate payouts.
  - Observed failures: over-engineering and jargon; no basic pseudocode; no schema; trouble mapping relationships between two services.
  - Bar: no optimisation, no full implementation, brute force fine — just the right schema and core logic. By day 3 they shortlisted anyone ~60% right.
  - Projects: when asked to explain an opened file of their own project, half went blank; one couldn't say whether they used custom auth or an auth provider. "No hate for agentic coding", but not knowing your own code is a red flag.
  - Closing: not blame; much of the crowd is noise; the bar "isn't necessarily getting higher."

## Our adaptation (teaching design, not from the post)
Run one round per session, one problem at a time. Learner answers in his own words first; tutor gives hints progressively and records only what he actually produced.

1. **Pick a problem** (one of the three above). Learner restates the requirement in plain English and asks clarifying questions.
2. **Schema first:** tables/fields, keys, and the relationship between entities (e.g. referrer, referral, reward, payout).
3. **Core logic in pseudocode, brute force OK:** e.g. "find matured, unpaid rewards → pay → mark paid". Probe: what if it runs twice? (idempotency), what if the payment fails halfway? (state update order — same idea as `pay` in the NEAR spec).
4. **Two services talking:** draw the boundary (e.g. rewards service ↔ payout/wallet service, or user service ↔ email scheduler) and what data crosses it.
5. **Own-code walkthrough:** learner opens a file from his own project (e.g. MyBoon, read-only) and explains what it does and choices like auth. Tutor does not read for him.
6. **Debrief:** what was right, gaps, one variation for next time. No scores invented.

Anti-patterns to avoid (from the post's observations): jargon instead of a schema, over-engineering before core logic works.
