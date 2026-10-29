# Migrating from v2 CLI to v3 Agent playbook

| Old (branch `old`) | New (`main` v3) |
|--------------------|-----------------|
| `node cli.js` + bb-browser / Playwright | Agent playbook + routines |
| OpenClaw / Claude Code as primary story | Generic Agent; Grok Bot as one case |
| Tone of “many sites auto-submittable” | List is reference-only; ~2–4 submits/day |
| Adapter-driven | Strategy + email + ledger-driven |
| Blog-comment batching | Stays on `old` only; not promoted in v3 |

## When to stay on `old`

- You want local Chrome + existing adapters / scripts  
- You need legacy tools like `batch-submit` and accept the risk  

```bash
git clone https://github.com/s87343472/backlink-pilot.git
cd backlink-pilot
git checkout old
```

## When to use v3

- Multiple products, email loop, daily caps  
- Building a reusable library ledger  
- Treating reciprocal / badge / ownership as explicit costs  

Treat `targets.yaml` as an **idea pool**: probe, then write your own `library.filled.csv`. Do not assume YAML URLs still accept submits.
