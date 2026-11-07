# Course roadmap

Created: 2026-09-28. Sequence is based on prerequisites, with no schedule or completion estimate.

## Destination

Build and operate a tested backend, write and reason about Rust, develop Solana programs, and connect them to a usable application. Explain the boundaries between a browser, API, database, worker, wallet, RPC service, and on-chain program. Investigate errors using evidence and understand the limits of what tests establish.

This is the practical core for that destination. Software engineering has further specializations; extension subjects appear at the end. Familiar subjects can be demonstrated through checkpoints and shortened. Security, testing, documentation, and explaining decisions recur throughout.

## The route

| Part | Modules | Outcome |
|---|---|---|
| Foundations | M00–M04 | Understand code execution and develop small programs deliberately |
| Backend engineering | M05–M08 | Build an API with persistent data and enforce access rules |
| Reliable systems | M09–M11 | Handle retries, deploy, observe failures, and explain architecture |
| Rust | M12–M13 | Model state, handle errors, and reason about memory and concurrency |
| Solana programs | M14–M17 | Understand transactions and accounts, write programs, test adversarial cases |
| Integration | M18 | Deliver and defend an end-to-end learning project |

Default order is M00 → M18. The Rust branch can begin after M04 if desired; return to the backend modules before the integrated capstone. Solana programming requires the Rust and blockchain foundations. A brief Solana preview can be used for motivation without marking later modules complete.

## M00 — Orientation and a map of an application

**Question:** What actually happens when I click Save?

Lesson sequence: (1) describe a familiar feature; (2) distinguish code, a running program, and stored data; (3) sketch browser → server → database; (4) make a prediction about a failure and identify what we would inspect.

**Practice:** Annotate one small application diagram in your own words. Introduce opening a terminal, running a supplied script, and saving work as needed; advanced tooling can wait.

**Checkpoint:** Explain where an action is handled, where data survives a restart, and one thing you do not yet know how to investigate. This is placement, not an exam on untaught topics.

## M01 — Computers and running programs

**Prerequisite:** M00. **Question:** What does “running code” actually mean?

Lesson sequence: (1) bits, bytes, text encoding, numbers and precision; (2) CPU, memory, disk, and operating system; (3) source code, compilation, interpretation, and runtime; (4) processes, threads, stack, heap, and resource lifetime; (5) files, paths, permissions, standard input/output, exit codes, and environment variables.

**Build:** A small script that reads input, changes a value, writes a file, and reports errors.

**Checkpoint:** Trace a value through the program, predict what survives a restart, and distinguish a syntax error, a runtime failure, and a wrong result. Explain why a process waiting on disk differs from one computing continuously.

## M02 — Programming you can reason about

**Prerequisite:** M01. **Question:** How do I turn a rule into reliable code?

Lesson sequence: (1) values, variables, conditionals, loops, and functions; (2) scope, references, mutation, closures, and side effects; (3) modules, interfaces, composition, and when objects help; (4) errors, promises, and async/await; (5) TypeScript unions, narrowing, generics when useful, and runtime validation; (6) writing a small test from a requirement.

**Build:** A watchlist manager in memory, then persist it to a file. Reject malformed input and duplicate entries.

**Checkpoint:** Implement a variation from a short specification, explain mutation and asynchronous execution, and fix a failing test. Explain why a TypeScript type alone cannot validate data received over a network.

## M03 — Problem solving, data structures, and useful mathematics

**Prerequisite:** M02. **Question:** How do I choose an approach that stays correct as inputs grow?

Lesson sequence: (1) decomposition, pseudocode, examples, invariants, and boundary cases; (2) arrays, maps, sets, stacks, and queues; (3) searching, sorting, recursion, and the basics of trees and graphs; (4) time and space complexity through operation counting; (5) Boolean logic, sets, relations, powers, logarithms, basic probability, and integer/fixed-point arithmetic in context.

**Build:** Deduplicate an event feed and group events by entity. Compare a repeated scan with a keyed lookup; traverse a small dependency graph.

**Checkpoint:** Justify a data structure, predict how work grows, measure a change, and preserve correctness for empty, duplicate, and large inputs. Explain a rounding decision without relying on floating-point currency calculations.

## M04 — The software engineering workflow

**Prerequisite:** M02; M03 supplies problem-solving practice. **Question:** How do I make changes that another person can understand and trust?

Lesson sequence: (1) requirements, acceptance criteria, and breaking a feature into tasks; (2) shell, Git commits, branches, diffs, merge conflicts, and safe undo; (3) dependencies, package managers, lockfiles, formatting, and linting; (4) debugging with a reproduction, stack trace, breakpoint, and hypothesis; (5) unit, integration, and end-to-end tests, test doubles, and regression tests; (6) naming, cohesion, coupling, refactoring, code review, documentation, and short design decisions.

**Build:** Turn the watchlist program into a readable repository with a README and repeatable tests. Review a deliberately flawed change.

**Checkpoint:** Reproduce and fix a bug, add a test that catches it, explain the diff, and resolve a small Git conflict. Describe the limits of the test rather than treating a green check as universal correctness.

## M05 — Networks, the web, and the server runtime

**Prerequisite:** M01, M02. **Question:** How does one program talk to another?

Lesson sequence: (1) IP addresses, DNS, ports, sockets, and latency; (2) TCP, UDP, TLS, and what the layers provide; (3) HTTP requests/responses, methods, status codes, headers, bodies, and JSON; (4) cookies, browser origin rules, CORS, and caching semantics; (5) Node.js, the event loop, asynchronous I/O, blocking work, and connection lifetime.

**Build:** A tiny HTTP server using Node's built-in facilities. Inspect a request using browser developer tools and a command-line client.

**Checkpoint:** Trace a request and response, distinguish DNS failure from connection failure and an application error, and explain why slow synchronous work can delay unrelated requests. Draw the path without memorizing protocol internals.

## M06 — Designing and building APIs

**Prerequisite:** M04, M05. **Question:** What makes an API predictable for its callers?

Lesson sequence: (1) resources, routes, request/response contracts, and REST conventions; (2) validation, middleware, handlers, business logic, and persistence boundaries; (3) errors, pagination, filtering, sorting, and compatibility; (4) configuration, structured logging, request IDs, and dependency boundaries; (5) integration tests and an API contract; (6) compare REST, RPC, and GraphQL by actual needs.

**Build:** A TypeScript watchlist API. Start with the small server, then use one framework such as Hono once you can identify what it supplies.

**Checkpoint:** Add an endpoint from a written contract, reject invalid input consistently, test it through HTTP, and explain the path from handler to response. Separate a business rule from framework glue.

## M07 — Databases and correctness under concurrency

**Prerequisite:** M03, M06. **Question:** How do we store facts without losing their meaning?

Lesson sequence: (1) tables, rows, keys, relationships, types, NULL, and normalization; (2) SQL CRUD, joins, aggregates, and constraints; (3) migrations, parameterized queries, connections, pools, and ORM tradeoffs; (4) indexes and query plans; (5) transactions, isolation, locks, races, and deadlocks; (6) backups, restore practice, and the purpose of a database log.

**Build:** Move the API from temporary storage to PostgreSQL. Add users, watchlists, and events with constraints. Reproduce concurrent duplicate creation and fix it at the appropriate layer.

**Checkpoint:** Design and query a related schema, explain a transaction boundary, demonstrate a concurrency bug and fix, and use a query plan to justify an index. Recover a disposable database from a backup.

## M08 — Identity, access, and backend security

**Prerequisite:** M06, M07. **Question:** Who is making this request, and what may they do?

Lesson sequence: (1) authentication versus authorization and object ownership; (2) password hashing using established libraries, sessions, cookies, tokens, expiry, and revocation; (3) OAuth/OIDC concepts and provider trust; (4) injection, XSS, CSRF, SSRF, and insecure object access; (5) secrets, least privilege, rate limits, dependency hygiene, and safe logs; (6) threat modeling a concrete feature.

**Build:** Add user-scoped access to the watchlist API using an established authentication approach. Write tests for user A attempting to access user B's records.

**Checkpoint:** Show enforcement at the server boundary and explain which identity claims are trusted and why. Trace a session's lifecycle and identify an abuse case. Use vetted cryptographic tools rather than inventing algorithms.

## M09 — Background work and distributed failure

**Prerequisite:** M07, M08. **Question:** What happens when work is repeated, delayed, or only partly finished?

Lesson sequence: (1) tasks, workers, queues, scheduling, and backpressure; (2) timeouts, cancellation, retries, backoff, and idempotency; (3) delivery guarantees, deduplication, ordering, and the outbox pattern; (4) caches, stale data, invalidation, and rate limiting; (5) polling, server-sent events, WebSockets, reconnects, and catch-up; (6) partial failure, replication, consistency, and network partitions through examples.

**Build:** Add an event ingestion worker and live updates to the watchlist. Process the same event twice, crash between steps, and reconnect a client after missed messages.

**Checkpoint:** Explain exactly which effects may repeat, prove an important effect is deduplicated, and recover after a simulated failure. Distinguish “I did not receive a response” from “the operation did not happen.”

## M10 — Deployment, observability, and operations

**Prerequisite:** M09. **Question:** How do we know the system is working after it leaves our laptop?

Lesson sequence: (1) Linux processes, service supervision, configuration, and permissions; (2) builds, containers, networking, volumes, and environment separation; (3) CI/CD, migrations during releases, rollback, and dependency updates; (4) logs, metrics, traces, health checks, and actionable alerts; (5) availability goals, latency percentiles, throughput, load tests, profiling, resource limits, and costs; (6) incident investigation and restoration.

**Build:** Package the learning API and worker for a reproducible environment. Use a local deployment rehearsal first; publish to an agreed environment when desired. Add an automated test pipeline and a short runbook.

**Checkpoint:** Diagnose a failed process using evidence, demonstrate a restart and rollback, restore test data, and explain a performance bottleneck. Keep credentials out of source and logs.

## M11 — Architecture and working in an unfamiliar codebase

**Prerequisite:** M10. **Question:** How do I choose a design and understand someone else's?

Lesson sequence: (1) functional requirements, constraints, and capacity estimates; (2) module boundaries, dependency direction, monoliths, and services; (3) state machines, schemas, API boundaries, and failure diagrams; (4) tracing a feature through an unfamiliar repository; (5) reading library source and validating AI-generated changes; (6) proposing a design, reviewing tradeoffs, and maintaining compatibility.

**Build:** Write a short design for the watchlist system and trace one existing feature in an authorized repository. Make a small isolated improvement backed by tests.

**Checkpoint:** Defend the simplest design that meets the stated needs, identify a scaling pressure with evidence, and explain when splitting a service would help or hurt. Capacity estimates here concern system behavior, not course duration.

## M12 — Rust foundations and ownership

**Prerequisite:** M01–M04. **Question:** How does Rust make ownership of data explicit?

Lesson sequence: (1) Cargo, crates, modules, formatting, compiler messages, and tests; (2) bindings, primitive types, control flow, structs, enums, and pattern matching; (3) ownership, moves, Copy, borrowing, references, and slices; (4) String versus str, collections, and allocation; (5) Option, Result, error propagation, and panic; (6) lifetimes as relationships between references.

**Build:** Rewrite the small file-based watchlist or event parser in Rust. Use focused Rustlings exercises alongside the relevant lessons.

**Checkpoint:** Explain a move and a borrow, repair a compiler error by reasoning about data lifetime, model missing and failed results explicitly, and write tests. Avoid using clone or unwrap as unexplained escape hatches.

## M13 — Rust for larger systems

**Prerequisite:** M12. **Question:** How do I design useful Rust components?

Lesson sequence: (1) traits, generics, iterators, and closures; (2) modules, public APIs, dependencies, and serialization; (3) Box, Rc, Arc, interior mutability, and when each is justified; (4) threads, channels, locks, Send/Sync, and async as distinct concepts; (5) integration tests, property tests, profiling, and reading unfamiliar crates; (6) safe/unsafe boundaries and what a code review must establish.

**Build:** A tested event-processing library and small CLI with clear error types. Add one bounded concurrency exercise; extensive async service development is optional.

**Checkpoint:** Explain ownership across a component boundary, choose an error representation, and reason about shared state. Distinguish ordinary off-chain Rust capabilities from a restricted on-chain runtime.

## M14 — Blockchain foundations

**Prerequisite:** M03; M09 is useful for failure reasoning. **Question:** What changes when multiple parties must agree on shared state?

Lesson sequence: (1) ledgers, state transitions, double spending, and why use a blockchain; (2) hashes, public/private keys, digital signatures, and encoding versus encryption; (3) validators, consensus, ordering, finality, and forks at a conceptual level; (4) wallets, signed messages, transactions, fees, and RPC services; (5) custody, permissions, and on-chain/off-chain responsibilities.

**Build:** Simulate a tiny ledger, then inspect a public transaction and identify its inputs, signers, and effects. Use a toy ledger only to learn; it is not a consensus implementation.

**Checkpoint:** Explain what a signature proves and does not prove, distinguish an RPC server from the network, and justify which application rules need shared on-chain enforcement.

## M15 — Solana's execution model

**Prerequisite:** M12, M14. **Question:** What code runs, and which accounts may it change?

Lesson sequence: (1) addresses, account data, lamports, program ownership, and authorities; (2) programs, instructions, account lists, signers, and writable privileges; (3) transactions, atomic execution, fees, compute budgets, logs, and simulation; (4) program-derived addresses, seeds, bumps, and signing during a CPI; (5) cross-program invocations and validation of the called program; (6) commitments, confirmation, blockhash expiry, account locks, and transaction size limits.

**Build:** Inspect accounts and transactions using a current supported client. Draw an instruction's required accounts. Run and inspect a tiny native Rust program example before adding framework abstractions.

**Checkpoint:** Distinguish an account's owner program from an application authority, explain how program code and mutable state are stored separately, and identify who can authorize a change. Derive a PDA and explain its role without treating it as a private key.

## M16 — Writing programs with Anchor

**Prerequisite:** M13, M15. **Question:** How do I turn state-transition rules into a program?

Lesson sequence: (1) project layout, instruction handlers, account structs, serialization, discriminators, and the IDL; (2) initialization, account space, seeds, and lifecycle; (3) signer, owner, address, authority, and relationship constraints; (4) business invariants, errors, events, and checked arithmetic; (5) CPIs, PDA signing, and a client call; (6) local testing, devnet deployment, upgrade authority, and verifiable builds.

**Build:** Start with an authority-controlled counter, then a per-user record. Add a small vault or escrow only after the account and authorization model is understood.

**Checkpoint:** Implement a fresh instruction from a specification, explain every account and constraint, test unauthorized and invalid transitions, and investigate a failing transaction from its logs. Explain which validation Anchor supplies and which business rules remain your responsibility.

## M17 — Tokens, program security, and adversarial testing

**Prerequisite:** M16. **Question:** What assumptions could an untrusted caller violate?

Lesson sequence: (1) mints, token accounts, associated token accounts, decimals, delegates, and authorities; (2) token-program identity, token interfaces, and Token-2022 extension implications; (3) wrong signers, wrong owners, substituted accounts, seed errors, reinitialization, and duplicate accounts; (4) arbitrary CPIs, account closing, arithmetic, rounding, state transitions, and custody invariants; (5) oracle freshness, slippage, transaction ordering, and economic assumptions where relevant; (6) negative tests, property tests, fuzzing, and review of upgrade powers.

**Build:** A constrained test-token escrow with explicit create, accept, and cancel transitions. Write the invariants before implementation. Use local tests and then devnet test assets.

**Checkpoint:** Demonstrate that the wrong user, mint, recipient, or program is rejected; prove the escrow cannot be released twice; exercise edge amounts and cancellation races. Explain the scope of the test suite and remaining assumptions. Passing this module is learning evidence, not an independent security audit.

## M18 — The complete application

**Prerequisite:** M11, M17. **Question:** Can I connect the pieces and explain what happens when one fails?

Lesson sequence: (1) define an end-to-end feature and threat model; (2) connect frontend, wallet, client SDK, RPC, and program; (3) implement an off-chain API and database projection where useful; (4) ingest events, backfill gaps, deduplicate, and reconcile with chain state; (5) manage signing UX, simulation, transaction lifecycle, expiry, retries, and uncertainty; (6) test, document, demonstrate, and review the system.

**Capstone:** A devnet escrow application with a simple interface, a Rust/Anchor program, and a backend activity feed. Keep the feed a derived view; write down which on-chain state is authoritative. An alternative capstone can be chosen if it exercises equivalent skills.

**Final demonstration:** Trace one action from the browser to its stored consequences. Build a requested variation, debug a deliberately introduced failure, show denial of an unauthorized action, recover from missed events, and defend the design. Produce a README, account diagram, test evidence, and operational notes.

## Projects that connect the modules

| Project | Starts | Grows into | Evidence we keep |
|---|---|---|---|
| Watchlist | M02 | File persistence → HTTP API → SQL → access control → ingestion and live updates → deployment | Your code, tests, debugging notes, and design decisions |
| Rust event tool | M12 | CLI → library → error handling and concurrency exercise | Compiler reasoning, tests, and a new independent variation |
| Solana program | M15 | Account inspection → counter → user record → vault/escrow | Account diagrams, instruction reasoning, and negative tests |
| Integrated capstone | M18 | Wallet + program + API + reconciled feed | End-to-end demonstration and failure recovery |

These are learning projects. We can later connect the lessons to myBoon or Magic Bet using their actual code, without assuming those repositories have been inspected here.

## Extensions after the core

Choose these based on the work you want to do. They are not all prerequisites for a useful first application.

- **Deeper computer science:** operating-system internals, compiler construction, automata, more discrete mathematics, algorithm proofs, and advanced data structures.
- **Backend specialization:** database internals, replication and sharding, consensus algorithms, search engines, advanced stream processing, orchestration, and multi-region operation.
- **Rust specialization:** advanced async services, macros, FFI, embedded work, unsafe-code auditing, and performance engineering.
- **Solana specialization:** SVM internals, native program optimization, zero-copy layouts, advanced transaction construction, state compression, wallet infrastructure, and validator/RPC operations.
- **Protocol engineering:** AMM and lending mathematics, oracle design, liquidation, governance, formal methods, economic attack analysis, and independent audits.

## How checkpoints work

For each relevant skill, gather evidence that you can explain it, apply it, debug it, and transfer it to a new problem. Documentation and syntax lookup are always allowed. A later review checks whether the idea remains available without replaying the original walkthrough. Status definitions and current evidence live in [progress.md](progress.md); supporting references live in [resources.md](resources.md).
