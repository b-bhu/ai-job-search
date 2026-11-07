# Learning progress

Last updated: 2026-10-04.

## Resume here

- **Course state:** Learner requested another explanation of binary conversion; re-teaching through on/off switches.
- **Current module:** M01 — Computers and running programs.
- **Current lesson:** [005 — Reading a binary number](lessons/005-reading-binary.md), switch model and worked 110 example supplied; assisted interaction pending.
- **Current pending task:** Turn all three switches off, turn on only the switch labeled Value 1, and report the total.
- **Next teaching action:** Respond to the learner's observation, then check what a 1 or 0 contributes with a fresh small pattern. Do not advance to larger bit widths until the place-value model is understood. R004 remains open.
- **Latest session:** S003 follow-up G — Requested clarification; interactive switch explanation.
- **Assessed competencies:** M00 conceptual orientation; M01 process-local state observed in tutor-supplied code by learner report, with restart initialization explained correctly. Lost-response uncertainty was recognized with guided choices. No independent implementation, advanced failure handling, or whole-module M01 mastery assessed.
- **Toolchain:** Existing Node.js v24.10.0 verified on 2026-10-03; no installation or external packages needed for the first experiment. Tutor smoke-ran the supplied program. Learner reported A/B outputs and the return to the initial value after restart.

## Learning preferences

Confirmed by the learner: structured teaching from software engineering foundations through backend development to Solana programs in Rust; persistent records; understanding rather than memorization; no time estimates.

Learner's self-report on 2026-09-28: “I can build some frontend, but backend is new.” Use JavaScript/TypeScript to connect to that experience, then SQL and Rust. Teach backend from the beginning; assess programming foundations through small exercises rather than assuming either mastery or no prior knowledge. Current independent proficiency has not been assessed.

## Status definitions

| Status | Meaning |
|---|---|
| Not started | No teaching or assessment evidence yet |
| Learning | Introduced; explanations and guided practice are underway |
| Practising | Can do parts, with specific gaps or hints still recorded |
| Demonstrated | Relevant explanation, implementation, debugging, and transfer checks passed with decisions made by the learner; documentation allowed |
| Retained | Demonstrated again in a later session or project variation |
| Needs review | Later evidence exposed a gap; keep the previous evidence and record what changed |

Status is about observed work, not motivation, intelligence, career seniority, or a percentage of readiness. For conceptual modules, a trace, prediction, diagram, or simulation can be the practical evidence. A completed reading is not itself a demonstrated competency.

## Module record

| ID | Module | Status | Evidence / next checkpoint |
|---|---|---|---|
| M00 | Orientation | Demonstrated | Conceptual orientation only: initial system trace, conditional success reasoning, guided failure prediction, and explained shopping-cart restart variation (S001 A–E). R001 resolved; later retention check still needed. |
| M01 | Computers and programs | Learning | Process-memory experiment and resource distinction recorded; beginning bits/bytes in lesson 004. Remaining module topics and independent implementation pending. |
| M02 | Programming | Not started | — |
| M03 | Problem solving and data structures | Not started | — |
| M04 | Engineering workflow | Not started | — |
| M05 | Networks and runtime | Not started | — |
| M06 | APIs | Not started | — |
| M07 | Databases | Not started | — |
| M08 | Identity and security | Not started | — |
| M09 | Background work and distributed failure | Not started | — |
| M10 | Operations | Not started | — |
| M11 | Architecture and code reading | Not started | — |
| M12 | Rust foundations | Not started | — |
| M13 | Rust systems | Not started | — |
| M14 | Blockchain foundations | Not started | — |
| M15 | Solana execution model | Not started | — |
| M16 | Anchor programs | Not started | — |
| M17 | Tokens and program security | Not started | — |
| M18 | Integrated capstone | Not started | — |

## Competency evidence

Evidence is limited to what the learner has actually explained or performed. Initial explanations do not by themselves establish implementation or transfer skills.

| Module / concept | Lesson / exercise | Evidence from learner | Assistance used | Status | Session |
|---|---|---|---|---|---|
| M00 / save and retrieve across devices | 001 opening question | Described client/API saving to a database, associating a note with a user, and retrieving it on a phone after signing in as the same user | Own explanation in response to the scenario; no worked solution provided in this lesson before the answer | Learning; initial conceptual evidence only | S001 follow-up A |
| M00 / storage lifetime | 001 array-only restart prediction | Said data saved in the database remains retrievable when the API is available again; returned to the database premise rather than answering the array-only case | Array-only scenario supplied; explicit memory/storage distinction taught after this answer | Learning; database persistence recognized conceptually, array lifetime still to check | S001 follow-up B |
| M00 / meaning of a success response | 001 clarified A/B question | Proposed server-side conditions that return HTTP 200 only after a successful save; suggested refetching the exact text as another check but considered that less suitable | Tutor clarified two implementations with identical success responses; learner proposed the conditional response and refetch ideas | Learning; recognizes dependence on server logic, storage durability and readback limits clarified afterward | S001 follow-up C |
| M00 / client knowledge after a missing response | 001 lost-response prediction | Answered “uncertain” when the database saved the note but the response did not reach the phone | Chose among three supplied outcomes after the scenario explicitly distinguished system state from client knowledge | Learning; correct guided prediction, independent explanation and transfer still pending | S001 follow-up D |
| M00 / memory versus persistent storage | 001 shopping-cart restart variation | Predicted an empty cart and explained that a restart initializes the array again, with no durable copy of the old value to recover | Earlier note-array walkthrough and explicit no-database premise; learner supplied the cart prediction and causal explanation without a solution for this attempt | Demonstrated at a conceptual level; later retention and executable practice pending | S001 follow-up E |
| M01 / separate process state | 002 first prediction | Correctly predicted that process B returns an empty array after shoes are added only to A | Previous explanation that separate processes have their own variables; learner gave the outcome without an accompanying reason | Learning; correct prediction, independent explanation and practical observation pending | S002 |
| M01 / separate process state | 002 two-terminal experiment | Reported A has ["shoes"] and B has [] after adding shoes only in A | Tutor supplied the full demonstration program and run instructions; outputs are learner-reported, not independently observed | Practising this concept; matching practical observation, explanation and restart variation pending | S002 follow-up A |
| M01 / process restart and initialization | 002 restart variation | Reported the initial value after rerunning and explained that the prior process stopped and the script starts again | Tutor-provided program and restart instructions; learner supplied the observation and explanation | Demonstrated for this process-memory concept through explanation and reported practice; no independent implementation claimed | S002 follow-up B |
| M01 / memory occupied versus CPU work | 003 resource prediction | Identified the held notes as being in RAM and reasoned that without instructions being executed there is no processing work | Resource roles explained beforehand; tutor subsequently qualified that a waiting app can still have background work and other processes may use CPU | Demonstrated for the narrow conceptual distinction; no resource measurement performed | S003 |
| M01 / bit-pattern counting | 004 four-bit variation | Wrote 2 choices × 2 choices × 2 choices × 2 choices = 16 after correctly identifying 0 or 1 for each bit | Prior two/three-bit enumeration and correction; learner supplied the new multiplication and result | Demonstrated through repeated multiplication; power notation not independently reassessed | S003 follow-ups C–D |
| M01 / zero-based count versus last index | 004 five-item array | Self-corrected the answer to 0, 1, 2, 3, 4 before tutor feedback on the attempt | Prior four-value example supplied; tutor connected the corrected five-index list back to 256 values and byte maximum 255 afterward | Demonstrated for small zero-based enumeration; larger byte range reviewed, not independently re-derived | S003 follow-up F |

## Project record

| Project | State | Location / evidence |
|---|---|---|
| Watchlist backend | Planned | No code created |
| Rust event tool | Planned | No code created |
| Solana learning program | Planned | No code created |
| Integrated devnet capstone | Planned | No code created |

## Small experiments

| Experiment | State | Location / evidence |
|---|---|---|
| Separate process carts | Completed by learner report; restart explained correctly | [cart.cjs](exercises/001-process-memory/cart.cjs); A ["shoes"], B [], then initial value after restart (S002 follow-ups A–B). Program supplied by tutor. |
