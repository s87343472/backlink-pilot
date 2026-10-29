# Product card fields

Prepare a product card before submitting. Example: [templates/product.example.yaml](../templates/product.example.yaml).  
Media checklist: [assets.md](assets.md).

## Core fields

| Field | Notes |
|-------|--------|
| name | Product name |
| url | Primary URL |
| tagline / slogan | One-line pitch |
| tagline_short | Shorter variant for hard caps |
| elevator | ~10s spoken version (optional) |
| short / long | Short / long description |
| email | Signup email |
| location | Legal location — **must match Terms / Privacy** |
| founder | Display name if required |
| pricing | free / freemium / paid … |
| categories | Category keywords |
| twitter / social | Optional |
| keywords | Search / categorization |
| strategy_tier / daily_submit_cap | Tier and daily cap |

## Media fields

| Field | Notes |
|-------|--------|
| assets_dir | Assets folder |
| favicon | Site icon |
| logo | Square logo (prefer transparent PNG ≥512) |
| logo_wordmark | Horizontal mark (optional) |
| og_image | Social / OG, often 1200×630 |
| banner | Launch / hero (optional) |
| screenshots[].path / alt / form_factor | Desktop or mobile |
| promo_video / promo_gif | Promo video or GIF; else `null` |

## Email and location

- **Agent / bot inbox:** good for many signups and auto verify clicks  
- **Domain support@:** more official; often human-gated; some directories reject disposable/agent mail  
- Location and entity must match legal pages  

Passwords, cookies, API tokens: **never commit**. Whether large media lives in git is your choice; the product card must point at **paths the Agent can read**.
