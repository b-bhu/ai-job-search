# Lesson 001 — What happens when you click Save?

Module: M00. State: conceptual orientation checkpoint demonstrated in S001 follow-up E. Executable practice and later retention checks remain future work.

## Learning objective

Explain, in your own words, the jobs of a browser, a server, and persistent storage in one familiar interaction. We will use this map repeatedly as the course grows.

## Start with your model

Imagine a small app where you type a note and click Save. Later, you open the app on another device and the note appears.

**Opening question:** What do you think happens between clicking Save and seeing that note on the other device? Use everyday language. “I don't know this part” is a useful answer.

Tutor: ask this question and respond to the learner's model before presenting the explanation below. Do not require technical vocabulary or treat a gap as a failure.

## A small model to work with

For this example, assume a web app whose server stores notes in a database:

```text
Browser                    Server                    Database
You enter a note
    ── save request ──────> checks the request
                                ── store note ──────>
                                <── saved result ────
    <── response ──────────
You see the result
```

The browser is running the interface you interact with. The server is a running program that receives requests and applies rules. The database stores records and can keep them after the application process stops. A second device can ask the server to retrieve the saved note.

Here, a **request** is a message asking for something, and a **response** is the message sent back. An **API** is the agreed way programs interact. We will inspect a real request when we reach the web module.

An update on the screen can happen before storage finishes, so seeing a note does not by itself establish that it was saved. Also, browsers can store some data locally; the database in this diagram is a choice in this example, not a rule that every application must follow.

Reference for the web conversation: [MDN's overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview).

## Guided predictions

Ask one at a time and discuss the reason:

1. The page changes, but no request is sent. What might happen on the other device?
2. The server keeps notes only in a variable. What happens when that process restarts?
3. The database saves the note, but the response never reaches the browser. What can the browser know for certain?

The third question is a preview of failure reasoning. We will build the tools for dealing with it later; a complete retry design is not expected now.

## Your exercise

Draw or describe the same journey for adding an item to a shopping cart. Name the job of each component and choose one place where the interaction could fail. Then explain what you would want to inspect to learn whether the item was saved.

## Evidence to record after the discussion

- The learner's initial explanation, including uncertainty.
- A distinction they can now make in their own words.
- Their shopping-cart variation and which help was needed.
- Any misconception that actually appeared and the next question to revisit it.

## Learner evidence — S001 follow-up A

The learner described a client/API saving the note in a database, the need to identify the right user, associating the note with that user, and retrieving it from the same database after signing in on a phone. This supports an initial understanding of the flow; authentication mechanics, implementation, and failure handling remain unassessed.

Next: predict what happens when the backend stores notes only in a variable and restarts. Use the answer to introduce running programs, memory, and persistent storage. No module checkpoint has been passed yet.

## Learner evidence — S001 follow-up B

The learner explained that database-saved data remains retrievable when the API becomes available again. Their answer returned to the database scenario instead of the stated array-only experiment. Treat this as a distinction to clarify, not proof that they believe arrays persist.

Teaching example: backend starts with `notes = []`; a request adds a note; the process stops; a new process runs the initialization and starts with `notes = []`. Explain the array as process working memory and a persistent database as using durable storage. An API exposes operations; backend code determines whether those operations involve memory, files, a database, or another service.

Next check: does an API response saying “Saved successfully” establish that the note survives restart, and what else would we need to know? Review item R001 remains open until the learner explains the distinction.

## Learner evidence — S001 follow-up C

After the A/B question was clarified, the learner proposed returning HTTP 200 only when server-side conditions establish a successful save. They also suggested refetching the exact text but considered that less suitable. This shows attention to the backend condition; do not infer that array lifetime or durable storage has been independently demonstrated.

Explain the successful database write as the condition for this API's success response. A refetch can update the UI or check current readability but does not by itself prove persistence: an in-memory array can serve a read too.

Next: the database saves the note but the success response is lost. Ask what the phone can conclude, distinguishing its knowledge from the actual database state. Revisit R001 through the shopping-cart exercise afterward.

## Learner evidence — S001 follow-up D

The learner correctly chose “uncertain” for the phone's knowledge when the database has saved the note but the response is lost. This was a guided choice, not yet an independent explanation or project demonstration.

Next transfer check: a shopping-cart backend starts with an empty array, adds shoes and returns 200, but performs no file or database write. After the backend process restarts, ask what the cart request returns and why. R001 remains open pending that answer.

## Learner evidence — S001 follow-up E

The learner predicted an empty cart and explained that startup initializes the variable to an empty array again and there is no persistent copy from which to recover the previous values. This resolves R001 at the conceptual level. Earlier assistance and the initially missed premise remain in the record.

M00's opening orientation checkpoint is demonstrated through the accumulated verbal work. Continue with [lesson 002](002-program-and-process.md) to name and examine the distinction between a saved program and its running processes. Revisit memory lifetime with actual running code later.
