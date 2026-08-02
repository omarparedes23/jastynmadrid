import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

/* ═══════════════════════════════════════════════════════════════
   METADATOS SEO OPTIMIZADOS PARA JASTYN MADRID
   Incluye: Open Graph, Twitter Cards, Schema.org, Geo-tags
   ═══════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {
  // ─── Title & Description ─────────────────────────────────────
  title: 'Jastyn Madrid | Agencia de Marketing para Hostelería y Restaurantes',
  description:
    'Agencia de marketing especializada en hostelería Madrid. Hemos gestionado +120 locales, generado €2.4M en reservas. Auditoría gratuita para restaurantes y salas de fiesta.',
  
  // ─── Keywords ─────────────────────────────────────────────────
  keywords: [
    // Keywords principales (alta intención comercial)
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
  ],
  
  // ─── Base URL para canonical y OG ─────────────────────────────
  metadataBase: new URL('https://www.publicidadmadrid.es'),
  
  // ─── Canonical URL ────────────────────────────────────────────
  alternates: {
    canonical: '/',
  },
  
  // ─── Open Graph (Facebook, LinkedIn, WhatsApp) ────────────────
  openGraph: {
    title: 'Jastyn Madrid | Agencia de Marketing para Hostelería',
    description: 'Llenamos tu local cada semana con clientes reales. +120 locales gestionados, €2.4M en reservas generadas.',
    url: 'https://www.publicidadmadrid.es',
    siteName: 'Jastyn Madrid',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jastyn Madrid - Agencia de Marketing para Hostelería en Madrid',
      },
    ],
  },
  
  // ─── Twitter Cards ────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Jastyn Madrid | Marketing de Alto Rendimiento para Hostelería',
    description: 'Llenamos tu local cada semana con clientes reales. +120 locales gestionados, €2.4M en reservas.',
    images: ['/images/og-image.jpg'],
  },
  
  // ─── Robots / Indexación ──────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ─── Google Search Console (añadir cuando se tenga) ───────────
  // verification: {
  //   google: 'tu-código-de-verificación',
  // },
  
  // ─── Autores y Copyright ──────────────────────────────────────
  authors: [{ name: 'Jastyn Madrid' }],
  creator: 'Jastyn Madrid',
  publisher: 'Jastyn Madrid',
  
  // ─── Geo-tags para SEO Local ──────────────────────────────────
  other: {
    'geo.region': 'ES-M',
    'geo.placename': 'Madrid',
    'geo.position': '40.4168;-3.7038',
    'ICBM': '40.4168, -3.7038',
  },
  
  category: 'Marketing',
  classification: 'Business',
}

/* ═══════════════════════════════════════════════════════════════
   SCHEMA.ORG JSON-LD - LOCALBUSINESS
   ═══════════════════════════════════════════════════════════════ */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jastyn Madrid',
  alternateName: 'Jastyn',
  description: 'Agencia de marketing especializada en hostelería. Llenamos restaurantes, salas de fiesta y locales gastronómicos en Madrid con estrategias de captación, reservas automáticas y publicidad geolocalizada.',
  url: 'https://www.publicidadmadrid.es',
  logo: 'https://www.publicidadmadrid.es/images/logo.svg',
  image: 'https://www.publicidadmadrid.es/images/og-image.jpg',
  
  // DATOS DEL CLIENTE - ACTUALIZADOS
  telephone: '+34 629 05 92 19',
  email: 'jastyninn@gmail.com',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Uceda 95, 1 Izq',
    addressLocality: 'Madrid',
    addressRegion: 'Madrid',
    postalCode: '28053',
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
    '@id': 'https://en.wikipedia.org/wiki/Madrid',
  },
  
  serviceType: [
    'Marketing para Hostelería',
    'Publicidad para Restaurantes',
    'Marketing para Salas de Fiesta',
    'Marketing para Nightclubs',
    'Gestión de Redes Sociales',
    'Reservas Automáticas',
    'Publicidad Geolocalizada',
    'Consultoría Marketing Gastronómico',
  ],
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Marketing para Hostelería',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing para Salas de Fiesta',
          description: 'Estrategias probadas para llenar tu sala cada fin de semana: campañas de preventa, segmentación por audiencia y sistemas de ticketing que maximizan el aforo.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reservas Automáticas',
          description: 'Sistemas de reservas 24/7 para restaurantes y grupos de restauración. Reduce las no-shows, aumenta el ticket medio y libera a tu equipo de llamadas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Publicidad Geolocalizada',
          description: 'Anuncios en Meta e Instagram segmentados por barrio, radio y comportamiento en Madrid. Captamos clientes a 5 km de tu local, no a 500.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestión de Redes Sociales',
          description: 'Gestión integral de Instagram y TikTok con contenido que genera reservas, no solo likes. Cada post tiene un objetivo claro: traer gente a tu puerta.',
        },
      },
    ],
  },
  
  priceRange: '€€',
  
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  
  foundingDate: '2023',
}

/* ═══════════════════════════════════════════════════════════════
   SCHEMA.ORG JSON-LD - WEBSITE
   ═══════════════════════════════════════════════════════════════ */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jastyn Madrid',
  url: 'https://www.publicidadmadrid.es',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.publicidadmadrid.es/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

/* ═══════════════════════════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════════════════════════ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={GeistSans.className}>
      <head>
        {/* Preconnect a dominios externos */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Tema color */}
        <meta name="theme-color" content="#A6FF00" />
        <meta name="msapplication-TileColor" content="#A6FF00" />
        
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
