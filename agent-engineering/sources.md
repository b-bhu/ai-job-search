# Source notes and coverage

The course distills source material already reviewed in the originating conversation. Our examples apply the ideas to a solo TypeScript/Solana builder. They are adaptations, not direct speaker claims about MyBoon, Warren, Codex or Hermes.

## 1. Lauren Tan's agent-engineering talk

[Source on X](https://x.com/poteto/status/2102050467505430555), duration 38:01. Native captions read fully and key slides inspected. No claim of full audiovisual review.

- Trust and the kitchen/environment model: lesson 01.
- App-specific verification CLIs, 8:37–12:29: lessons 04–05.
- Quality versus correctness: lesson 03.
- Constraint hierarchy, 16:30–18:30: lesson 06. Codebase patterns, static analysis/compiler/lint/CI, rules, skills, style guide.
- Gardening and preventing new violations, 24:30–26:41: lesson 07.
- Private restrictive Electron framework Dune, 26:43–30:35: lesson 16. It is not a public dependency we can assume is installable.
- Outer incoming-work loop with Slack/Sentry/Datadog examples, 32:36–35:12: lesson 14. No integrations added by this course.
- Reported PR counts include maintenance. The post's 2,500 and spoken/title 2,000 figures remain unreconciled. They are self-reported and are not course targets or independently verified success metrics.

## 2. Matt Pocock / Lauren Tan interview

[Video](https://www.youtube.com/watch?v=MN9dGgmLyso). Full English auto transcript through 1:05:34 read, 1,706 lines. No full audiovisual review. Auto captions can contain errors.

- Expertise and clear intent, 2:09–10:21: lessons 02 and 04. Avoid tests that merely copy the implementation.
- Kitchen model, 11:20–15:10: lesson 01.
- Change/run/observe/compare/correct, 16:14–19:22: lesson 04.
- Repeated Playwright/Chrome operations extracted to deterministic CLIs, 19:39–24:50: lesson 05.
- Types, boundaries and micromanagement, 25:05–32:57: lessons 02 and 06.
- Inner task snapshots and outer evolving context, 34:36–39:48: lesson 14.
- Coordinators grouping shared causes, 40:49–45:07: lesson 15.
- Gardening evidence before edits, 45:51–48:59: lesson 07.
- Humans sample output and improve process, 49:34–51:45: lesson 17.
- Ten-plus coordinators, verifier loops and overnight merging reported at 51:55–54:42: lesson 15. High token use and no independently verified outcome metric.
- Irreversible actions remain unresolved, 55:44–59:26: lessons 10 and 17. Tests/proofs do not make losses reversible.
- Skills from real corrections and recall, 1:00:35–1:04:42: lesson 16.

[pstack official README](https://github.com/cursor/plugins/blob/main/pstack/README.md) was previously checked in the originating discussion. It describes reusable workflows, not the whole orchestration/context infrastructure. At that check, setup-pstack covered model/budget choice, poteto-mode routing, autopilot-full through merge, and autopilot-stack for operator review. These are documentation details separate from the interview. This course offers no installation steps and makes no assumption that these names remain current. Verify official documentation before any future execution.

## 3. Runar Bjarnason, Constraints Liberate, Liberties Constrain

[Video](https://www.youtube.com/watch?v=GqmsQeSzMdw). Full auto transcript of 1,283 lines through 51:12 of a 51:39 video read. No full audiovisual review.

- Expressive power versus ability to reason: lessons 08 and 11.
- Printer commands losing structure, 0:51–2:56, SQL strings, 2:59–3:58, descriptions before effects, 4:00–5:20: lessons 08 and 10.
- Preserve exact mathematics, 6:10–8:33: lesson 09. Source versus bytecode, 8:35–11:18, early loss of precision, 11:21–14:48: lessons 08–09.
- Generic A → A under purity, totality and parametricity, 15:01–17:29: lesson 11. TypeScript's casts, globals, exceptions and nontermination weaken this argument. A TS signature alone is not a proof.
- Functor, applicative and monad, 17:31–22:56: lesson 12. Nested applicatives compose generically. Arbitrary monads need extra structure. Promise examples illustrate dependency patterns, not a proof of algebraic laws.
- Actors/futures historical discussion, 23:00–27:00, pure substitution, 27:11–29:08, least privilege, 29:10–30:48: lessons 10–12. Treat historical criticism in its original context rather than a claim about every modern runtime.
- Small adequate languages, 34:25–35:19: lesson 08.
- Galois connections, 35:22–43:18: optional lesson 13. For ordered concrete C and abstract A views, the conventional adjunction relation is α(c) ≤ a iff c ≤ γ(a). Set examples depend on inclusion order, so name the order before using subset/superset wording. The chair analogy gives intuition, not a full formal construction or a bijection.
- A visible comment by @helvitisdrasl corrects 43:09 to “A is a superset of”. Attribute this to the comment, without assuming the commenter's identity is verified. Do not repeat the mistaken relation as a theorem.
- Currying, 43:18–47:03, free/forgetful constructions and lists/free monoid, 47:05–47:56: optional lesson 13. A free construction adds only the structure needed to obey its laws. A forgetful view omits structure. List concatenation is associative and the empty list is its identity. The full adjunction proof belongs to a later optional discussion.

## Our practical adaptation

Lessons 09–10 and 18 use exact integer token units, semantic types, runtime parsing of external data, and explicit transaction outcomes. Construction, signing and submission remain distinct. Simulation supplies evidence, not a guarantee. All examples are fake/local and do not authorize wallet actions.

Our working sequence is one reproducible UI/transaction bug, observable expected behavior and fixtures, reproduce before / fix / verify after with artifacts, record human interventions, turn repeated failures into types/lint/tools/skills, then consider more agents and coordinators. Success means less intervention and rework plus useful verified changes, rather than PR count.

The earlier Codex/Hermes proposal suggested repo checks, AGENTS.md explanations, a dependable verify command and fix-and-verify/investigate-failure skills. These are teaching patterns here. No commands, skills, CI jobs, code changes or integrations have been installed. Recheck current official Codex and Hermes docs when a later authorized exercise needs executable specifics.
