# Lesson 002 — A program and a running process

Module: M01. State: narrow process-memory checkpoint demonstrated in S002 follow-up B through explanation and learner-reported practice; remaining M01 topics continue in lesson 003.

## Why this lesson comes next

The learner correctly connected the empty cart after restart to initialization and lack of persistent storage. Use that reasoning to distinguish a saved program from a running instance. This changes the introduction order within M01; all remaining roadmap topics still need coverage.

## Objective

Explain that the same saved program can be run in separate processes, each with its own ordinary variables. Distinguish program files on storage from the working memory of each running process.

## Teaching model

- **Program:** The saved instructions; for this example, a JavaScript file.
- **Process:** A running instance of a program. Running the file in two separate processes produces two instances.
- **Working memory:** The state an instance uses while it runs, such as its cart array.

Stopping a process does not normally delete its source file. A new process runs the initialization again; it does not automatically inherit the previous process's array. Similarly, separate processes do not automatically share their ordinary JavaScript variables, even when running the same code on the same computer. Explicit shared storage or communication will be introduced later.

## First prediction

Two separate processes, A and B, run the same backend program. Both initialize `const cart = []`. A request handled by A adds shoes to A's cart. No file, database, or inter-process communication is used.

**Question:** What is in B's cart, and why?

The learner answered this prediction on 2026-10-03. A local demonstration is now prepared using the existing Node.js v24.10.0 runtime; no packages or runtime were installed.

## Evidence

In S002 the learner correctly predicted an empty array in B, without supplying a reason. The earlier explanation explicitly introduced separate variables per process. Record this as a correct guided prediction, not completion of M01.

## Local experiment

Use [cart.cjs](../exercises/001-process-memory/cart.cjs). This is a tutor-written illustration, not an assigned implementation that the learner has completed.

Open two terminal tabs, called A and B. In each, run:

```sh
node /Users/bibhu/Desktop/projects/ai-job-search/learning/exercises/001-process-memory/cart.cjs
```

The program prints its process ID, a number identifying that running instance. In A, enter `add shoes`, then `show`. In B, enter `show`. Ask the learner to report the two outputs before continuing. They can type `exit` in each tab to stop the program.

Tutor verified add/show/exit in a single smoke run with a pencil item. In S002 follow-up A, the learner reported A has ["shoes"] and B has []; these observations match the prediction. The learner used tutor-supplied code and instructions, so this is practical observation rather than independent implementation.

Next variation: stop A with exit, start the same program again in A, and run show. Ask for the result and why the earlier shoes do or do not appear. This variation is pending; do not prefill its outcome as learner evidence.

## Restart result — S002 follow-up B

The learner reported that rerunning shows the initial value and explained that the earlier process stopped and the script starts again. This supplies the previously pending restart observation and explanation. Combined with the A/B observations, it demonstrates the lesson's narrow process-memory checkpoint using tutor-supplied code. It does not establish independent implementation or complete M01.

Continue with [lesson 003](003-cpu-ram-storage.md). Do not repeat equivalent cart questions unless new confusion appears.
