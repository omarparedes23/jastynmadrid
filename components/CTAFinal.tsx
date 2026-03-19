'use client'

// ─── CTA Final: Banner alto contraste → Calendly ─────────────
// Diseño de máxima urgencia y conversión

import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section id="resultados" className="py-8 px-6 md:px-10 lg:px-20 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-[#A6FF00] px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Decoración geométrica de fondo */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #000 0%, transparent 70%)' }}
          />
          <div
            aria-hidden
            className="absolute -bottom-16 right-48 w-52 h-52 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #000 0%, transparent 70%)' }}
          />

          {/* Copy izquierdo */}
          <div className="relative z-10 max-w-xl">
            <p className="text-black/60 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Auditoría gratuita · Sin compromiso
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-4">
              ¿Cuántos clientes estás perdiendo cada semana?
            </h2>
            <p className="text-black/70 text-lg leading-relaxed">
              Analizamos tu negocio sin coste y te decimos exactamente qué está fallando en tu captación. Sin PowerPoints genéricos. Solo respuestas reales.
            </p>
          </div>

          {/* CTA derecho */}
          <div className="relative z-10 flex flex-col items-center md:items-end gap-4 shrink-0">
            <motion.a
              href="https://calendly.com/jastynmadrid/auditoria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 0 4px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-black text-[#A6FF00] font-black text-base px-8 py-5 rounded-2xl transition-all duration-200"
            >
              Reserva tu auditoría ahora
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <p className="text-black/50 text-xs text-center">
              100% gratuita · Disponible esta semana · Respuesta en &lt;24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
