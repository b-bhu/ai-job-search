# Session log

Append actual work and preserve earlier attempts. Dates record history, not a study schedule.

## S000 — 2026-09-28 — Course setup

- **Requested outcome:** A structured course from software engineering foundations through backend development to Solana smart contracts in Rust, focused on understanding, with a persistent record and no duration estimates.
- **Work completed by tutor:** Prepared the roadmap, reference list, tracking files, continuation workflow, and opening lesson.
- **Learner self-report:** “I can build some frontend, but backend is new.” No exercise or technical explanation submitted yet.
- **Background:** Consulted the existing canonical candidate profile to choose familiar examples. Did not infer assessed proficiency from it.
- **Assessment:** None. No module marked completed or demonstrated.
- **Starting decision:** Use familiar frontend actions to teach backend from the beginning; check programming foundations through small exercises.
- **Pending input:** Lesson 001's opening explanation of what happens after clicking Save.
- **Next step:** Begin lesson 001 with its opening question.

## S001 — 2026-09-28 — Lesson 001 opening

- **Module and lesson:** M00 / 001 — What happens when you click Save?
- **Objective:** Connect a familiar frontend action to the jobs of a browser, server, and persistent storage.
- **Session state:** Learner requested to begin. Opening scenario introduced; awaiting their explanation before presenting the worked model.
- **Learner attempt and reasoning:** Not yet received.
- **Evidence and assistance:** None yet; no assessment performed.
- **Status change:** M00 moved to Learning because the lesson has opened, not because any checkpoint has passed.
- **Review queue:** Unchanged; no misconception observed.
- **Exact next question:** What happens between clicking Save on a note on your laptop and seeing that note on your phone?

### S001 follow-up A — Initial explanation received

- **Learner reasoning:** The client uses an API to save the note in a backend database. The application needs a way to recognize the right user, associates the note with that user, and retrieves the same note from the same database when the user signs in on a phone.
- **Evidence:** Correct high-level save/retrieve flow and recognition of user association. The learner explicitly left the mechanism for recognizing a user unspecified; authentication implementation is unassessed.
- **Assistance:** Learner supplied this explanation before this lesson's worked example. No code or hints supplied for the attempt.
- **Feedback in this turn:** Clarify the API as the interface through which a client requests work from backend code; show a stable user ID as a concrete representation of the learner's user association idea.
- **Assessment boundary:** No clear misconception established. Do not interpret the simplified name example as a claim that a name alone securely proves identity. Module remains Learning; no checkpoint passed.
- **Next prediction selected:** Server-side array after a process restart, to explore why database storage is needed. The no-request scenario can be revisited later if useful.
- **Exact next question:** If the backend starts with an empty notes array, stores the note only in that array, and then stops and starts again, will the note still be available, and why?

### S001 follow-up B — Database assumption versus array-only experiment

- **Learner reasoning:** Once data is saved in the database it can be retrieved after the APIs are turned back on; described the API as connecting the client and database.
- **Evidence:** Recognizes the separation between previously stored database data and availability of the API. The answer reintroduced a database although the question specified an array with no database or file writes.
- **Interpretation limit:** This may be a missed change in the scenario; it does not establish that the learner believes an ordinary array survives a process restart.
- **Teaching response:** Acknowledge the valid database case, explicitly restate the changed premise, trace array contents across a restart, and explain process working memory versus durable storage. Clarify that an API exposes backend operations and need not use a database.
- **Review item:** R001 — Check the memory/storage distinction in another scenario; no checkpoint passed.
- **Exact next question:** If an API replies “Saved successfully,” is that enough to know the note will survive a backend restart, or what else would we need to know?

### S001 follow-up C — Server-side conditions and refetching

- **Clarification requested:** Learner asked to elaborate the question. Tutor compared an array-only implementation and a persistent-database implementation that send identical success messages.
- **Learner reasoning:** If server-side conditions check that saving succeeded before returning HTTP 200, the client can rely on that. Proposed refetching the exact string as an alternative check, but considered that option less good.
- **Evidence:** Recognizes that the success response needs to depend on successful backend work. Did not independently specify durable commit or demonstrate the array's lifetime; keep those assessment limits explicit.
- **Teaching response:** Make the relevant condition concrete: wait for successful persistent database saving before reporting success; report an error if saving fails. Explain that the status code reports the server's outcome rather than performing storage itself. Refetch can refresh the UI, but proves current readability rather than persistence, and can also read from an in-memory array.
- **Assessment:** Module remains Learning. R001 is partially addressed on response meaning; revisit the storage distinction in the shopping-cart transfer exercise rather than repeating the same question indefinitely.
- **Exact next question:** The database saves the note, but the connection drops before the success response reaches the phone. From the phone's perspective, is the outcome definitely saved, definitely not saved, or uncertain?

### S001 follow-up D — Client uncertainty recognized

- **Learner answer:** “uncertain” to the phone's outcome after the database save succeeds but the response is lost.
- **Evidence and assistance:** Correct choice from three supplied outcomes in an explicitly scaffolded scenario. No independent explanation supplied yet; do not treat this as full mastery of distributed failure.
- **Teaching response:** Reinforce that a missing response does not establish a failed save. The actual database state and what the client can know are separate.
- **Next step:** Return to the first lesson's shopping-cart transfer exercise to check R001, rather than expanding into retry design yet.
- **Exact next question:** A backend starts with an empty cart array, adds shoes to it, and returns 200 without writing to a file or database. After the backend stops and starts again, what will it return when the phone requests the cart, and why?

### S001 follow-up E — Shopping-cart transfer and next lesson

- **Learner reasoning:** Identified the question as about program/system memory. Explained that the empty array is initialized when the program starts, a restart initializes it again, and the prior values have no persistent location to be recovered from. Correctly predicted an empty cart.
- **Assistance:** Previous note-array teaching and an explicitly stated no-file/no-database premise. The learner supplied the cart prediction and causal explanation without an answer for this attempt.
- **Feedback:** Confirm the explanation. Refine the terminology: a running instance is a process, and its working memory has a lifetime separate from the saved program source. Stopping does not delete the source file.
- **Status changes:** Resolve R001 conceptually. Mark M00 Demonstrated for the limited orientation objectives based on the accumulated verbal trace, success-condition reasoning, guided failure prediction, and explained storage transfer. No code exercise or later retention check has been completed.
- **Next lesson:** Begin M01 with lesson 002 on program/process/memory, following the learner's natural connection. Bits, encoding, compilation/runtime, and other M01 topics remain to be covered; no topics silently waived.
- **Exact next question:** Two separate processes run the same backend code and each initializes an empty cart array. Shoes are added only to process A. What is in process B's cart, and why?

## S002 — 2026-10-03 — Separate processes and first local experiment

- **Module and lesson:** M01 / 002 — A program and a running process.
- **Learner answer:** “It will go to return empty array.” Correctly predicts process B's cart after shoes are added only to A; no reason supplied in this answer.
- **Feedback:** Confirm that ordinary variables belong to each process, even when the processes execute the same saved code.
- **Prepared exercise:** `learning/exercises/001-process-memory/cart.cjs`, a tutor-written terminal program with add/show/exit commands and a printed process ID. No learner implementation work claimed.
- **Environment and verification:** Existing Node.js v24.10.0. Tutor ran one smoke example: add pencil, show, exit; output contained the pencil and the process exited successfully. This verifies the supplied demo, not the learner's understanding or completion of the two-process experiment.
- **Assessment:** M01 stays Learning. No new misconception observed or review item added; no retained or implementation competency awarded.
- **Exact next task:** Run the same file in terminal tabs A and B, add shoes only in A, issue show in both, and report both outputs. Follow with the learner's explanation and a restart variation.

### S002 follow-up A — Two-process observations

- **Learner report:** “a has [\"shoes\"] and b []”. Matches the predicted isolation of the two cart arrays.
- **Evidence boundary:** These are learner-reported terminal observations. Tutor did not inspect the learner's terminal sessions. The demonstration program was supplied by the tutor; no independent implementation claimed.
- **Feedback:** Connect the different outputs to each process's own working memory, despite both running the same saved file.
- **Next task:** Stop A, start the same program again in A, and issue show. Ask for the result and an explanation of what happened to the previous shoes. Do not record that result until supplied.
- **Status:** M01 remains Learning overall; the separate-process concept has a practical observation and is being practised. No new review gap observed.

### S002 follow-up B — Restart explanation and next concept

- **Learner report and reasoning:** Said that the process was stopped and rerunning the script shows the initial value. This correctly connects a fresh run with initialization, following the reported A/B observations.
- **Evidence boundary:** Learner-reported result and own explanation using the tutor-provided script. No direct inspection of the learner's terminal output and no independent implementation claimed.
- **Checkpoint:** The narrow process-memory/restart concept is demonstrated through the accumulated prediction, reported experiment, and causal explanation. M01 remains Learning because its remaining topics are not covered.
- **Review:** R001 now has practical support from the reported restart as well as the earlier conceptual explanation. Keep its original history.
- **Teaching transition:** Introduce CPU as executing instructions, RAM as working memory, and storage as holding saved files. Explain that memory occupied and processing work are different resource measurements; avoid requiring internal engine details at this stage.
- **Exact next question:** An app holds a million notes in memory but is currently waiting for input. Does holding all that data necessarily mean its CPU usage is high, and why?

## S003 — 2026-10-04 — Resource distinction and bits

- **Module and lesson:** M01 / 003, transitioning to 004.
- **Learner reasoning:** Holding the notes in memory means they are in RAM; if no instructions are being executed there is no processing work and no CPU use for that work.
- **Evidence:** Correctly separates memory occupied from execution. Do not interpret the brief statement as a claim that the entire computer must have zero CPU use.
- **Feedback:** Affirm the main distinction. Clarify that waiting for user input does not guarantee literally zero CPU usage: the app may do background work and other programs can use the CPU. Holding data alone does not imply high CPU usage.
- **Status:** Narrow resource distinction demonstrated verbally; no CPU/RAM measurement claimed and M01 remains Learning.
- **Next concept:** Bits as two possible states and a byte as a group of eight bits; build the count of representations from examples rather than memorized formulas. No independent evidence on bits yet.
- **Exact next question:** With two bits, how many distinct patterns can we represent? List the patterns or explain how you counted them.

### S003 follow-up A — Counting two-bit patterns

- **Learner answer:** “8 2 to the power 2 ?” — tentatively proposed 8 while identifying the correct expression, 2 squared.
- **Interpretation:** The expression is correct; its evaluation is 4. Do not infer a broad mathematical weakness or assume confusion with eight bits per byte from this single answer.
- **Teaching response:** Expand 2 squared as 2 × 2, enumerate 00, 01, 10, 11, and explain that each of the two positions can independently hold 0 or 1.
- **Review item:** R002 — Verify counting and power evaluation through the three-bit variation. No bit-counting checkpoint passed yet.
- **Exact next question:** If we add a third bit, how many patterns can we make, and why? Listing is welcome.

### S003 follow-up B — Three-bit count and power notation

- **Learner answer:** “same formula i guess 3 to the power 3 which is 9”. The guess changes both the number of positions and the choices per position, and gives an incorrect evaluation of a cube.
- **Focused feedback:** Each bit always offers 0 or 1, so three bits give 2 × 2 × 2 = 8. Enumerate by extending each of 00, 01, 10, 11 with a final 0 or 1. Explain that 2 cubed means three factors of 2. Separately clarify that 3 cubed is 3 × 3 × 3 = 27, whereas 3 × 3 = 9.
- **Assessment boundary:** These are specific counting/notation errors; do not infer general ability or a diagnosis. R002 remains open and no bit-counting checkpoint passed.
- **Teaching adjustment:** Stay with the meaning of the choices, using small concrete patterns rather than asking for a larger power calculation immediately.
- **Exact next question:** What is it about a bit that makes us multiply by 2 each time we add another bit?

### S003 follow-up C — Meaning of the multiplier

- **Learner answer:** “because we have only 0 or 1”. Correctly identifies why every bit contributes two choices.
- **Assistance and scope:** Follows the worked three-bit enumeration and explanation. This supplies the missing conceptual reason; it does not yet demonstrate evaluation of a new power or count.
- **Assessment:** R002 partially addressed. M01 remains Learning and the bit-counting checkpoint stays open until a new expression and count are correctly applied.
- **Exact next question:** With four bits, how many different patterns can we make? Show the multiplication used to count them.

### S003 follow-up D — Four-bit count applied correctly

- **Learner answer:** Wrote “2 choices × 2 choices × 2 choices × 2 choices = 16”. Correct expression and evaluation for the fresh four-bit variation.
- **Evidence:** Together with the prior explanation of 0 or 1 per bit, demonstrates the narrow bit-counting concept using repeated multiplication. Earlier enumeration/corrections supplied by tutor are recorded; general exponent notation was not independently reassessed.
- **Status:** R002 resolved for bit counting. M01 remains Learning; no whole-module mastery claimed.
- **Teaching response:** Connect a byte's eight bits to 256 patterns by doubling from the established four-bit count. Introduce unsigned whole numbers as nonnegative values starting at 0, using a small four-pattern example to separate count from highest value.
- **Exact next question:** A byte has 256 patterns. If we use them to represent unsigned whole numbers beginning at 0, what is the largest number we can represent?

### S003 follow-up E — Count versus highest value

- **Learner answer:** Tentatively answered “256 ?” and then confirmed “yes 256” for the largest unsigned value among a byte's 256 patterns starting at 0. These are one answer with confirmation, not two independent attempts.
- **Feedback:** Correct the maximum to 255. Zero is one of the 256 values; 0 through 256 inclusive would contain 257 values. Connect a small example of four values, 0/1/2/3, to familiar array indexing.
- **Review:** Add R003 for count versus highest zero-based value. Preserve R002's successful bit-counting evidence; this is a different distinction.
- **Assessment:** No number-range checkpoint passed. M01 remains Learning.
- **Exact next question:** An array has five items and its indexes start at 0. What are its five indexes?

### S003 follow-up F — Five-index self-correction

- **Learner attempt and correction:** Initially described only four indexes and speculated about asking for array position five. Before receiving tutor feedback, explicitly corrected the intended answer to “0,1,2,3,4”. Treat the self-correction as the current answer; preserve the original attempt without diagnosing a persistent out-of-bounds misconception.
- **Evidence:** Correctly enumerates five zero-based indexes. The tutor supplied the earlier four-value example but did not supply this five-item solution before the correction.
- **Feedback:** Affirm five indexes with highest index four, and connect that counting distinction to an unsigned byte's 256 values numbered 0 through 255. The byte range is tutor-reviewed, not independently re-derived here.
- **Review:** Resolve R003 for the small zero-based enumeration; reinforce the larger range through binary representation and later numeric fields.
- **Next teaching step:** Introduce binary place weights 1, 2, 4 from right to left. Work through 101 as 4 + 0 + 1, then ask for 110 with the addition shown.
- **Exact next question:** Using three binary places with weights 4, 2, 1, what decimal number does 110 represent? Show the addition.

### S003 follow-up G — Binary conversion clarification

- **Learner input:** “i didnt understood conversion sorry”. Requested another explanation; did not submit a numeric conversion attempt.
- **Teaching adjustment:** Use three switches with fixed values 4, 2, 1. A bit of 1 includes its value; 0 adds nothing. Start at the rightmost value 1 and double moving left. Fully work through 110 as the 4 and 2 switches on, yielding 6.
- **Supporting interaction:** Created a task-owned binary-switches explainer with three toggles and a live total. Tutor checked initial state and updates using a local script/DOM smoke check. No learner interactions have yet been reported, and no browser visual inspection claimed.
- **Visual source:** `/Users/bibhu/.codex/visualizations/2026/09/28/01a0e853-5c60-74c2-a9db-a2dd93bc584a/binary-switches.html`.
- **Assessment:** Add R004; keep lesson 005 and M01 in progress. The worked 110 answer is tutor-supplied evidence of teaching, not a learner pass.
- **Exact next task:** Turn all switches off, turn on only Value 1, and report the total. Treat this as assisted exploration before a new independent conversion question.

## Entry template

Copy for a new session when teaching begins:

```markdown
## S___ — YYYY-MM-DD — Topic

- Module and lesson:
- Objective:
- Learner attempt and reasoning:
- What was demonstrated (link code, answer, diagram, or test output):
- Hints, documentation, or full solutions used:
- Misconceptions actually observed and feedback:
- Status changes and why:
- Review items added or resolved:
- Exact next question or exercise:
```
