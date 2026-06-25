# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero backgrounds (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
└─ maps/          # static map art if you ever drop the live embeds
```

Service photos are best at **3:2 landscape** (they're cropped to 3:2 on city-page cards and
shown at natural ratio on the homepage rows). Drop in large files freely — `astro:assets`
resizes/compresses them at build; only the optimized variants ship.

## ⚠️ These are PLACEHOLDERS

The current images are **free-licensed mold-remediation photos pulled from Wikimedia Commons** so the build
resolves and the site looks like a real mold business, not broken. They are generic stock — containment
barriers, attic sheathing, and crawl-space framing, none of them shot in the Tampa Bay area. **Replace them with
real job photos before launch** — real local proof (your actual crew, mold being removed in a
Tampa home, a crawl space on a Hillsborough County property) is load-bearing for this kind of site
(see SPEC §2). Keep the same filenames (or update the `import`s in `src/config/services.ts`) so
nothing breaks.

> Source/licensing note: placeholders came from Wikimedia Commons (a mix of CC0, public domain,
> and CC BY / CC BY-SA). They're fine as stand-ins, but confirm licensing/attribution or, better,
> shoot your own before launch. `public/og.jpg` (1200×630 social-share image) was cropped from
> `hero/hero.jpg`.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.jpg` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) + source for `public/og.jpg` |
| `services/mold-remediation.jpg` | `mold-remediation` service (hub catch-all) |
| `services/mold-inspection-testing.jpg` | `mold-inspection-testing` service |
| `services/black-mold-removal.jpg` | `black-mold-removal` service |
| `services/attic-mold-removal.jpg` | `attic-mold-removal` service |
| `services/crawl-space-mold-removal.jpg` | `crawl-space-mold-removal` service |
| `services/mold-damage-repair.jpg` | `mold-damage-repair` service |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicons

This site ships **no favicon on purpose** (see `BaseLayout.astro`) — search engines fall back to a
generic icon and there are no favicon files to maintain. If you want a brand mark later, add the
favicon files to `public/` and the `<link>` tags to `BaseLayout.astro`.
