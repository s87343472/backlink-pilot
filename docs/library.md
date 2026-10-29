# Library ledger

Goal: every scout and submit enriches **your** directory library. For a new product, prefer sites you already validated — do not harvest from zero every time.

Relation to `targets.yaml`: that file is a **historical, unmaintained** pool. Your library ledger is the authoritative local/private record.

## Fields

Empty header: [templates/library.schema.csv](../templates/library.schema.csv).

| Field | Meaning |
|-------|---------|
| domain / name | Directory site |
| submit_url | Submit entry URL |
| free_status | free / free-queue / paid / unknown / dead |
| link_type | dofollow / nofollow / unknown |
| requires | no-account / signup / OAuth / domain email / meta·DNS / badge / backlink / manual review … |
| requires_media | Optional: `logo+og+3screenshots`, `logo+video`, `none`, etc. |
| reciprocity | none / optional-badge / required-badge / required-backlink |
| backlink_placement | If needed: e.g. `/links` |
| queue_notes | Queue length, launch scheduling |
| email_behavior | verify link / receipt only / frequent paid upsells |
| fit | Product fit (tool / game / job board / general…) |
| last_checked | Last probe or submit date |
| result_by_product | Per product: not_tried / submitted / pending / live / rejected / skipped |
| skip_reason | paid, dead, fit mismatch, rejects agent email… |
| notes | Rejection patterns, location rules, etc. |

## How to use

1. Write or update a row on scout/submit (Agent maintains; human may edit)  
2. New product: filter a “fast queue” by `fit` + `free_status` + `requires`, then apply the daily cap  
3. **Do not commit filled ledgers** to this public repo (see `.gitignore`)

## What this public repo ships

- Field docs (this page)  
- Empty CSV header  
- Method docs  

No filled site lists or live result URLs.
