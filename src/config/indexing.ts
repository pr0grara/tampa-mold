/**
 * indexing.ts — experiment control surface for selectively indexing the
 * /[service]/[city]/ combo pages.
 *
 * By DEFAULT every service×city combo page is `noindex, nofollow` and excluded from
 * the sitemap (an anti-doorway-page decision — 6 services × 13 cities of largely
 * templated pages looks like keyword-farming to Google). The combos are still built
 * and internally linked; they're just invisible to search.
 *
 * This allowlist UNLOCKS (index,follow + sitemap) the combos for specific cities so we
 * can measure whether a dedicated, indexable "{service} in {city}" page outranks the
 * fallback city/service hub for "{service} {city}" queries — without the duplicate-
 * content risk of unlocking all 78 at once.
 *
 * EXP-004 (suncoast, 2026-07-10): unlock CLEARWATER only. Every other city stays locked
 * and serves as the control. See analytics/analysis/ONPAGE-EXPERIMENTS.md.
 *
 * Single source of truth: both the combo page (noindex decision) and the sitemap filter
 * in astro.config.mjs read this list. This is also the surface a future auto-unlock
 * workflow would edit (read GSC demand → append qualifying city slugs → rebuild).
 */

/** City slugs whose service×city combo pages are unlocked for indexing. */
export const INDEXED_COMBO_CITIES: string[] = ['clearwater'];

/**
 * Whether the combo page for (serviceSlug, citySlug) should be indexed.
 * serviceSlug is accepted (and currently unused) so the granularity can tighten to
 * per-service×city later without touching call sites.
 */
export const isComboIndexed = (_serviceSlug: string, citySlug: string): boolean =>
  INDEXED_COMBO_CITIES.includes(citySlug);
