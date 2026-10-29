# Funnel: scout → submit → ledger

Public docs describe the funnel and tags only — **no real target names or result URLs**.

```
harvest candidates
  → dedupe (domain / submit_url)
  → probe (alive / form / paid copy / reciprocal·badge requirements)
  → enqueue by rules (keep free / free-queue; on Standard also optional-badge-for-dofollow)
  → submit (script first; browser if needed; honor daily cap)
  → email (verify / receipt / live / rejected / ignore ads)
  → ledger (submitted / pending / live / rejected / skipped)
```

## Example enqueue rules

When writing a library row, set at least: `free_status`, `requires`, `reciprocity`, `fit`.

- `paid` and tier ≠ Aggressive → do not enqueue for submit  
- `required-backlink` on Standard → do not enqueue (or a human-gated queue)  
- bad `fit` → `skipped` + `skip_reason`  

## Submit priority

1. This product `not_tried`, `free`, few requirements  
2. Uncovered `free-queue` for the same product  
3. Badge / ownership items: only after `/links` or DNS is ready  

Stop when the daily cap is hit; leave the rest queued.
