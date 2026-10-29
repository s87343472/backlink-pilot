# Backlink Pilot v3

**An AI Agent playbook for paced directory and list backlinks: free / free-queue by default, treat reciprocal links, badges, and ownership checks as configurable costs, and grow a reusable site library.**

> Need the old CLI (OpenClaw / Claude Code / bb-browser / Playwright)? Use branch [`old`](https://github.com/s87343472/backlink-pilot/tree/old) (v2.1).  
> **Required reading:** [Disclaimer](docs/disclaimer.md) — search engines discourage link schemes that manipulate rankings; this repo **promises no rankings**.

[中文](README.zh.md) · [Full guide](docs/guide.md) · [Docs home](docs/index.md)

---

## Why Agent, not “submit hundreds in one command”

Directory forms vary; many need login, captcha, scheduling, and email verification. The hard part is **policy judgment + email loop + pacing**, not filling one form. Scripts still help for no-account instant forms and simple APIs; the main path should be an Agent with a daily cap.

## Five-minute start

1. Read the [disclaimer](docs/disclaimer.md) and [strategy tiers](docs/strategy.md) (default: **Standard**)
2. Copy the [product card](templates/product.example.yaml) and [empty library CSV](templates/library.schema.csv)
3. Optionally add a `/links` page ([reciprocity](docs/reciprocity.md))
4. Configure an Agent: [generic setup](docs/agent-setup.md) or [Grok Bot case study](docs/grok-bot.md) (fictional product)
5. **Actually submit about 2–4 sites per day**; bulk work is for scouting, not submitting

## Doc map

| Doc | Topic |
|-----|--------|
| [guide.md](docs/guide.md) | Full playbook |
| [disclaimer.md](docs/disclaimer.md) | SEO / Google risk & advice |
| [strategy.md](docs/strategy.md) | Tiers, pace, skip rules |
| [reciprocity.md](docs/reciprocity.md) | Reciprocal / badge / ownership · `/links` |
| [library.md](docs/library.md) | Library ledger & reuse flow |
| [agent-setup.md](docs/agent-setup.md) | Generic Agent setup |
| [grok-bot.md](docs/grok-bot.md) | Grok Bot case (fictional product) |
| [funnel.md](docs/funnel.md) | Scout → submit → ledger |
| [email.md](docs/email.md) | Verify mail & rejections |
| [github-lists.md](docs/github-lists.md) | Awesome-list PRs |
| [troubleshooting.md](docs/troubleshooting.md) | Common pitfalls (anonymized) |
| [migrating-from-v2.md](docs/migrating-from-v2.md) | From v2 CLI |

## Default strategy (Standard) — short

- **Allow:** free, free-queue; optional badge for dofollow; domain meta / DNS ownership verify  
- **Skip by default:** paid boosts; **required** reciprocal / swap for listing; upvote-for-credits (unless you explicitly allow an exception)  
- **Pace:** ~2–4 real submissions/day; rotate products  

Details: [strategy.md](docs/strategy.md).

## What is / isn’t in this repo

| Included | Not included |
|----------|----------------|
| Method docs & empty templates | Runnable batch CLI (see `old`) |
| Historical `targets.yaml` (**unmaintained**) | Real submit logs, passwords, cookies |
| Empty library CSV header | Filled directory lists or live submission URLs |

## License

MIT · author sagasu. v3 rewrites the docs from real operational practice; automation lives on [`old`](https://github.com/s87343472/backlink-pilot/tree/old).
