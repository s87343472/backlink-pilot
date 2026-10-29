# Troubleshooting (anonymized)

No named directories. Pattern-level issues only.

| Symptom | Likely cause | What to do |
|---------|--------------|------------|
| No mail after submit | Spam folder; or manual review with no receipt | Check spam; tag `email_behavior`; re-probe later |
| Verify link dead | Short TTL | Handle immediately; if expired, resend/resubmit (ask human) |
| Rejected: email type | Blocks agent / disposable mail | Use domain mail (human) or another site |
| Rejected: location mismatch | Form location ≠ Terms / Privacy | Align product card and legal pages, then human OK to resubmit |
| “Already exists” | Prior submit or same URL | Mark live/pending; do not hammer |
| List only if paid | featured-only | Skip on Standard |
| Requires reciprocal first | required-backlink | Skip on Standard; `/links` only if tier raised |
| Stuck on ownership | meta/DNS not added | Human adds → Agent verify |
| Fit rejection (e.g. AI-only) | Wrong product class | `skip_reason=fit-mismatch` |
| Image/video rejected | Wrong ratio, too small, oversize, watermark | Re-export per [assets.md](assets.md); or skip with `missing-media` |
| Captcha wall | Automation limits | Stop for human; or use a no-captcha path |

Still honor the daily cap and the [disclaimer](disclaimer.md).
