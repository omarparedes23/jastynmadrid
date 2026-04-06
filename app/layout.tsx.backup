import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

/* ─── Metadatos SEO ──────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Jastyn Madrid | Agencia de Marketing para Hostelería',
  description:
    'Llenamos tu restaurante, sala de fiestas o local gastronómico cada semana. Estrategias de captación, reservas automáticas y publicidad geolocalizada en Madrid.',
  keywords: [
    'agencia marketing madrid',
    'marketing hostelería',
    'marketing restaurantes madrid',
    'salas de fiesta madrid',
    'reservas automáticas restaurante',
    'publicidad geolocalizada',
  ],
  metadataBase: new URL('https://jastynmadrid.com'),
  openGraph: {
    title: 'Jastyn Madrid | Agencia de Marketing para Hostelería',
    description: 'Llenamos tu local cada semana con clientes reales.',
    url: 'https://jastynmadrid.com',
    siteName: 'Jastyn Madrid',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jastyn Madrid | Marketing de Alto Rendimiento',
    description: 'Llenamos tu local cada semana con clientes reales.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ─── Root Layout ────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={GeistSans.className}>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  )
}
