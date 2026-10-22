import { MetadataRoute } from 'next'
import { PRODUCT_CATEGORIES } from '@/data/catalogue-categories'

// Per-route "last meaningful content change" dates (YYYY-MM-DD).
// Seeded from git history on 2026-10-22. When you change a page's visible
// content, update its date here — engines only trust lastmod that stays accurate.
// Metadata-only or styling changes do not count.
const LAST_UPDATED: Record<string, string> = {
  '': '2026-09-25',
  '/about': '2026-09-25',
  '/catalogue': '2026-09-18',
  '/catalogue/*': '2026-09-18',
  '/industries': '2026-09-18',
  '/partners': '2026-09-18',
  '/products': '2026-09-18',
  '/solutions': '2026-09-18',
  '/fabrication': '2026-09-26',
  '/references': '2026-09-18',
  '/references/beverage-cip-recovery-modernization': '2026-09-18',
  '/references/coca-cola-multan-line-automation': '2026-09-26',
  '/references/fauji-foods-syrup-room-modernization': '2026-09-18',
  '/references/edible-oil-processing-automation': '2026-09-18',
  '/references/pepsi-northern-bottling-line-automation': '2026-09-18',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbhsol.com'

  const categoryRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    path: `/catalogue/${cat.slug}`,
    dateKey: '/catalogue/*',
    changeFreq: 'monthly' as const,
    priority: 0.85,
  }))

  const routes: Array<{
    path: string;
    dateKey?: string;
    changeFreq: 'yearly' | 'monthly' | 'weekly';
    priority: number;
  }> = [
    { path: '', changeFreq: 'monthly', priority: 1.0 },
    { path: '/about', changeFreq: 'monthly', priority: 0.8 },
    { path: '/catalogue', changeFreq: 'monthly', priority: 0.8 },
    ...categoryRoutes,
    // /industries is noindex until sector copy exists (TEC-16), so it stays out of the sitemap.
    { path: '/partners', changeFreq: 'monthly', priority: 0.7 },
    { path: '/products', changeFreq: 'monthly', priority: 0.9 },
    { path: '/solutions', changeFreq: 'monthly', priority: 0.9 },
    { path: '/fabrication', changeFreq: 'monthly', priority: 0.9 },
    { path: '/references', changeFreq: 'monthly', priority: 0.8 },
    { path: '/references/beverage-cip-recovery-modernization', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/coca-cola-multan-line-automation', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/fauji-foods-syrup-room-modernization', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/edible-oil-processing-automation', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/pepsi-northern-bottling-line-automation', changeFreq: 'monthly', priority: 0.85 },
  ]

  return routes.map((r) => {
    const lastModified = LAST_UPDATED[r.dateKey ?? r.path]
    if (!lastModified) {
      throw new Error(`sitemap: no LAST_UPDATED date for route "${r.path}"`)
    }
    return {
      url: `${baseUrl}${r.path}`,
      lastModified,
      changeFrequency: r.changeFreq,
      priority: r.priority,
    }
  })
}
