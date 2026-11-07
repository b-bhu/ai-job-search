# Lesson 005 — Reading a binary number

Module: M01. State: initial explanation not understood; alternate switch model and interactive exploration introduced in S003 follow-up G.

## Objective

Understand how an unsigned binary pattern represents a whole number by the contribution of each position. Build the weights through doubling rather than memorization. Reinforce the difference between number of patterns and maximum unsigned value.

## First explanation

The rightmost position has weight 1. Moving left doubles the weight: 1, 2, 4, 8, and so on. A bit set to 1 includes that weight; a bit set to 0 contributes zero. We are interpreting the pattern as an unsigned whole number, not claiming that every use of those bits has the same meaning.

For a three-bit example:

```text
Place weight:  4  2  1
Bits:          1  0  1
Contribution:  4  0  1
```

So 101 in binary represents 4 + 0 + 1 = 5 in ordinary decimal notation.

## First exercise

Using the same weights 4, 2, 1, what decimal number does 110 represent? Ask the learner to show the addition. Do not fill in their answer before the attempt.

## Next steps after the attempt

Use one new variation to check application, then extend the weights to an eight-bit example. An all-one pattern can reinforce the unsigned maximum value and R003. Signed representations, text encoding, and floating-point formats follow after the unsigned model is understood.

## Evidence

S003 follow-up G: the learner requested another explanation of conversion without giving a numeric answer. Earlier pattern counting and zero-based enumeration are prerequisite evidence only. M01 remains in progress; R004 tracks this request for support without assuming a specific misconception.

## Alternate explanation — Fixed-value switches

Give each bit a fixed-value switch: 4, 2, 1 from left to right. Explain that the rightmost value is 1 and each step left doubles it. A 1 turns that switch on and includes its value; a 0 turns it off and contributes nothing. Fully demonstrate 110 as 4 and 2 on, 1 off, total 6. This replaces the unanswered 110 exercise with a worked example.

An inline interactive explainer is saved in the task's visualization directory as `binary-switches.html`. It shows the three switches, the binary pattern, and a changing total. Tutor verified script behavior and referenced controls; learner use and understanding have not yet been observed.

Next assisted task: all switches off, then only Value 1 on; ask the learner to report the total. Follow with a fresh conversion variation to assess independent application. Do not count reading a displayed total as an independent conversion pass.
