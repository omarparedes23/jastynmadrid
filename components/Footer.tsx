'use client'

// ─── Footer: Logo limpio ampliado (sin texto) + NAP Madrid + Redes ───

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@publicidadmadrid',
    icon: IconYouTube,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jastyn.madrid',
    icon: IconInstagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Madrid.Publicidad.Jastyn',
    icon: IconFacebook,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.08] py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] items-start">

          {/* Columna 1: Logo grande (sin texto añadido) + Descripción */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="inline-flex items-center" aria-label="Inicio Jastyn Madrid">
              <Image
                src="/images/logo-icon-clean.png"
                alt="Jastyn Madrid"
                width={140}
                height={140}
                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(166,255,0,0.22)]"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Agencia de marketing de alto rendimiento especializada en restaurantes, salas de fiesta, rooftops y grupos de hostelería en la Comunidad de Madrid.
            </p>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A6FF00] mb-1">
              Navegación
            </p>
            <a href="#metodologia" className="text-white/60 hover:text-white transition-colors">
              Metodología y Servicios
            </a>
            <a href="#resultados" className="text-white/60 hover:text-white transition-colors">
              Casos de Éxito en Madrid
            </a>
            <a href="#comparativa" className="text-white/60 hover:text-white transition-colors">
              Comparativa de Sistema
            </a>
            <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
              Blog para Hosteleros
            </Link>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors">
              Preguntas Frecuentes
            </a>
          </div>

          {/* Columna 3: Contacto Local en Madrid (NAP consistente con Schema.org) */}
          <div className="md:col-span-4 flex flex-col gap-3 text-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A6FF00] mb-1">
              Oficina &amp; Contacto Directo
            </p>
            <p className="text-white/70">
              📍 Calle Uceda 95, 28053 Madrid, España
            </p>
            <a
              href="tel:+34629059219"
              className="text-white/70 hover:text-[#A6FF00] transition-colors"
            >
              📞 +34 629 05 92 19
            </a>
            <a
              href="mailto:jastyninn@gmail.com"
              className="text-white/70 hover:text-[#A6FF00] transition-colors"
            >
              ✉️ jastyninn@gmail.com
            </a>

            {/* Redes sociales */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/65 hover:text-[#A6FF00] hover:border-[#A6FF00]/40 hover:bg-[#A6FF00]/10 transition-all duration-200"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Jastyn Madrid · Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Iconos SVG ─────────────────────────────────────────── */
function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
