# Email handling rules

| Type | Action |
|------|--------|
| Verify link / short code | Agent may auto-handle (watch expiry) |
| Accepted / live | Log progress; optionally notify human |
| Rejected | Log reason; resubmit with field fixes only after human OK |
| Newsletter / paid boost / promo | Ignore; do not reply |
| Domain ownership (meta / DNS) | Human adds token; Agent clicks verify |

## Practical tips

- Use an **Agent-owned inbox** for signup verifies to spare the human  
- If a directory requires a **domain mailbox**, hand verify to a human or pick another site  
- Recurring upsell mail → tag `email_behavior=upsell-heavy`; no need to ask every time  
- Rejections that demand a new email or location: summarize for the human; **do not** invent legal-page changes  

See also: [reciprocity.md](reciprocity.md) (ownership) · [troubleshooting.md](troubleshooting.md)
