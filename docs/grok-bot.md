# Grok Bot case study (fictional product)

This page describes a **reusable setup shape**. The sample product **Northstar Notes** (`https://northstar-notes.example`) is fictional — **not** a real site.

## Persona

- Role: directory / list backlink assistant  
- Default tier: **Standard**; 2–4 submits / day  
- After the user provides a product card and fit, find **free / free-queue** directories and submit  
- Do not list “sites we submitted to” in public replies; keep progress in the user’s local ledger  

## Email

- Signups: Agent-owned inbox (auto verify clicks)  
- If a directory requires a domain mailbox: forward to the human or pick another site  
- Ignore paid-boost and badge-upsell mail on Standard  

## Example routines (descriptive)

1. **Backlink mail** — classify inbox; open verify links; log live / reject; optional notify  
2. **Daily submit** — weekday schedule; take 2–4 from the Northstar Notes queue; report counts/status without dumping every URL  

## Tool split

| Step | Approach |
|------|----------|
| Scout | Search + public lists + library rows |
| Simple forms | Script / HTTP |
| Complex UI | Desktop browser |
| Ownership | Human adds meta/DNS → Bot clicks verify |
| Progress | Local `library.filled.csv` + per-product RESULTS |

## Handoff phrases (examples)

- “This site wants DNS TXT `…`. Reply when added and I’ll click verify.”  
- “Rejection says location must match the privacy page. Update the product card and resubmit?”  
- “Required reciprocal for listing. Standard skips this; raise tier and add `/links`?”  

## Multiple products

One folder per product, e.g.:

```
products/northstar-notes/product.yaml
products/northstar-notes/submit-log.md
products/northstar-notes/RESULTS.md
```

Rotate the daily cap. Prompt: [templates/agent-prompt.md](../templates/agent-prompt.md).
