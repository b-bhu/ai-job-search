# Lesson 004 — Bits, bytes, and possible values

Module: M01. State: bit counting and small zero-based enumeration demonstrated; unsigned byte range reviewed and to be reinforced through binary place values.

## Objective

Understand how a fixed number of bits limits how many distinct patterns we can represent. Connect this to memory sizes, numeric ranges, and later Rust types. Build the reasoning from small examples rather than requiring memorized powers or conversions.

## First explanation

A bit is a unit with two possible states, conventionally written 0 and 1. A byte is a group of eight bits. Data in ordinary computer memory and storage is represented using patterns of bits; rules for interpreting those patterns let programs represent numbers, text, and other information.

One bit can distinguish two possibilities. Begin with two bits before deriving the general count. Do not equate an abstract one-bit flag with the actual memory footprint of a JavaScript variable or object; runtime representations can occupy more space.

## First exercise

With two bits, how many distinct patterns can we represent? List the patterns or explain how you counted them.

After the first attempt, vary the number of bits and develop why adding one bit doubles the possibilities. Later distinguish a count of representable patterns from the largest unsigned value, before covering signed integers or floating-point precision.

## Evidence

S003 follow-up A: the learner tentatively answered 8 and proposed 2 squared. Affirm the expression and correct its evaluation to 2 × 2 = 4, showing 00, 01, 10, 11. Do not assume whether the incorrect count reflects an arithmetic slip or a deeper conceptual gap.

Next exercise: add a third bit and ask how many patterns result and why, allowing enumeration. R002 remains open pending that response. No memory-size measurement or number-range exercise has been performed.

S003 follow-up B: the learner guessed 3 cubed equals 9 for three bits. Clarify the two independent choices for every position using 00 → 000/001, 01 → 010/011, 10 → 100/101, and 11 → 110/111. Count eight total patterns, then connect them to 2 × 2 × 2. Explain power notation as repeated multiplication; 3 cubed equals 27, and 3 × 3 equals 9.

Ask what property of a bit keeps the multiplier at 2 for every added position. Await the learner's reasoning before another larger counting exercise. R002 remains open; do not label these errors as evidence of a broad mathematical weakness.

S003 follow-up C: the learner correctly answered that a bit has only 0 or 1. The reason for the multiplier is now explained. Next ask for the count of four-bit patterns and the multiplication used; do not supply that result before their attempt. R002 is partially addressed, with fresh expression/evaluation still pending.

S003 follow-up D: the learner correctly wrote four factors of 2 and evaluated them as 16. R002 is resolved for counting by repeated multiplication; do not infer mastery of every exponent notation convention.

## Next application — A byte's range

One byte has eight bits. Extend the learner's established four-bit count by doubling: 16 → 32 → 64 → 128 → 256 for four through eight bits. Explain unsigned whole numbers as nonnegative integers, starting at 0. Two bits have four patterns that can represent 0, 1, 2, 3; the count of patterns and largest value differ.

Ask for the largest unsigned whole number represented by a byte's 256 patterns, beginning at 0. Keep the answer pending rather than writing the byte's maximum as learner evidence. Text representation, signed ranges, precision, and actual runtime storage footprints remain later topics.

S003 follow-up E: the learner answered and confirmed 256 as the largest value. Correct to 255, distinguishing 256 values from a maximum of 255 when starting at zero. Explain that 0 through 256 inclusive contains 257 values. Add R003 and use the five indexes of a five-item array as the next transfer exercise. Do not infer failure of the already-demonstrated bit-pattern counting concept, and do not record the corrected range as independently demonstrated yet.

S003 follow-up F: before tutor feedback on their first attempt, the learner self-corrected the five-item array indexes to 0, 1, 2, 3, 4. This resolves R003 for the small zero-based counting distinction. The tutor connects five indexes/highest four to the reviewed byte range 0 through 255; do not claim an independent byte-range derivation in this answer.

Continue with [lesson 005](005-reading-binary.md), then reinforce numeric ranges through place values and concrete bounded fields. Signed numbers, text encoding, and actual runtime storage sizes remain later topics.
