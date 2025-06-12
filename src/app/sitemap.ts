import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kefasports.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = [
    'basketball-courts',
    'swimming-pools', 
    'soccer-fields',
    'tennis-courts',
    'playgrounds',
    'multi-purpose-facilities'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Project pages (you would fetch these from your CMS in a real implementation)
  const projectPages = [
    'kepler-university-indoor-basketball-court',
    'giants-of-africa-outdoor-basketball-court',
    'ldk-jr-nba-indoor-basketball-court',
    'south-africa-jr-nba-indoor-court',
    'swimming-pool-project',
    'iprc-huye-basketball-court',
    'central-african-republic-basketball-federation-court',
    'south-sudan-basketball-federation-indoor-basketball-court',
    'nyandungu-great-lake-complex-basketball-court',
    'professional-basketball-arena'
  ].map(project => ({
    url: `${baseUrl}/projects/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
  ]
}
