import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbhsol.com'

  const routes: Array<{
    path: string;
    changeFreq: 'yearly' | 'monthly' | 'weekly';
    priority: number;
  }> = [
    { path: '', changeFreq: 'yearly', priority: 1.0 },
    { path: '/about', changeFreq: 'monthly', priority: 0.8 },
    { path: '/catalogue', changeFreq: 'weekly', priority: 0.8 },
    { path: '/industries', changeFreq: 'monthly', priority: 0.8 },
    { path: '/partners', changeFreq: 'monthly', priority: 0.7 },
    { path: '/products', changeFreq: 'weekly', priority: 0.9 },
    { path: '/solutions', changeFreq: 'weekly', priority: 0.9 },
    { path: '/references', changeFreq: 'weekly', priority: 0.8 },
    { path: '/references/beverage-cip-recovery-modernization', changeFreq: 'monthly', priority: 0.85 },
  ]

  const today = new Date().toISOString().split('T')[0]

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: today,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }))
}
