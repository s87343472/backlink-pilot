# Backlink Pilot v3

An AI Agent playbook for paced directory and list backlinks: free / free-queue by default, treat reciprocal links, badges, and ownership checks as configurable costs, and grow a reusable site library.

[中文](README.zh.md) · [Docs home](docs/index.md) · [Full guide](docs/guide.md) · Agent runbook [`AGENTS.md`](AGENTS.md) · Legacy CLI branch [`old`](https://github.com/s87343472/backlink-pilot/tree/old) (v2.1)

---

## What it is

**Backlink Pilot** is an **AI Agent playbook** (Grok Bot and others) for directory / list outreach — not a black-box “submit hundreds in one command” script.

| Version | Contents |
|---------|----------|
| **v3 (this branch `main`)** | Strategy tiers, daily caps, email loop, `/links`, library ledger, risk notes; human README + agent runbook [`AGENTS.md`](AGENTS.md) |
| **v2.1 (branch [`old`](https://github.com/s87343472/backlink-pilot/tree/old))** | Legacy CLI: OpenClaw / Claude Code / bb-browser / Playwright toolkit |

**In the repo:** method docs, empty templates (product card with media fields, library CSV, `/links` example, [assets](docs/assets.md) checklist), historical `targets.yaml` (**unmaintained**).  
**Not in the repo:** runnable batch-submit CLI (see `old`), real submit logs, passwords / cookies, filled directory lists.

---

## What it's for

After you ship an indie product, you often want links from **directories, free-queue launches, and resource / awesome lists**. Forms differ; many need login, captcha, scheduling, and email verification. The hard part is **policy judgment + email loop + pacing**, not filling one form.

This project helps you:

1. **Set rules** — Conservative / Standard / Aggressive; default **Standard** (free & free-queue; optional badge and domain ownership OK; skip paid and required reciprocals by default)
2. **Pace work** — about **2–4 real submissions per day**; scout in bulk, submit slowly
3. **Reuse** — a library ledger of site attributes and per-product status so the next product hits validated sites first
4. **Hand off cleanly** — humans handle DNS/meta, domain mail, paid/tier exceptions; agents research, submit, click verifies, and bookkeep
5. **State the risk** — directory link value varies; volume ≠ rankings (see Disclaimer below)

It is **not** a ranking promise, a link-buying guide, or a tutorial on evading search enforcement.

---

## How to use

### For humans

**Shortest path:**

1. Read [Notes](#notes注意事项) and [Disclaimer](#disclaimer免责声明) (full text: [docs/disclaimer.md](docs/disclaimer.md))
2. Copy [templates/product.example.yaml](templates/product.example.yaml) for your product (**location and email must match Terms / Privacy**)
3. **Prep a media pack:** square logo (prefer transparent), OG (~1200×630), desktop/mobile screenshots, optional banner / promo video, plus short/long slogan variants. Checklist: [docs/assets.md](docs/assets.md); put paths on the product card
4. Copy [templates/library.schema.csv](templates/library.schema.csv) locally (e.g. `library.filled.csv`); **do not commit filled ledgers**
5. Optionally add a `/links` page ([templates/links-page.example.md](templates/links-page.example.md); docs: [reciprocity](docs/reciprocity.md))
6. Paste [`AGENTS.md`](AGENTS.md) (or the English block in [templates/agent-prompt.md](templates/agent-prompt.md)) into the Agent’s system / project instructions; set tier (recommend Standard) and daily cap 2–4
7. Give the Agent an inbox for signup verifies; keep domain `support@` for yourself

**What humans must do (the Agent should stop and ask):**

| Task | Why |
|------|-----|
| DNS TXT / page meta ownership | Touches your domain or production site |
| Verify links in a domain mailbox | Agent often cannot read that inbox |
| Paid boost / Featured | Forbidden on Standard by default |
| Required reciprocal, badge-required-to-submit, upvote-for-credits | Policy exceptions |
| Change location / email after rejection | May touch legal pages |
| Captcha / 2FA / unauthorized bulk GitHub PRs | Account & compliance |
| Final logo / OG / screenshots / video | Design & brand; Agent only checks and uploads |

Setup: [docs/agent-setup.md](docs/agent-setup.md) · Grok Bot case (fictional Northstar Notes): [docs/grok-bot.md](docs/grok-bot.md) · Full guide: [docs/guide.md](docs/guide.md)

Want local Chrome scripts / old adapters? Check out [`old`](https://github.com/s87343472/backlink-pilot/tree/old) — [migrating-from-v2](docs/migrating-from-v2.md).

### For agents

**Canonical runbook: [`AGENTS.md`](AGENTS.md)** (Chinese: [`AGENTS.zh.md`](AGENTS.zh.md)). Summary:

| Item | Default |
|------|---------|
| Tier | **Standard** |
| Real submits / day | **2–4** (scouting does not count) |
| Allow | free, free-queue; optional badge for dofollow; meta/DNS verify after human adds tokens |
| Skip | paid; required reciprocal; upvote-for-credits; dead; fit mismatch |
| Roles | Research tags → submit (prefer HTTP/API) → email triage → local CSV |
| Media | Before submit, verify product-card paths; if required image/video missing → skip or ask ([assets](docs/assets.md)) |
| Ask human | Paid, required reciprocal/badge, upvote-for-credits, legal location, domain mail, DNS/meta, rejection resubmit, unauthorized bulk PRs, new design exports |
| Report | Counts + reasons for submitted / pending / skipped; no third-party URL spam unless asked |

Product fields: [product-template](docs/product-template.md) · Library: [library](docs/library.md) · Email: [email](docs/email.md) · Funnel: [funnel](docs/funnel.md)

### Doc map

| Doc | Topic |
|-----|--------|
| [AGENTS.md](AGENTS.md) | Agent runbook |
| [docs/guide.md](docs/guide.md) | Full playbook |
| [docs/strategy.md](docs/strategy.md) | Tiers & pace |
| [docs/reciprocity.md](docs/reciprocity.md) | Reciprocal · badge · `/links` |
| [docs/library.md](docs/library.md) | Library ledger |
| [docs/assets.md](docs/assets.md) | Logo / OG / screenshots / video / slogans |
| [docs/disclaimer.md](docs/disclaimer.md) | Full disclaimer |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Pitfalls (anonymized) |

---

## Notes（注意事项）

1. **Pace:** Prefer about 2–4 real submissions per day; do not treat tens or hundreds of signups/submits in a day as recommended.
2. **Tiers:** Public docs default to **Standard**; skip required reciprocals; optional badges and ownership verify are OK. See [strategy](docs/strategy.md).
3. **`/links`:** Host reciprocals and badges on a dedicated page, not in homepage body copy; required reciprocals only after you raise the tier.
4. **Library:** Keep filled CSVs local; this repo ships an empty header only. `targets.yaml` is a historical idea pool — **not guaranteed submittable**.
5. **Honesty:** Accurate product copy; matching categories; location / entity / email consistent with legal pages or expect rejection.
6. **Media:** Most sites want logo / OG / screenshots and sometimes video; wrong ratio or size gets rejected. Humans export; Agents pick files per site. See [docs/assets.md](docs/assets.md).
7. **Secrets:** Do not commit passwords, cookies, verify tokens, or filled ledgers (see `.gitignore`).
8. **GitHub lists:** Read CONTRIBUTING first; no bulk PRs without the account owner’s authorization.
9. **Blog-comment batching:** Lives only on branch `old`; not promoted in v3.

---

## Copyright

This project is released under the **MIT License** (see [LICENSE](LICENSE)).

Copyright (c) 2026 **SagaSu** (Jingshen Su / @sujingshen).

You may use, copy, modify, merge, publish, and distribute this software, provided the copyright and permission notices are retained. The software is provided “as is”; see LICENSE for the full text.

---

## Disclaimer（免责声明）

- Search engines (including Google) have long discouraged **link schemes meant to manipulate rankings**. Short bursts of large-scale, low-relevance, or patterned backlinks can be treated as spam or trigger enforcement.
- Links are judged by quality and source; directory links vary widely. **Volume ≠ rankings.** This project **promises no** traffic or ranking outcomes.
- This repo is a workflow playbook — **not** a black-hat guide and not instructions on “how to evade” search actions.
- You are responsible for site behavior and outcomes from using this playbook; authors and maintainers accept no liability for loss.

Read the full page: [docs/disclaimer.md](docs/disclaimer.md). Official materials: [Google Search documentation](https://developers.google.com/search/docs) (official text wins).

---

## About the author / Follow me

**SagaSu** (@sujingshen) — indie building and product experiments.

- Twitter / X: [https://x.com/sujingshen](https://x.com/sujingshen)
- Personal blog: [https://www.sagasu.art/](https://www.sagasu.art/)

Follow along for product and backlink workflow notes. If this repo helps you, a Star is appreciated.
