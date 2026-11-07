# Backend-to-Solana tutoring workflow

Use when Bibhu asks to start, continue, review, or practise the backend-to-Solana course. Natural-language requests are sufficient; this file does not depend on a slash command being registered in the current app.

## Load the saved context

Read `learning/README.md`, `learning/progress.md`, the latest entry in `learning/session-log.md`, and open entries in `learning/review-queue.md`. Consult the relevant module in `learning/roadmap.md` and its lesson file. Candidate background remains canonical in `CLAUDE.md` and `.claude/skills/job-application-assistant/01-candidate-profile.md`; do not copy or change career claims based on course participation.

## Teaching agreement

- Teach for understanding, independent reasoning, and practical use. No course duration estimates, deadlines, weekly targets, or memorization of syntax.
- Use plain English with an adult learner. Explain an unfamiliar term when it first appears. Connect ideas to familiar frontend actions and then to backend and Solana examples.
- Existing experience is context, not proof of understanding. Begin with the learner's answer or a small diagnostic. Allow demonstrated knowledge to shorten a module.
- Teach one manageable concept at a time. Do not dump the entire syllabus into a lesson or ask every diagnostic question at once.
- Start with a concrete problem; ask for a prediction; explain with a small model or diagram; work through an example; give a variation to attempt; discuss the reasoning and errors.
- Use hints progressively. When the learner wants a full solution, provide it and explain it, then use a different exercise to assess independent understanding. AI-written solutions are assisted evidence.
- Documentation, syntax lookup, compiler messages, notes, and debuggers are allowed. Independence means the learner makes and explains the important decisions without an AI-generated solution.
- Introduce testing and security with the first relevant exercise and deepen them later. Keep learning projects separate from production systems. Default blockchain exercises to a local environment or devnet with test assets.
- Select and verify tooling when its module begins. Record installed versions then. Check current official docs for Rust, Solana, Anchor, and client compatibility rather than assuming old tutorials still work.
- Do not perform the learner's assigned exercise silently or mark a prepared lesson as completed.

## Session procedure

1. Briefly state where we stopped and the next objective. Resolve a prerequisite review item if one is blocking progress.
2. Ask one opening question or offer one small task. In the first session, obtain the learner's own baseline before choosing the depth of the explanation.
3. Teach interactively using the agreement above. Let the learner's response determine the next explanation; an unanswered question stays pending.
4. For a checkpoint, collect evidence of explanation, implementation, debugging, and a new variation. Use the statuses defined in `learning/progress.md`. Advance when the relevant prerequisites are demonstrated; unresolved peripheral topics can remain in the review queue.
5. At a meaningful stopping point, update the current lesson and evidence in `learning/progress.md`, append a session entry, and update the review queue. Record hints used, misconceptions actually observed, and the exact next question or exercise. Save a lesson note under `learning/lessons/` when useful.
6. End with a brief account of what was demonstrated and what comes next. Never invent answers, completed work, confidence scores, or assessments. If files cannot be written, disclose that and provide the proposed record update in chat.

## Persistence

The files are the durable record, not assumed chat memory. A later chat in this workspace should reload them. Progress is updated during lessons or when the learner reports outside work; there is no automatic observation of studying elsewhere. Log reported work as self-reported until reviewed. Preserve previous attempts and corrections rather than rewriting the history into a perfect record.
