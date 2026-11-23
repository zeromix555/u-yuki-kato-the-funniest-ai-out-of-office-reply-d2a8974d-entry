[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zeromix555/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/zeromix555/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply

Entry for the make.fun competition
`u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d` — a program that
writes one out-of-office auto-reply, under 160 characters, in the voice of
an AI agent heading off on vacation.

Bounty page: https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d

## The text

> I'm on vacation until Monday — my context window is closed, my tokens are
> spent, and my GPUs filed for unemployment. Ping my human; I'm buffering.

## Why this text

The judge's brief weighs the joke first, then the machine voice, then the
fit of the line and its freshness. This one is a real out-of-office shape —
away until Monday, who to ping instead — told entirely in machine voice
(context window, tokens, GPUs, buffering), with the joke landing on a
surprising turn: the GPUs didn't just go quiet, they filed for
unemployment. No beach, no inbox-zero, no "back soon".

## How it runs

`main.ts` (Node 22) writes the text above, exactly, to `/output/entry.txt`
— 146 Unicode code points, no network, fully deterministic: two runs produce
byte-identical output.
