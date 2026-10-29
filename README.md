# Backlink Pilot v3

**An AI Agent playbook for paced directory and list backlinks: free / free-queue by default, treat reciprocal links, badges, and ownership checks as configurable costs, and grow a reusable site library.**

| You are | Start here |
|---------|------------|
| **Human (founder / ops)** | [For humans](#for-humans给人类) below |
| **AI Agent** | [For agents](#for-agents给-agent) summary → full runbook [`AGENTS.md`](AGENTS.md) |

[中文](README.zh.md) · [Full guide](docs/guide.md) · [Docs home](docs/index.md) · Legacy CLI branch [`old`](https://github.com/s87343472/backlink-pilot/tree/old) (v2.1)

> **Required disclaimer:** [docs/disclaimer.md](docs/disclaimer.md) — search engines discourage link schemes that manipulate rankings; this repo **promises no rankings**. Default real submits ≈ **2–4 sites / day** — do not treat tens or hundreds per day as recommended.

---

## For humans（给人类）

### What “backlinks” means here

Practical channels for indie products: **directory submissions, free-queue launches, resource / awesome-list PRs**, and similar apply-for-a-link paths. This is not a link-buying guide and not a “submit hundreds in one command” CLI story (that lives on branch `old`).

Forms differ; many need login, captcha, scheduling, and email verification. The hard part is **policy judgment + email loop + pacing**. Agents handle repetition; humans approve exceptions and change the live site.

### Why pacing matters

Short bursts of large-scale, low-relevance, or patterned links risk being treated as spam. Volume ≠ rankings. Default advice:

1. About **2–4** real submissions per day (scout in bulk; submit slowly)
2. Honest copy and matching categories; **location / email consistent with Terms & Privacy**
3. Directories are one channel; prioritize the product and natural mentions
4. Keep reciprocals / badges on **`/links`** so you can revoke one entry
5. Skip paid boosts and **required** reciprocals by default; raising the tier is your risk

Full text: [disclaimer](docs/disclaimer.md).

### Strategy tiers (pick one; write it into the Agent brief)

| Tier | Allow | Skip by default |
|------|-------|-----------------|
| Conservative | Free, free-queue | Paid, required badges, reciprocals, upvote-for-credits |
| **Standard (recommended)** | Above + **optional** badge for dofollow, domain meta / DNS ownership verify | Paid; **required** reciprocal for listing; upvote-for-credits (unless you explicitly allow) |
| Aggressive | Standard + small paid boosts with your budget cap | Still careful with required reciprocals; if allowed, host only on `/links` |

Details: [docs/strategy.md](docs/strategy.md).

### `/links` page and library ledger

- **Reciprocals / badges:** Common pattern is `yoursite.example/links` for partners and badges; homepage only links there. See [reciprocity](docs/reciprocity.md) and [templates/links-page.example.md](templates/links-page.example.md). Standard **skips required reciprocals**.
- **Library ledger:** Every scout/submit becomes a CSV row so new products reuse validated sites. Empty schema: [templates/library.schema.csv](templates/library.schema.csv). **Keep filled ledgers local — do not commit them here.** Docs: [library](docs/library.md).
- Repo `targets.yaml` is a historical pool marked **unmaintained** — reference only.

### How to brief an Agent (shortest path)

1. Copy [templates/product.example.yaml](templates/product.example.yaml) for your product (location & email must match legal pages)
2. Copy `templates/library.schema.csv` locally (e.g. `library.filled.csv`) and give the Agent the path
3. Set tier to **Standard** (or your choice) and daily cap **2–4**
4. Paste [`AGENTS.md`](AGENTS.md) or the English block in [templates/agent-prompt.md](templates/agent-prompt.md) into the Agent system / project instructions
5. Optionally create an empty `/links` page for later optional badges or raised-tier swaps
6. Use an Agent-owned inbox for signup verifies; keep domain `support@` for you

Grok Bot-shaped case study (fictional **Northstar Notes**): [docs/grok-bot.md](docs/grok-bot.md). Generic setup: [docs/agent-setup.md](docs/agent-setup.md).

### What humans must do (Agent should stop and ask)

| Task | Why |
|------|-----|
| Add DNS TXT / page meta ownership tags | Touches your domain or production site |
| Click verifies sent to a **domain mailbox** | Agent often cannot read that inbox |
| Paid boost / Featured | Money; forbidden on Standard by default |
| Accept **required** reciprocal or “badge required to submit” | Policy exception |
| Upvote / comment for credits | Skipped by default |
| Change location / email after a rejection | May touch legal pages and brand |
| Captcha / 2FA / unauthorized bulk GitHub PRs | Compliance and account safety |

You only need short replies: “added, go verify”, “skip”, “raise tier and put it on /links”.

### Human doc map

| Doc | Topic |
|-----|--------|
| [guide.md](docs/guide.md) | Full playbook |
| [disclaimer.md](docs/disclaimer.md) | Risk & advice |
| [strategy.md](docs/strategy.md) | Tiers & pace |
| [reciprocity.md](docs/reciprocity.md) | Reciprocal · badge · `/links` |
| [library.md](docs/library.md) | Ledger fields & reuse |
| [email.md](docs/email.md) | Mail triage |
| [funnel.md](docs/funnel.md) | Scout → submit → ledger |
| [github-lists.md](docs/github-lists.md) | Awesome-list PRs |
| [troubleshooting.md](docs/troubleshooting.md) | Pitfalls (anonymized) |
| [migrating-from-v2.md](docs/migrating-from-v2.md) | When to use CLI on `old` |

### What is / isn’t in this repo

| Included | Not included |
|----------|----------------|
| Method docs, empty templates, `AGENTS*.md` | Runnable batch CLI (see [`old`](https://github.com/s87343472/backlink-pilot/tree/old)) |
| `targets.yaml` (unmaintained) | Real submit logs, passwords, cookies, filled libraries |
| Fictional sample Northstar Notes | Names of directories we actually submitted to, or live result URLs |

---

## For agents（给 Agent）

> **Canonical runbook: [`AGENTS.md`](AGENTS.md)** (many tools auto-load it). Below is a README summary so humans can see your constraints at a glance.

### Your job

Using the user’s product card and **daily cap**, find and submit **free / free-queue** directories or lists; maintain a local library ledger; handle auto-completable verify mail; **ask the human** for every exception.

### Hard defaults (unless the user overrides)

- Tier: **Standard**
- Real submissions: **2–4 / day** (scouting does not count as a submit)
- **Allow:** free, free-queue; optional badge for dofollow; verify clicks after human adds meta/DNS
- **Skip:** paid; required reciprocal; upvote-for-credits; dead sites; fit mismatch
- No ranking promises; never commit secrets / cookies / filled ledgers
- In chat, prefer counts + status over dumping long third-party URL lists unless asked

### Roles

1. Research: tag `free` / `free-queue` / `paid` / `badge` / `reciprocal` / `dead` / `fit`
2. Submit: prefer HTTP/API; browser if needed; stop on captcha
3. Email: auto verify links; ignore ads / paid upsells; hand ownership tokens to human
4. Ledger: update local library CSV

### Must ask the human

Paid boosts, required reciprocals, badge-required-to-submit, upvote-for-credits, legal location changes, domain-mailbox verifies, DNS/meta not yet added, resubmit after rejection, unauthorized bulk GitHub PRs.

### Product card & library

- Fields: [product-template](docs/product-template.md); example [product.example.yaml](templates/product.example.yaml) (fictional)
- Library: [library.schema.csv](templates/library.schema.csv)
- Pasteable prompt: [templates/agent-prompt.md](templates/agent-prompt.md)

Funnel: `harvest → dedupe → probe → enqueue → submit → email → ledger` ([funnel](docs/funnel.md)).

---

## License

MIT · author sagasu. v3 is an Agent playbook; automation lives on [`old`](https://github.com/s87343472/backlink-pilot/tree/old).
