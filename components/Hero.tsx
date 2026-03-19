'use client'

// ─── Hero: Propuesta de valor + Video placeholder ─────────────
// Layout dos columnas (desktop) / una columna (mobile)
// Animaciones: fade + slide con Framer Motion

import { motion } from 'framer-motion'

/* Variantes de animación reutilizables */
const fadeSlideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeSlideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.35 + i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-20 pt-24 pb-16 overflow-hidden">

      {/* Glow de fondo lima: efecto ambiental */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.06) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Columna izquierda: Copy ──────────────────────────── */}
        <motion.div
          variants={fadeSlideLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-7"
        >
          {/* Etiqueta pre-título */}
          <span className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="w-4 h-px bg-[#A6FF00]" />
            Agencia de Marketing · Madrid, España
          </span>

          {/* H1 principal con gradiente lima → blanco */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04]">
            <span
              className="block"
              style={{
                background: 'linear-gradient(130deg, #A6FF00 0%, #ffffff 55%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Llenamos tu local.
            </span>
            <span className="block text-white">Cada semana.</span>
          </h1>

          {/* Subtítulo: propuesta directa, sin relleno */}
          <p className="text-[#888] text-lg md:text-xl leading-relaxed max-w-lg">
            Diseñamos sistemas de captación y reservas que llenan restaurantes,
            salas de fiesta y grupos de hostelería en Madrid —{' '}
            <span className="text-white/80">sin depender de plataformas externas ni suerte.</span>
          </p>

          {/* CTAs */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 pt-1"
          >
            <motion.a
              href="https://calendly.com/jastynmadrid/auditoria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#A6FF00] text-black font-bold text-sm sm:text-base px-7 py-4 rounded-full hover:bg-white transition-colors duration-200 shadow-[0_0_30px_rgba(166,255,0,0.25)]"
            >
              Solicita tu auditoría gratuita
              <ArrowRight />
            </motion.a>
            <a
              href="#resultados"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-medium text-sm sm:text-base px-7 py-4 rounded-full hover:border-[#A6FF00]/40 hover:text-[#A6FF00] transition-all duration-200"
            >
              Ver resultados
            </a>
          </motion.div>

          {/* Métricas de prueba social */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-8 pt-2 border-t border-white/8"
          >
            {[
              { value: '+120', label: 'Locales gestionados' },
              { value: '€2.4M', label: 'En reservas generadas' },
              { value: '3x', label: 'ROI medio garantizado' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-[#A6FF00]">{stat.value}</p>
                <p className="text-[#555] text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Columna derecha: Video placeholder 16:9 ─────────── */}
        <motion.div
          variants={fadeSlideRight}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Glow sutil detrás del video */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl blur-3xl scale-95 -z-10"
            style={{ background: 'rgba(166,255,0,0.08)' }}
          />

          {/* Contenedor del video YouTube */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/8"
            style={{ boxShadow: '0 0 80px rgba(166,255,0,0.10), 0 0 1px rgba(255,255,255,0.1)' }}
          >
            <iframe
              src="https://www.youtube.com/embed/H6Vq6trppAA?rel=0&modestbranding=1&color=white"
              title="Jastyn Madrid — Cómo trabajamos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Icono flecha inline ────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
