import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { INDEXED_COMBO_CITIES } from './src/config/indexing.ts';

// SITE_URL overrides the production domain at build/deploy time (the only env var read).
export default defineConfig({
  site: process.env.SITE_URL || 'https://suncoastmoldremoval.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' }, // inline CSS → no render-blocking request
  integrations: [
    sitemap({
      // Lean launch sitemap: only intentional, indexable pages.
      // Keep: homepage (/), service hubs (/{service}/), city hubs (/service-area/{city}/).
      // Drop: legal pages, and the auto-generated service×city combo pages
      //       (/{service}/{city}/) — EXCEPT combos whose city is unlocked for indexing
      //       (INDEXED_COMBO_CITIES). Locked-city combos stay noindexed + out of the
      //       sitemap; unlocked-city combos are indexable and belong in it. Keep this in
      //       sync with the noindex decision in [service]/[city].astro (same source list).
      filter: (page) => {
        const path = new URL(page).pathname;
        if (/^\/(terms|privacy)\/?$/.test(path)) return false; // legal
        const segs = path.split('/').filter(Boolean);
        // service×city combo: include only if that city is unlocked.
        if (segs.length === 2 && segs[0] !== 'service-area') return INDEXED_COMBO_CITIES.includes(segs[1]);
        return true;
      },
    }),
  ],
});
