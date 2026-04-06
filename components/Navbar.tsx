'use client'

// ─── Navbar: Logo + enlaces + CTA ────────────────────────────
// Sticky con fondo blur al hacer scroll

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Resultados', href: '#resultados' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detecta scroll para activar el fondo blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/publicidadmadridlogoVerde02.png"
            alt="Jastyn Madrid"
            width={160}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://wa.me/34629059219?text=Hola%2C%20quiero%20mi%20auditor%C3%ADa%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#A6FF00] text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-200"
          >
            Auditoría Gratuita
          </motion.a>
        </div>

        {/* Menú hamburguesa mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
          className="md:hidden bg-[#111] border-t border-white/10 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-[#A6FF00] text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/34629059219?text=Hola%2C%20quiero%20mi%20auditor%C3%ADa%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#A6FF00] text-black font-bold text-sm px-5 py-3 rounded-full text-center"
          >
            Auditoría Gratuita
          </a>
        </motion.div>
      )}
    </header>
  )
}
