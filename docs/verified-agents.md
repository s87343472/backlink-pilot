# Verified agents (v3)

This page answers: **which AI Agents have actually been exercised against this repo’s v3 `AGENTS.md` / templates**, and which are only “designed to be compatible, not verified.”

**Bottom line:** Through **2026-10**, the v3 main playbook (`main` branch) has been **verified with Grok Bot only**. Claude Code, OpenAI Codex, DeepSeek-family agents, Cursor Cloud Agent, ChatGPT / Custom GPT alone, OpenClaw, and similar runtimes have **not** had a systematic smoke test here (read the runbook → real or dry-run submit + email loop).

The docs are **designed** to be agent-agnostic (markdown runbook + empty templates), but “readable by any agent” is **not** the same as “verified to follow them.” Until someone records a pass under the criteria below, treat unlisted runtimes as **unverified**.

Chinese twin: [verified-agents.zh.md](verified-agents.zh.md).

---

## What “verified” means

An Agent counts as **verified for v3** when all of the following were observed at least once with this repo’s instructions:

1. **Loads and follows** [`AGENTS.md`](../AGENTS.md) / [`AGENTS.zh.md`](../AGENTS.zh.md) + a product card without inventing paid / required-reciprocal paths by default  
2. **Respects the daily cap 2–4** and Standard-tier skip rules (paid, required reciprocal, upvote-for-credits, etc.)  
3. **Can research / tag candidates** and either submit via HTTP/API or stop cleanly for human gates (captcha, DNS, domain mail)  
4. **Handles or reports** email verify / accept / reject without spamming the human  
5. **Writes** library / submit-log locally **without committing secrets**

Opening the README alone does not count.

---

## Verification matrix (v3 / `main`)

| Agent / runtime | v3 status | Notes |
|-----------------|-----------|-------|
| **Grok Bot** | **Verified** | This playbook was written from real multi-product directory / list submission work (Standard tier, daily 2–4, email loop, library ledger, `/links`, media assets). Verification window: through **2026-10**. Reference shape: [grok-bot.md](grok-bot.md) (product name there is fictional). |
| Claude Code | **Unverified** | No systematic smoke of “read AGENTS.md + templates → submit / mail loop.” |
| OpenAI Codex | **Unverified** | Same. |
| DeepSeek-family agents | **Unverified** | Same. |
| Cursor Cloud Agent | **Unverified** | Same. |
| ChatGPT / Custom GPT (alone) | **Unverified** | Same. |
| OpenClaw | **Unverified (for v3)** | See “vs branch `old`” below. |
| Any other unnamed Agent | **Unverified** | PRs welcome after a recorded pass. |

Do not read this table as “unverified cannot be used” or “should work fine” — it only means **there is no written verification record yet**.

---

## vs v2.1 branch `old` (do not conflate)

| | v3 (`main`) | v2.1 ([`old`](https://github.com/s87343472/backlink-pilot/tree/old)) |
|--|-------------|------------------------------------------------------------------------|
| Shape | Markdown playbook + templates | CLI / browser automation toolkit |
| Entry docs | `AGENTS.md`, seven-section README | Legacy README / adapter notes |
| Runtimes called out | **Only Grok Bot recorded as verified** | Historically named Claude Code, OpenClaw, bb-browser, Playwright as **CLI toolkit targets** |

Being a target for a CLI / browser adapter on `old` is **not** the same as “verified to understand and follow v3 `AGENTS.md`.” If you need the v2.1 script path, check out `old` and read [migrating-from-v2.md](migrating-from-v2.md). Do not claim Claude / OpenClaw as v3-verified from that history.

---

## Maintainers: how to add a verified Agent

After a pass, open a PR that updates this page’s table and includes:

1. **Date** (when verification finished; prefer `YYYY-MM`)  
2. **Agent name + version** if known (model / client / plugin)  
3. **What was tested:** which of the five criteria; real submit vs dry-run; tier and daily cap  
4. **Evidence note:** local log path or private note link — **do not** commit real site lists, passwords, cookies, or filled ledgers  
5. **Sync:** keep ZH/EN twins aligned; refresh the short README blurb / doc map; update [agent-setup](agent-setup.md) if needed

Example PR title: `docs: mark <Agent> verified for v3 (YYYY-MM)`.

---

## Related

- Agent runbook: [AGENTS.md](../AGENTS.md)  
- Generic setup: [agent-setup.md](agent-setup.md)  
- Grok Bot reference runtime: [grok-bot.md](grok-bot.md)  
- Full guide: [guide.md](guide.md)
