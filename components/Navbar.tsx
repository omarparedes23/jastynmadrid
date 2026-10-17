'use client'

// ─── Navbar: Logo ampliado (sin texto añadido) + enlaces + CTA ───
// Sticky con fondo glassmorphic de alta gama al hacer scroll

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Comparativa', href: '#comparativa' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.65)]'
          : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">

        {/* Logo: Más grande, limpio, fondo transparente y SIN texto añadido */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Inicio Jastyn Madrid">
          <Image
            src="/images/logo-icon-clean.png"
            alt="Jastyn Madrid"
            width={160}
            height={160}
            priority
            className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_18px_rgba(166,255,0,0.28)]"
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-[#A6FF00] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Estado + CTA desktop */}
        <div className="hidden md:flex items-center gap-5">
          <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6FF00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A6FF00]" />
            </span>
            <span className="text-xs font-medium text-white/70">Disponible en Madrid</span>
          </div>

          <motion.a
            href="https://wa.me/34629059219?text=Hola%2C%20quiero%20una%20auditor%C3%ADa%20gratuita%20para%20llenar%20mi%20local%20en%20Madrid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#A6FF00] text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_25px_rgba(166,255,0,0.3)]"
          >
            <span>Solicitar Auditoría Gratis</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        {/* Menú hamburguesa mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0E0E0E]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] w-fit mb-1">
            <span className="h-2 w-2 rounded-full bg-[#A6FF00]" />
            <span className="text-xs font-medium text-white/70">Disponible en Madrid · Plazas limitadas</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#A6FF00] text-base font-semibold transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/34629059219?text=Hola%2C%20quiero%20una%20auditor%C3%ADa%20gratuita%20para%20llenar%20mi%20local%20en%20Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#A6FF00] text-black font-bold text-sm px-5 py-3.5 rounded-full text-center shadow-[0_0_20px_rgba(166,255,0,0.3)]"
          >
            Solicitar Auditoría Gratis
          </a>
        </motion.div>
      )}
    </header>
  )
}
