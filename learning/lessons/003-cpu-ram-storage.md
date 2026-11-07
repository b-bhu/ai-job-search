# Lesson 003 — CPU, RAM, and storage

Module: M01. State: narrow resource distinction explained by the learner in S003; continuing to data representation.

## Objective

Connect the process-memory experiment to the computer's resources. Distinguish holding working data from actively executing instructions.

## Teaching model

| Resource | Job | Connection to the cart example |
|---|---|---|
| CPU | Executes machine instructions to perform work | Carries out the operations needed to handle a command and update the cart |
| RAM | Provides working memory for running programs | Holds the process's working code and data, including the cart values |
| Storage, such as an SSD | Holds saved files beyond a process's lifetime | Holds the saved JavaScript file and would hold a deliberately saved data file |

Node.js is the runtime used to run this JavaScript program. The CPU ultimately executes machine instructions; do not imply that it directly reads JavaScript source as native instructions. Explain how the runtime gets from source to execution in a later step, rather than adding engine internals to this first resource distinction.

Memory use describes the space occupied; CPU use concerns processing work. Keeping data in memory does not by itself require continuous intensive processing. Real programs may also perform background work; focus on the stated scenario, not a universal zero-CPU claim.

## First prediction

An app holds a million notes in memory but is currently waiting for input. Does holding all that data necessarily mean its CPU usage is high, and why?

Use a small comparison between holding an array and actively looping through it if further explanation is needed. Do not generate a large workload on the user's machine for this conceptual question.

## Evidence

In S003, the learner identified the held notes as being in RAM and reasoned that without instructions being executed there is no processing work. This demonstrates the narrow distinction between occupied memory and processing. Qualify that waiting for user input does not guarantee literally zero CPU usage, because the app can do background work and other programs can use CPU resources. Do not turn this refinement into a presumed broad misconception.

No resource profiling or independent implementation has been performed. Continue with [lesson 004](004-bits-bytes-values.md). Numeric precision, compilation and interpretation, operating-system responsibilities, threads, stack/heap, and file/error-handling exercises remain on the M01 roadmap.
