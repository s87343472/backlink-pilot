# Reciprocal links, badges, and ownership

Directories often ask for non-cash costs. Identify the type, decide if it is worth it, and host swaps on a dedicated page — not in homepage body copy.

## Types

| Type | Typical ask | Common placement | Standard tier |
|------|-------------|------------------|---------------|
| Reciprocal / swap | Your site must link them for dofollow or listing | Dedicated **`/links`** page; footer / About links there | **Skip required reciprocals** by default; if you raise the tier, host only on `/links` and mark the library |
| Badge | “Listed on …” image/code for dofollow or exposure | Same page or footer badge area | **Optional badge for dofollow OK**; “badge required to submit” → skip on Conservative |
| Domain ownership | meta or DNS TXT | Human adds token → Agent clicks verify | **Allowed**; store token + expiry on that submission |
| Upvote / comment for credits | Engage before free post | — | Skip by default |
| Paid boost / Featured | Pay to jump the queue | — | Skip by default |

## `/links` page pattern

Common practice: a dedicated links page for partners and badges.

- **Path:** prefer `https://yoursite.example/links`
- **Content:** partner name + URL + one-line note; optional badge image. See [templates/links-page.example.md](../templates/links-page.example.md)
- **Homepage:** do not dump a long swap list into hero content; at most a “Links” entry pointing to `/links`
- **Indexing:** indexable helps partners check; `noindex` is a SEO tradeoff you own
- **Agent check:** if `requires` includes backlink / badge, confirm the agreed placement before submit

Public docs use placeholders (`Partner Name`, `https://example.com`) — **no real swap domains**.

## Ownership verify flow

1. Mail or dashboard gives meta content or TXT value  
2. **Human** adds it to the site or DNS  
3. Human tells the Agent → Agent opens the verify URL or clicks the button  
4. Ledger: `ownership_verified` + deadline  

Until verified, “scheduled / live” status is usually unreliable.
