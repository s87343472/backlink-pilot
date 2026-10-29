# Generic Agent setup

Works for any AI Agent that can read docs, run routines, read mail, or drive a browser. Grok Bot specifics: [grok-bot.md](grok-bot.md).

Docs are designed to be agent-agnostic, but **only Grok Bot is verified for v3 so far**; Claude Code / Codex / DeepSeek and others have not had a systematic smoke test. Full matrix and criteria: [verified-agents.md](verified-agents.md).

## Minimum checklist

1. **Tier:** Standard by default; pin it in the system / project prompt  
2. **Daily cap:** 2–4 real submissions / day  
3. **Product card:** one YAML / Markdown per product (see templates)  
4. **Library path:** local CSV; gitignored  
5. **Email:** Agent inbox for signups; clear rules for domain mail  
6. **Handoff phrases:** when to ask a human (paid, required reciprocal, DNS, rejection resubmit)  

Prompt skeleton: [AGENTS.md](../AGENTS.md) · [templates/agent-prompt.md](../templates/agent-prompt.md).

## Suggested routines

| Routine | Trigger | Behavior |
|---------|---------|----------|
| Backlink mail | on inbox / hourly | Classify verify / live / reject / ads; auto-open safe verify links |
| Daily submit | weekday schedule | Take 2–4 untried rows from the library; log and report |

## Tool split (illustrative)

- Research: web search, public lists, HEAD/GET liveness  
- Simple submit: HTTP forms / public APIs  
- Complex forms: desktop browser (stop for captcha)  
- Progress: local CSV / JSON — not public git  

## Multiple products

One folder per product: product card + submit-log + RESULTS (names up to you). Rotate the daily cap across products.
