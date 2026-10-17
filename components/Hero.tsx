'use client'

// ─── Hero: Propuesta de valor + Video Caso de Estudio + KPIs ──
// Conserva intacto el H1 y copy SEO principal

import { useState } from 'react'
import { motion } from 'framer-motion'

const YOUTUBE_ID = '4Rrr0Os38P8'
const YOUTUBE_TITLE = 'Jastyn Madrid — Cómo trabajamos'

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeSlideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.1 },
  }),
}

const HERO_STATS = [
  {
    value: '+120',
    label: 'Locales en Madrid',
    sublabel: 'Restaurantes, rooftops y discotecas',
  },
  {
    value: '€2.4M',
    label: 'Generados para Clientes',
    sublabel: 'En reservas y entradas directas',
  },
  {
    value: '3x',
    label: 'ROI Promedio Garantizado',
    sublabel: 'Retorno medible desde el mes 1',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-28 md:pt-36 pb-20 overflow-hidden bg-noise">
      {/* Rejilla arquitectónica de fondo */}
      <div aria-hidden className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Glows ambientales lima */}
      <div
        aria-hidden
        className="absolute -top-36 -left-36 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.08) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute top-1/4 -right-24 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          {/* ── Columna izquierda: Copy de alta conversión ──────── */}
          <motion.div
            variants={fadeSlideLeft}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Etiqueta pre-título con pulso en vivo */}
            <div className="inline-flex items-center gap-2.5 bg-[#A6FF00]/[0.08] border border-[#A6FF00]/25 px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A6FF00]" />
              </span>
              <span className="text-[#A6FF00] text-xs font-bold tracking-[0.14em] uppercase">
                Agencia #1 en Hostelería y Ocio Nocturno · Madrid
              </span>
            </div>

            {/* H1 principal con gradiente lima → blanco (100% preservado para SEO) */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.03]">
              <span
                className="block"
                style={{
                  background: 'linear-gradient(130deg, #A6FF00 0%, #ffffff 58%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Llenamos tu local.
              </span>
              <span className="block text-white mt-1">Cada semana.</span>
            </h1>

            {/* Subtítulo: propuesta directa, sin relleno */}
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">
              Diseñamos sistemas de captación y reservas que llenan restaurantes,
              salas de fiesta y grupos de hostelería en Madrid —{' '}
              <span className="text-white font-semibold">
                sin depender de plataformas con comisiones abusivas, promotores externos ni suerte.
              </span>
            </p>

            {/* CTAs principales */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3.5 pt-2"
            >
              <motion.a
                href="https://wa.me/34629059219?text=Hola%2C%20quiero%20una%20auditor%C3%ADa%20gratuita%20para%20llenar%20mi%20local%20en%20Madrid"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#A6FF00] text-black font-black text-sm sm:text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-200 glow-accent-strong"
              >
                Solicita tu auditoría gratuita
                <ArrowRight />
              </motion.a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/15 text-white/85 font-semibold text-sm sm:text-base px-7 py-4 rounded-full hover:border-[#A6FF00]/50 hover:text-[#A6FF00] hover:bg-white/[0.07] transition-all duration-200"
              >
                Ver casos de éxito reales
              </a>
            </motion.div>

            {/* Micro-copy de confianza inmediata */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/55 pt-1"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#A6FF00] font-bold">✓</span> Sin permanencia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#A6FF00] font-bold">✓</span> Exclusividad de zona en Madrid
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-[#A6FF00] font-bold">✓</span> Resultados desde los primeros 14 días
              </span>
            </motion.div>
          </motion.div>

          {/* ── Columna derecha: Video en marco Dashboard + KPIs ─ */}
          <motion.div
            variants={fadeSlideRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            {/* Resplandor trasero */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl blur-3xl -z-10"
              style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.16) 0%, transparent 70%)' }}
            />

            {/* Badge flotante superior derecha */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 right-4 z-20 bg-[#121212]/95 backdrop-blur-xl border border-[#A6FF00]/35 px-4 py-2.5 rounded-2xl shadow-2xl">
              <span className="text-base">📈</span>
              <div>
                <p className="text-xs font-black text-[#A6FF00] leading-none">+47% Reservas Directas</p>
                <p className="text-[10px] text-white/50 mt-0.5">Media en primeros 90 días</p>
              </div>
            </div>

            {/* Marco tipo consola / estudio */}
            <div className="rounded-2xl overflow-hidden bg-[#111111] border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.85),0_0_50px_rgba(166,255,0,0.08)]">
              {/* Barra superior del reproductor */}
              <div className="px-4 py-3 bg-[#161616] border-b border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6FF00]/70" />
                </div>
                <span className="text-[11px] font-medium text-white/60 truncate">
                  Caso de Estudio: Sistema de Captación en Madrid
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A6FF00] bg-[#A6FF00]/10 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF00]" />
                  Play
                </span>
              </div>

              {/* Contenedor del video YouTube */}
              <VideoFacade />


              {/* Barra inferior del marco con indicadores */}
              <div className="px-4 py-3 bg-[#141414] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 text-white/75 font-medium">
                  <span className="text-[#A6FF00]">📍</span> Radio 5km Madrid Activo
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#A6FF00] font-bold">
                  💸 0% Comisión por Mesa
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tarjetas Bento de Métricas de Prueba Social ────────── */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 lg:mt-16"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A6FF00]/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-baseline gap-3">
                <p className="text-3xl md:text-4xl font-black text-[#A6FF00] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white font-bold text-sm md:text-base">{stat.label}</p>
              </div>
              <p className="text-white/45 text-xs mt-1.5">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Miniatura + play; el iframe de YouTube solo se crea al hacer clic
function VideoFacade() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video bg-[#080808]">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
          title={YOUTUBE_TITLE}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir video: ${YOUTUBE_TITLE}`}
          className="group absolute inset-0 w-full h-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
            alt={YOUTUBE_TITLE}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span aria-hidden className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
          <span
            aria-hidden
            className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#A6FF00] text-black flex items-center justify-center shadow-[0_0_40px_rgba(166,255,0,0.35)] group-hover:scale-105 transition-transform"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
