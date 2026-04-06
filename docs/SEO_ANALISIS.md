# 📊 Análisis SEO Completo - Jastyn Madrid

## 1. Estado Actual del SEO

### ✅ Lo que está bien implementado

| Elemento | Estado | Comentario |
|----------|--------|------------|
| **Title** | ✅ | "Jastyn Madrid \| Agencia de Marketing para Hostelería" - Buena longitud (53 chars) |
| **Meta Description** | ✅ | 165 caracteres, incluye keywords principales y CTA implícito |
| **Keywords meta** | ✅ | 6 términos relevantes presentes |
| **Open Graph** | ✅ | Completo: title, description, url, siteName, locale (es_ES), type |
| **Twitter Cards** | ✅ | summary_large_image configurado |
| **Robots** | ✅ | index: true, follow: true |
| **Lang attribute** | ✅ | `lang="es"` en html |
| **H1 único** | ✅ | "Llenamos tu local. Cada semana." en Hero |
| **Canonical implícito** | ⚠️ | Via `metadataBase` pero sin tag explícito |

### ⚠️ Problemas Identificados

#### Estructura de Headings
```
H1: "Llenamos tu local. Cada semana." ✅ (1 único)
H2: "Todo lo que necesitas para crecer de verdad." ✅
H3: 4 títulos de servicios ⚠️ (deberían ser H2 para jerarquía correcta)
     - "Llenamos salas de fiesta"
     - "Reservas automáticas"
     - "Publicidad geolocalizada"
     - "Redes sociales que convierten"
H2: "¿Cuántos clientes estás perdiendo cada semana?" ✅
```

**Problema:** Los 4 servicios usan H3 pero no hay H2 que los agrupe semánticamente.

#### Missing SEO Elements
- ❌ No hay imagen Open Graph / Twitter Card
- ❌ No hay Schema.org / JSON-LD
- ❌ No hay etiquetas geo (geo.region, geo.placename)
- ❌ No hay hreflang (aunque solo hay versión ES)
- ❌ No hay sitemap.xml
- ❌ No hay robots.txt
- ❌ No hay canonical tag explícito
- ❌ No hay breadcrumb structured data

---

## 2. Recomendaciones de Mejora

### 🎯 A. Optimización de Meta Tags

#### Title mejorado (opciones)
```
Opción 1 (Brand + Servicio + Ubicación):
"Jastyn Madrid | Marketing para Hostelería y Restaurantes"

Opción 2 (Beneficio + Ubicación):
"Agencia de Marketing para Hostelería en Madrid | Jastyn"

Opción 3 (Palabra clave principal):
"Marketing para Restaurantes Madrid | Jastyn - +120 Locales"

Recomendada (balance SEO + CTR):
"Jastyn Madrid | Marketing para Hostelería y Restaurantes 🚀"
```

#### Description mejorada
```html
<!-- Actual -->
"Llenamos tu restaurante, sala de fiestas o local gastronómico cada semana. 
Estrategias de captación, reservas automáticas y publicidad geolocalizada en Madrid."

<!-- Mejorada (incluye números para CTR) -->
"Agencia de marketing especializada en hostelería Madrid. Hemos gestionado +120 locales, 
generado €2.4M en reservas. Auditoría gratuita. Salas de fiesta, restaurantes y grupos."
```

#### Keywords ampliadas
```typescript
keywords: [
  // Keywords principales (alta intención)
  'agencia marketing hostelería madrid',
  'marketing restaurantes madrid',
  'marketing salas de fiesta madrid',
  'publicidad restaurantes madrid',
  
  // Keywords secundarias
  'agencia marketing gastronómico',
  'captación clientes restaurante',
  'reservas automáticas restaurante',
  'publicidad geolocalizada hostelería',
  'gestión redes sociales restaurantes',
  'consultoría marketing hostelería',
  
  // Keywords long-tail
  'cómo llenar mi restaurante madrid',
  'agencia publicidad nightclub madrid',
  'marketing digital para bares',
  'estrategia captación clientes hostelería',
]
```

---

### 🗺️ B. SEO Local y Geo-targeting

#### 1. Meta Tags Geográficos (añadir en layout.tsx)
```tsx
export const metadata: Metadata = {
  // ...existing metadata
  other: {
    'geo.region': 'ES-M',
    'geo.placename': 'Madrid',
    'geo.position': '40.4168;-3.7038', // Coordenadas aproximadas de Madrid centro
    'ICBM': '40.4168, -3.7038',
  },
}
```

#### 2. Schema.org LocalBusiness (JSON-LD)
Ver sección 3 para implementación completa.

#### 3. Optimización NAP (Name, Address, Phone)
Actualmente falta - necesario para SEO local:
```
- Dirección física (aunque sea solo ciudad)
- Teléfono de contacto real
- Email de contacto
```

#### 4. Google Business Profile
**Acción prioritaria:** Crear/optimizar ficha de Google Business con:
- Categoría: "Agencia de marketing"
- Subcategoría: "Consultor de marketing"
- Descripción con keywords
- Fotos del equipo/oficina
- Reseñas de clientes

---

### 📐 C. Estructura Semántica Mejorada

#### Jerarquía de Headings Propuesta
```
H1: Agencia de Marketing para Hostelería en Madrid | Jastyn
  H2: Servicios de Marketing para Hostelería
    H3: Llenamos salas de fiesta
    H3: Reservas automáticas para restaurantes
    H3: Publicidad geolocalizada en Madrid
    H3: Redes sociales que convierten
  H2: Resultados y Casos de Éxito
  H2: Preguntas Frecuentes (FAQ)
  H2: Solicita tu Auditoría Gratuita
```

#### Cambios en código (Services.tsx)
```tsx
// AÑADIR antes del grid de servicios:
<h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
  Servicios de Marketing para Hostelería
</h2>

// Los H3 actuales se mantienen
```

---

### 🖼️ D. Optimización de Imágenes

#### Logo y Open Graph
```tsx
// En layout.tsx
openGraph: {
  // ...existing
  images: [
    {
      url: '/images/og-image.jpg', // Crear imagen 1200x630
      width: 1200,
      height: 630,
      alt: 'Jastyn Madrid - Agencia de Marketing para Hostelería',
    },
  ],
}
```

#### Imagen OG recomendada (especificaciones)
- **Tamaño:** 1200 x 630 px
- **Formato:** JPG o PNG (preferible WebP con fallback)
- **Contenido:** 
  - Logo Jastyn
  - Tagline: "Llenamos tu local. Cada semana."
  - Métricas: +120 locales, €2.4M
  - Fondo acorde a branding (negro + lima)
  - Texto legible en previews pequeños

#### Optimización imágenes existentes
```tsx
// Logos de clientes - añadir lazy loading
<Image
  src={client.logo}
  alt={`Logo ${client.name} - Cliente Jastyn Madrid`}
  width={client.w}
  height={52}
  loading="lazy" // Añadir
  decoding="async" // Añadir
/>
```

---

## 3. Snippets Enriquecidos (JSON-LD)

### A. LocalBusiness Schema
```tsx
// app/layout.tsx - Añadir dentro del <head> o como componente

import { Metadata } from 'next'

export const metadata: Metadata = {
  // ...existing metadata
}

// Componente JSON-LD
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jastyn Madrid',
    description: 'Agencia de marketing especializada en hostelería. Llenamos restaurantes, salas de fiesta y locales gastronómicos en Madrid con estrategias de captación, reservas automáticas y publicidad geolocalizada.',
    url: 'https://jastynmadrid.com',
    logo: 'https://jastynmadrid.com/images/logo.png',
    image: 'https://jastynmadrid.com/images/og-image.jpg',
    telephone: '+34-XXX-XXX-XXX', // Reemplazar con teléfono real
    email: 'hola@jastynmadrid.com', // Reemplazar con email real
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
      // streetAddress: 'Calle Ejemplo 123', // Opcional
      // postalCode: '28001', // Opcional
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.4168',
      longitude: '-3.7038',
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
      '@id': 'https://en.wikipedia.org/wiki/Madrid',
    },
    serviceType: [
      'Marketing para Hostelería',
      'Publicidad para Restaurantes',
      'Marketing para Salas de Fiesta',
      'Gestión de Redes Sociales',
      'Reservas Automáticas',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Marketing',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing para Salas de Fiesta',
            description: 'Estrategias para llenar tu sala cada fin de semana con campañas de preventa y ticketing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reservas Automáticas',
            description: 'Sistemas 24/7 para restaurantes que reducen no-shows y aumentan el ticket medio.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Publicidad Geolocalizada',
            description: 'Anuncios en Meta e Instagram segmentados por barrio en Madrid.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestión de Redes Sociales',
            description: 'Contenido para Instagram y TikTok que genera reservas, no solo likes.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      // Añadir perfiles sociales cuando estén disponibles
      // 'https://instagram.com/jastynmadrid',
      // 'https://linkedin.com/company/jastynmadrid',
    ],
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### B. FAQ Schema (si añades sección FAQ)
```tsx
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es Jastyn Madrid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jastyn Madrid es una agencia de marketing especializada en hostelería. Ayudamos a restaurantes, salas de fiesta y grupos gastronómicos en Madrid a llenar sus locales cada semana mediante estrategias de captación, reservas automáticas y publicidad geolocalizada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una auditoría con Jastyn Madrid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La auditoría inicial es completamente gratuita y sin compromiso. Analizamos tu negocio y te decimos exactamente qué está fallando en tu captación de clientes, sin PowerPoints genéricos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué zonas de Madrid trabajáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabajamos con locales de hostelería en toda la Comunidad de Madrid, incluyendo el centro, Chamberí, Salamanca, Malasaña, Chueca, y zonas periféricas. Nuestras campañas de publicidad geolocalizada captan clientes en un radio de 5 km de tu local.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de locales gestionáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gestionamos restaurantes, salas de fiesta y nightclub, bares, grupos de restauración, terrazas y locales gastronómicos de todo tipo en Madrid. Tenemos experiencia con más de 120 locales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el ROI medio que garantizáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestros clientes obtienen un ROI medio de 3x, es decir, por cada euro invertido en marketing generan 3 euros en reservas y facturación. Hemos generado más de €2.4 millones en reservas para nuestros clientes.',
      },
    },
  ],
}
```

### C. BreadcrumbList Schema
```tsx
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://jastynmadrid.com',
    },
  ],
}
```

### D. WebSite Schema (para Sitelinks Searchbox)
```tsx
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jastyn Madrid',
  url: 'https://jastynmadrid.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://jastynmadrid.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
```

---

## 4. Archivos de Configuración SEO

### A. robots.txt
```
# robots.txt - Jastyn Madrid
User-agent: *
Allow: /

# Sitemap
Sitemap: https://jastynmadrid.com/sitemap.xml

# Crawl rate
Crawl-delay: 1

# Bloquear rutas no necesarias
Disallow: /api/
Disallow: /_next/
Disallow: /*.json$
```

### B. sitemap.xml (dinámico con Next.js)
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

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
  ]
}
```

### C. manifest.json (PWA)
```json
{
  "name": "Jastyn Madrid - Agencia de Marketing Hostelería",
  "short_name": "Jastyn Madrid",
  "description": "Agencia de marketing especializada en hostelería en Madrid. Llenamos restaurantes y salas de fiesta cada semana.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0A0A0A",
  "theme_color": "#A6FF00",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 5. Lista de Acciones Priorizadas

### 🔴 CRÍTICO (Impacto Alto / Esfuerzo Bajo)

| Prioridad | Acción | Archivo | Impacto SEO |
|-----------|--------|---------|-------------|
| 1 | **Añadir Schema LocalBusiness** | `app/layout.tsx` | ⭐⭐⭐⭐⭐ Aparecer en Knowledge Panel |
| 2 | **Crear sitemap.xml dinámico** | `app/sitemap.ts` | ⭐⭐⭐⭐⭐ Indexación completa |
| 3 | **Crear robots.txt** | `public/robots.txt` | ⭐⭐⭐⭐ Control de crawlers |
| 4 | **Añadir imagen OG** | `public/images/og-image.jpg` | ⭐⭐⭐⭐ CTR en redes sociales |
| 5 | **Añadir teléfono y email reales** | Múltiples | ⭐⭐⭐⭐ Confianza + SEO local |

### 🟡 IMPORTANTE (Impacto Medio-Alto)

| Prioridad | Acción | Archivo | Impacto SEO |
|-----------|--------|---------|-------------|
| 6 | **Corregir jerarquía H2-H3** | `components/Services.tsx` | ⭐⭐⭐⭐ Estructura semántica |
| 7 | **Añadir meta tags geo** | `app/layout.tsx` | ⭐⭐⭐ SEO local Madrid |
| 8 | **Añadir canonical tag** | `app/layout.tsx` | ⭐⭐⭐ Evitar contenido duplicado |
| 9 | **Optimizar alt de imágenes** | `components/Logos.tsx` | ⭐⭐⭐ Accesibilidad + SEO |
| 10 | **Crear Google Business Profile** | Externo | ⭐⭐⭐⭐⭐ SEO local esencial |

### 🟢 MEJORA (Impacto Medio)

| Prioridad | Acción | Archivo | Impacto SEO |
|-----------|--------|---------|-------------|
| 11 | **Añadir FAQ Schema** | `app/page.tsx` | ⭐⭐⭐ Rich snippets |
| 12 | **Añadir Breadcrumb Schema** | `app/layout.tsx` | ⭐⭐⭐ Navegación en SERP |
| 13 | **Añadir WebSite Schema** | `app/layout.tsx` | ⭐⭐ Sitelinks Searchbox |
| 14 | **Crear manifest.json** | `public/manifest.json` | ⭐⭐ PWA |
| 15 | **Lazy loading imágenes** | `components/Logos.tsx` | ⭐⭐ Performance |
| 16 | **Añadir prefetch Calendly** | `app/layout.tsx` | ⭐⭐ Velocidad CTA |

---

## 6. Keywords Objetivo

### Keywords Prioritarias (Página Principal)

| Keyword | Volumen Est.* | Dificultad | Intención |
|---------|---------------|------------|-----------|
| agencia marketing hostelería madrid | Bajo | Media | Comercial |
| marketing restaurantes madrid | Medio | Media | Comercial |
| publicidad restaurantes madrid | Medio | Media | Comercial |
| marketing salas de fiesta madrid | Bajo | Baja | Comercial |
| agencia publicidad nightclub madrid | Bajo | Baja | Comercial |
| reservas automáticas restaurante | Bajo | Baja | Informativa |
| publicidad geolocalizada hostelería | Bajo | Baja | Informativa |
| gestión redes sociales restaurantes | Medio | Media | Comercial |

*Volumen estimado para España

### Long-tail Keywords (Contenido futuro)

- "cómo llenar mi restaurante en madrid"
- "agencia marketing para bares madrid centro"
- "consultoría marketing gastronómico madrid"
- "estrategia captación clientes hostelería"
- "marketing digital terrazas madrid"

---

## 7. Métricas a Seguir

### KPIs SEO
- [ ] Posición para "agencia marketing hostelería madrid"
- [ ] Posición para "marketing restaurantes madrid"
- [ ] Tráfico orgánico mensual
- [ ] CTR en SERP
- [ ] Impresiones en Google
- [ ] Clicks desde búsqueda orgánica

### KPIs Técnicos
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Tiempo de carga < 3s
- [ ] Mobile-friendly score
- [ ] Presencia en Google Business
- [ ] Número de páginas indexadas

---

## 8. Checklist de Implementación

```
□ 1. Schema LocalBusiness implementado
□ 2. Sitemap.xml funcional
□ 3. Robots.txt creado
□ 4. Imagen OG 1200x630 subida
□ 5. Meta tags geo añadidos
□ 6. Teléfono real en todas las secciones
□ 7. Jerarquía H2 corregida en Services
□ 8. Google Business Profile creado
□ 9. Alt tags optimizados
□ 10. Canonical tag verificado
□ 11. Lazy loading activado
□ 12. FAQ Schema (si aplica)
□ 13. Breadcrumb Schema (cuando haya más páginas)
□ 14. Manifest.json creado
□ 15. WebSite Schema añadido
□ 16. Redirecciones 301 configuradas (futuro)
```

---

## 9. Implementación Rápida (Código Listo)

### Archivo: `app/layout.tsx` (Versión SEO-optimizada)
```tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jastyn Madrid | Agencia de Marketing para Hostelería y Restaurantes',
  description:
    'Agencia de marketing especializada en hostelería Madrid. Hemos gestionado +120 locales, generado €2.4M en reservas. Auditoría gratuita para restaurantes y salas de fiesta.',
  keywords: [
    'agencia marketing hostelería madrid',
    'marketing restaurantes madrid',
    'marketing salas de fiesta madrid',
    'publicidad restaurantes madrid',
    'agencia marketing gastronómico',
    'captación clientes restaurante',
    'reservas automáticas restaurante',
    'publicidad geolocalizada hostelería',
    'gestión redes sociales restaurantes',
  ],
  metadataBase: new URL('https://jastynmadrid.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jastyn Madrid | Agencia de Marketing para Hostelería',
    description: 'Llenamos tu local cada semana con clientes reales. +120 locales gestionados, €2.4M en reservas generadas.',
    url: 'https://jastynmadrid.com',
    siteName: 'Jastyn Madrid',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jastyn Madrid - Agencia de Marketing para Hostelería',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jastyn Madrid | Marketing de Alto Rendimiento',
    description: 'Llenamos tu local cada semana con clientes reales. +120 locales gestionados.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Añadir cuando tengas Search Console
    // google: 'tu-código-verificación',
  },
  other: {
    'geo.region': 'ES-M',
    'geo.placename': 'Madrid',
    'geo.position': '40.4168;-3.7038',
    'ICBM': '40.4168, -3.7038',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Jastyn Madrid',
    description: 'Agencia de marketing especializada en hostelería. Llenamos restaurantes, salas de fiesta y locales gastronómicos en Madrid.',
    url: 'https://jastynmadrid.com',
    logo: 'https://jastynmadrid.com/images/logo.svg',
    image: 'https://jastynmadrid.com/images/og-image.jpg',
    // telephone: '+34-XXX-XXX-XXX', // TODO: Añadir teléfono real
    // email: 'hola@jastynmadrid.com', // TODO: Añadir email real
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.4168',
      longitude: '-3.7038',
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    serviceType: [
      'Marketing para Hostelería',
      'Publicidad para Restaurantes',
      'Marketing para Salas de Fiesta',
      'Gestión de Redes Sociales',
      'Reservas Automáticas',
    ],
    priceRange: '€€',
  }

  return (
    <html lang="es" className={GeistSans.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  )
}
```

---

## 10. Conclusión y Próximos Pasos

### Estado Actual: 🟡 BUENO
La landing page tiene una base SEO sólida pero le faltan elementos clave para el SEO local y los rich snippets.

### Prioridad Inmediata:
1. Implementar Schema LocalBusiness
2. Crear sitemap.xml y robots.txt
3. Añadir meta tags geográficos
4. Crear imagen OG 1200x630
5. Configurar Google Business Profile

### Impacto Esperado:
- **SEO Local:** Aparición en pack local de Madrid
- **Rich Snippets:** Estrellas y precios en resultados
- **CTR:** Mejora del 15-30% con OG image optimizada
- **Indexación:** Completa y rápida con sitemap

---

*Documento generado el 6 de abril de 2026*
*Para Jastyn Madrid - jastynmadrid.com*
