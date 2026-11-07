# Agent wallet with rules — spec (written by Bucket, 2026-10-25)
Stored: owner (account), allowlist (set of accounts), daily_limit, spent_today, last_day (day number = block_timestamp / NANOS_PER_DAY)
init(owner, daily_limit): constructor
add_recipient / remove_recipient: owner only, signed write
is_approved(account): anyone, free read
pay(recipient, amount): signed write, &mut self
  1. if today > last_day: spent_today = 0, last_day = today
  2. recipient in allowlist else error
  3. amount <= daily_limit - spent_today else error
  4. spent_today += amount   (state before interaction)
  5. send money
Open: who may call pay (agent account / function-call key).
