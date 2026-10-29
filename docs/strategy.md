# Strategy tiers, pace, and skip rules

Public docs describe **tiers**, not which sites you or anyone actually submitted to.

## Three tiers

| Tier | Allow | Skip by default |
|------|-------|-----------------|
| **Conservative** | Free, free-queue | Paid, required badges, reciprocals, upvote-for-credits |
| **Standard (recommended default)** | Above + **optional** badge for dofollow, domain meta / DNS ownership verify | Paid; **required** reciprocal / swap for listing; upvote-for-credits (unless you explicitly allow) |
| **Aggressive** | Standard + small paid boosts (you set a budget cap) | Still treat required reciprocals carefully; if allowed, host them only on `/links` (see [reciprocity.md](reciprocity.md)) |

## Pace

- **Real submissions:** about **2–4** sites per day. Scouting, dedupe, and liveness checks can be bulk; submits must stay paced.
- Do not resubmit the same product to the same site (unless a rejection says to fix fields and you approve).
- With multiple products, **rotate** so one inbox / fingerprint is not hammered in a single day.

## Example skip tags

Tag candidates before enqueue:

- `paid` / `featured-only` — skip by default  
- `required-backlink` — skip on Standard  
- `required-badge-to-submit` — skip on Conservative; on Standard, distinguish “optional badge for dofollow”  
- `upvote-for-credits` — skip by default  
- `dead` / `captcha-wall` / `agent-email-rejected` — skip or change email after human OK  
- `fit-mismatch` (e.g. AI-only directory vs non-AI product) — skip  

## Human-gated exceptions

Paid boosts, upvote-for-credits, changing legal location, required badges, adding DNS / meta tokens — the Agent should stop and ask. Do not self-promote the tier.
