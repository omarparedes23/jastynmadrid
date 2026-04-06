import { MetadataRoute } from 'next'

/**
 * Sitemap XML dinámico para Jastyn Madrid
 * Next.js genera automáticamente sitemap.xml en la raíz
 * 
 * URL accesible en: https://jastynmadrid.com/sitemap.xml
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jastynmadrid.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Añadir páginas adicionales cuando existan:
    // {
    //   url: `${baseUrl}/servicios`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/casos-exito`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/contacto`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ]
}
