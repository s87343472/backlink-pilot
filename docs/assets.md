# Media & copy assets checklist

Many directories and launch sites want more than a URL: **logo, OG image, screenshots, banner, slogans, sometimes a promo video**. Prep assets before submit and put paths on the product card. If media is missing, the Agent should skip or ask the human — not submit a broken form.

Fictional **Northstar Notes** paths are examples only.

## Suggested folder layout

```
products/northstar-notes/
  product.yaml
  assets/
    favicon.ico
    favicon-32.png
    logo-1024.png          # square, prefer transparent PNG
    logo-wordmark.png      # optional horizontal mark
    og-1200x630.png        # social / OG
    screenshot-desktop-1.png
    screenshot-desktop-2.png
    screenshot-mobile-1.png
    banner-1200x400.png    # or whatever the site asks
    promo.mp4              # optional
    promo.gif              # optional short loop
```

Keep large binaries out of public git unless the repo is meant to host them.

## Checklist

| Asset | Common specs (site wins) | Notes |
|-------|--------------------------|--------|
| Favicon | 32×32 / 48×48 ICO or PNG | Some cards / “add to home” use it |
| Logo (square) | ≥512×512, ideally 1024×1024; transparent PNG | Most common ask |
| Logo (wordmark) | Per site | Nav / list rows |
| OG / social image | Often **1200×630** (~1.91:1) | Open Graph / X cards; else auto-previews look bad |
| Desktop screenshots | ≥1280 wide, clear UI | Often 1–5; real product, not empty blur |
| Mobile screenshots | 9:19 or site ratio | Almost required for mobile-first apps |
| Banner / hero | e.g. 1200×400, 1920×1080 | Launch / featured slots |
| Promo video | MP4/WebM; length & size per rules | Optional; else `promo_video: null` |
| GIF | Short loop, watch file size | Some sites accept GIF instead of video |
| Tagline / slogan | See variants below | Almost always required |
| Alt text | One line per image | A11y + some form fields |

**Always follow the target site’s upload hints**; the table is a packing list.

## Slogan / copy variants (on the product card)

| Field | Length | Use |
|-------|--------|-----|
| `tagline` / `slogan` | ~6–12 words | One-line list blurb |
| `tagline_short` | Shorter | Hard character limits |
| `short` | 1–2 sentences | Card summary |
| `long` | Paragraph | Detail page |
| `elevator` | ~10s spoken | Video captions / social |

Same facts, multiple lengths — **do not** invent contradictory hype per directory.

## Who prepares what

| Role | Owns |
|------|------|
| **Human** | Design exports, brand, final logo/OG/video, legally usable screenshots (no unauthorized customer data) |
| **Agent** | Check paths exist; spot wrong ratio/size; skip or ask if required media missing; pick the right file per site; tag library `requires` (e.g. `logo,screenshots,og`) |

Agents must **not** upload random junk as product UI unless the human explicitly allows placeholders and accepts rejection risk.

## Common rejection / failure modes

- Wrong aspect ratio (stretching a square logo into OG 1.91:1)
- Too small (e.g. 64×64 as primary logo) or over the site’s MB limit
- Transparent PNG previewing as black/white slabs on JPEG-only pipelines (keep a flat fallback)
- Watermarks, “draft” / Figma chrome, heavy compression
- Screenshots that don’t match the copy / stale UI
- Unsupported video format or missing audio when required
- Tagline over the character cap with no short variant

## Library notes

Encode media needs in `requires` (e.g. `logo+3screenshots+og`) or optional `requires_media`. If assets can’t be supplied → `skipped` + `skip_reason=missing-media`.

See [product-template.md](product-template.md) · [AGENTS.md](../AGENTS.md).
