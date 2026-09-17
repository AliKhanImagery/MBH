import { MetadataRoute } from 'next'
import { PRODUCT_CATEGORIES } from '@/data/catalogue-categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbhsol.com'

  const categoryRoutes = PRODUCT_CATEGORIES.map((cat) => ({
    path: `/catalogue/${cat.slug}`,
    changeFreq: 'weekly' as const,
    priority: 0.85,
  }))

  const routes: Array<{
    path: string;
    changeFreq: 'yearly' | 'monthly' | 'weekly';
    priority: number;
  }> = [
    { path: '', changeFreq: 'yearly', priority: 1.0 },
    { path: '/about', changeFreq: 'monthly', priority: 0.8 },
    { path: '/catalogue', changeFreq: 'weekly', priority: 0.8 },
    ...categoryRoutes,
    { path: '/industries', changeFreq: 'monthly', priority: 0.8 },
    { path: '/partners', changeFreq: 'monthly', priority: 0.7 },
    { path: '/products', changeFreq: 'weekly', priority: 0.9 },
    { path: '/solutions', changeFreq: 'weekly', priority: 0.9 },
    { path: '/fabrication', changeFreq: 'weekly', priority: 0.9 },
    { path: '/references', changeFreq: 'weekly', priority: 0.8 },
    { path: '/references/beverage-cip-recovery-modernization', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/coca-cola-multan-line-automation', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/fauji-foods-syrup-room-modernization', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/edible-oil-processing-automation', changeFreq: 'monthly', priority: 0.85 },
    { path: '/references/pepsi-northern-bottling-line-automation', changeFreq: 'monthly', priority: 0.85 },
  ]

  const today = new Date().toISOString().split('T')[0]

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: today,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }))
}
