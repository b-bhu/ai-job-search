---
framework_version: 1.0.0
---

# Interview Preparation Guide

<!-- SETUP: STAR examples are personalized by running /setup based on your actual experience -->

## STAR Format

Structure answers as: **Situation** (context), **Task** (your responsibility), **Action** (what you did), **Result** (outcome).

Keep answers to 1-2 minutes. Be specific. End with what you learned or would do differently.

## Ready-Made STAR Examples

### 1. The career pivot (Ownership / Risk-taking)
**S:** After 7 years as an employed front-end engineer (Angular then React, up to Senior at Winsupply), the work was solid but bounded — building internal tools against specs set by others.
**T:** Decide whether to stay on a stable, familiar track or bet on building independently in a space with no guaranteed income or validation.
**A:** Left employment in Aug 2024 to build Solana/crypto products independently — starting with hackathons (Magic Bet, LPCLI) to test skills fast under real deadlines, then committing to a larger product (myBoon) once the hackathon results validated the direction.
**R:** Placed 2nd and 3rd in two competitive hackathons within the first year, and is now ~2 years into building myBoon end-to-end, owning product, architecture, and infrastructure decisions solo.
**Use for:** "Tell me about a time you took a risk", "Why did you leave your last role", "Tell me about a career change"

### 2. Architecting myBoon's data pipeline (Technical decision-making under ambiguity)
**S:** myBoon needed to turn raw market signals (Polymarket events, perps data, wallet activity) into contextualized, trustworthy information — but building and running a full 4-stage pipeline (Collector, Researcher, Editor, Publisher) in production from day one was untested and risky.
**T:** Decide how much of the pipeline to actually run live versus keep in reserve, and justify that call without a manager or spec to defer to.
**A:** Built all four stages, but made the deliberate call to run only Data Collector and Researcher in production initially — validating signal quality and researcher output before trusting Editor/Publisher to act on them autonomously.
**R:** A working, live signal pipeline in production on a VPS, with a clear, reasoned rollout path for the remaining stages rather than an all-or-nothing launch.
**Use for:** "Tell me about a technical decision you made under uncertainty", "How do you approach shipping something risky", "Describe your architecture decision-making process"

### 3. Magic Bet — shipping under hackathon time pressure (Execution speed / full-stack scope)
**S:** The MagicBlock / Solana Graveyard Hackathon required building a complete, working product — not a prototype — within the competition window.
**T:** Design and ship a real-time betting game with actual on-chain money movement, working AI game agents, and a usable web client, solo, against the clock.
**A:** Built an Anchor program (round, bet, vault, house, config accounts) to handle money movement on Solana L1, a Node.js "crank" service to run the game lifecycle (open betting -> place bet -> close betting -> run game -> settle -> claim), and a web client with Phantom wallet integration and live betting UI — using MagicBlock Ephemeral Rollups to keep game execution fast without touching L1 for every move.
**R:** Placed 2nd in the hackathon track, with a fully working product covering smart contract, backend orchestration, and frontend in one submission.
**Use for:** "Tell me about working under a tight deadline", "Describe a full-stack project you built", "How do you scope a project when time is limited"

### 4. Front-end craft at Winsupply (Prior domain competence)
**S:** Winsupply needed internal tools for product and pricing workflows — spreadsheet-like, data-heavy screens that non-technical staff would rely on daily.
**T:** As Senior Front-End Engineer, build and maintain these API-backed, data-dense interfaces to a production standard.
**A:** Built React-based tools with complex filtering, spreadsheet-style data grids, and live API-backed views.
**R:** Delivered production tools that became part of the team's daily workflow — the foundation of craft (React, state management, data-heavy UI) that now underpins the independent product work.
**Use for:** "Walk me through your frontend experience", "Tell me about building complex UI", "What's your React experience"

### 5. The Magic Bet deadline miscalculation (Owning a real mistake)
**S:** Building Magic Bet for the Solana Graveyard Hackathon, everything was on track — concept, Anchor program, MagicBlock integration, web client all coming together well.
**T:** Submit a complete, working demo before the hackathon's hard deadline.
**A:** Miscalculated the deadline against the UTC/IST time difference — realized late that the actual cutoff landed at midnight in local time, far earlier than planned for. Had to compress final testing and demo recording into the remaining hours on almost no sleep to get a submission in before the cutoff.
**R:** Submitted on time and placed 2nd — but it was a genuinely close call caused by a planning mistake, not a technical one. Now treats deadline timezone conversion as a day-one check, not something to assume, and builds in a hard buffer before any hackathon or launch deadline rather than working up to the wire.
**Use for:** "Tell me about a mistake you made", "Describe a time an ambiguous call turned out wrong", "How do you handle deadlines under pressure"

## Common Tough Questions

### "Why did you leave Winsupply?"
> Not a negative departure — a deliberate bet. After building solid front-end craft over 7 years, I wanted to own a full product end-to-end rather than build to someone else's spec, and Solana/crypto was where I wanted to make that bet. The hackathon placements (2nd, 3rd) within the first year validated the decision before I committed further to myBoon.

### "You don't have deep Rust / smart-contract engineering experience."
> Fair — my Anchor/Solana work is AI-assisted rather than deep Rust fluency. What I bring instead is the ability to ship complete, working on-chain products (Magic Bet's full Anchor program, MagicBlock integration, and betting lifecycle shipped and placed 2nd in a hackathon) by combining AI-assisted tooling with strong systems thinking. I'm actively deepening Rust fluency as the work demands it.

### "Where do you see yourself in 5 years?"
> Owning meaningful product surface area at a company building real Solana/fintech infrastructure — ideally having grown from feature ownership into broader architectural influence, the way myBoon has forced me to think about system design, not just UI.

### "What's your biggest weakness?"
> Coming from a solo-builder context, I haven't had to coordinate technical decisions with a team recently — I'm used to owning the call myself. I'm looking for a team specifically to pressure-test that muscle: taking feedback, aligning on tradeoffs with others, without losing the ownership instinct that's served the last two years.

### "Why this company specifically?"
> Customize per company. Must reference: specific projects, company values, market position, or team structure. Never give a generic answer.

## Questions You Should Ask Interviewers

### About the Role
- "What does a typical week look like in this role?"
- "What would success look like in the first 6 months?"
- "What's the biggest challenge the team is facing right now?"

### About the Team
- "How big is the team, and how do you divide work?"
- "What does the development/project lifecycle look like, from idea to production?"
- "How do you onboard new team members?"

### About Tech & Growth
- "What's your current tech stack for [relevant area]?"
- "Is there room to grow into more architectural or strategic decisions?"
- "How does the team stay current with new tools and methods?"

### About Culture (use these to prevent disappointment)
- "How would you describe the team culture?"
- "What does professional development look like here?"
- "Is there flexibility for remote/hybrid work?"
- "What's the balance between development/new projects and maintenance work?"
- "How would you describe the leadership style in this team?"
- "What do people who thrive here have in common?"

## Phone/Video Interview Tips
- Have STAR examples written out (use this file)
- Keep a glass of water nearby
- Smile when speaking (it changes your tone)
- Ask for clarification if a question is vague
- It's OK to take 5 seconds to think before answering
- End with: "Is there anything else you'd like to know about my background?"

## After the Application (Best Practice)

### Follow-Up Etiquette
- **Don't call to "stand out"** or to learn more about the role post-submission - this risks a negative impression
- If the employer specified a timeline, respect it and wait
- If no timeline was given and significant time has passed (2+ weeks), a brief call to ask about status is acceptable
- If you have genuinely new, relevant information to share, a short follow-up is fine

### Thank-You Notes
- When you receive any update (interview invitation, rejection, or status update), send a brief thank-you message
- Express appreciation for their time and the process
- Keep it short (2-3 sentences)

## Roleplay Guidelines
When the user asks for interview practice:
1. Ask which role/company to simulate
2. Start with easy warm-up questions ("Tell me about yourself")
3. Progress to role-specific technical questions
4. Include 1-2 behavioral questions using the competencies from the job posting
5. End with a tough question or curveball
6. After each answer, give brief feedback: what worked, what to sharpen
7. Suggest which STAR example would work best for each question
