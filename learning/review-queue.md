# Review queue

R004 needs support with reading binary place values. R003 remains resolved for small zero-based enumeration; revisit the byte range after the binary model is understood. R002 and R001 remain resolved within their recorded scopes.

Use a later lesson or project as the review trigger. Dates may record completed reviews but do not impose a timetable.

| ID | Concept | Evidence of the gap | Next exercise or question | Review trigger | Status | Last evidence |
|---|---|---|---|---|---|---|
| R001 | Process memory versus persistent storage; API response versus storage action | Initially answered the array-only question using a database. Later explained fresh initialization without a durable copy and connected success responses to backend conditions. S002 added a correct reported restart result and explanation. | Resolved with conceptual transfer and learner-reported practice. Revisit in an HTTP server or worker exercise. | Later HTTP server or worker exercise for transfer | Resolved; practical observation is learner-reported using tutor-supplied code | S002 follow-up B; earlier S001 follow-up E |
| R002 | Choices per bit, number of positions, and power notation | Initially gave incorrect two/three-bit counts. Subsequently identified the two choices per bit and correctly wrote four factors of 2 with result 16. | Resolved through explanation and a new four-bit count. Revisit exponent notation when useful; no independent notation check claimed. | Later numeric range or Rust integer exercise | Resolved for counting via repeated multiplication | S003 follow-ups C–D; earlier attempts A–B preserved |
| R003 | Count versus highest zero-based value | Answered 256 for the byte maximum. In the smaller five-item array exercise, self-corrected to 0, 1, 2, 3, 4 before tutor feedback, separating five indexes from a highest index of four. | Resolved for small zero-based enumeration. Revisit the unsigned byte range through all-one binary patterns and a bounded field later. | Binary place-value or Rust integer exercise | Resolved in the small transfer example; byte range still to reinforce | S003 follow-ups E–F |
| R004 | Reading a binary pattern using place values | Learner explicitly said conversion was not understood; no particular wrong numeric answer or exact underlying misconception observed. | Explore fixed-value switches, then explain what on/off contributes in a small new pattern. | Current lesson 005 | Open — alternate explanation and assisted exploration | S003 follow-up G |

After a successful review, keep the row and mark it resolved with its session reference. A recurring misunderstanding gets a new attempt and explanation, not a fabricated pass.
