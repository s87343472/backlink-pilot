# Backlink Pilot full guide (v3)

Read the [disclaimer](disclaimer.md) first. Default tier: **Standard** ([strategy.md](strategy.md)).

## 1. Why Agent, not scripts alone

- Directory forms differ; many need login, captcha, scheduling  
- The hard part is **policy + email loop + pacing**  
- Scripts still fit: no-account instant forms, simple APIs, field probing  

The v2 CLI and browser automation live on branch [`old`](https://github.com/s87343472/backlink-pilot/tree/old). Blog-comment batching stays on `old` only; v3 does not promote it.

## 2. Roles

1. **Research Agent:** find candidates; tag free / free-queue / paid / badge / reciprocal / dead  
2. **Submit Agent:** submit within the daily cap; prefer curl / API over a browser  
3. **Mail Agent / routine:** auto-click verify links; log live / rejected; leave domain mail to humans  
4. **Human:** approve paid, upvote-for-credits, location changes, badges, DNS / meta  

## 3. Strategy and pace

See [strategy.md](strategy.md). Short version: ~2–4 real submits/day; rotate products; Standard allows optional badges and ownership verify; skip paid and required reciprocals by default.

## 4. Reciprocal, badge, ownership

See [reciprocity.md](reciprocity.md). Host swaps/badges on `/links`; skip required reciprocals on Standard by default.

## 5. Product card

See [product-template.md](product-template.md). Location and email must match legal pages.

## 6. Funnel

See [funnel.md](funnel.md):

`harvest → dedupe → probe → enqueue by rules → submit → email → ledger`

## 7. Email

See [email.md](email.md). Auto-handle verify links; ignore paid upsells; ownership tokens wait for a human, then verify.

## 8. Library

See [library.md](library.md). This repo ships an empty schema only; keep filled ledgers local.

## 9. GitHub lists

See [github-lists.md](github-lists.md). Read CONTRIBUTING; batch PR permission needs the account owner’s OK.

## 10. Agent setup

- Generic: [agent-setup.md](agent-setup.md)  
- Grok Bot case (fictional product): [grok-bot.md](grok-bot.md)  
- Prompt draft: [AGENTS.md](../AGENTS.md) · [templates/agent-prompt.md](../templates/agent-prompt.md)  

## 11. Safety (public)

- Never commit secrets, passwords, cookies  
- Do not teach paywall bypass; mark paid as skip  
- Respect ToS; hand captcha / 2FA to a human with clear instructions  

## 12. Migrating from v2

See [migrating-from-v2.md](migrating-from-v2.md).

## 13. Troubleshooting

See [troubleshooting.md](troubleshooting.md) (anonymized; no real submission targets).
