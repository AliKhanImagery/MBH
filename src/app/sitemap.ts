import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbhsol.com'

  // Define core static routes
  const routes = [
    '',
    '/about',
    '/catalogue',
    '/industries',
    '/partners',
    '/products',
    '/solutions'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
