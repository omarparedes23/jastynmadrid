'use client'

// ─── CTA Final: Banner de máxima conversión (#contacto) ──────
// Garantiza exclusividad de zona y contacto directo por WhatsApp

import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section id="contacto" className="py-10 px-6 md:px-10 lg:px-20 pb-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-[#A6FF00] px-8 md:px-16 py-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_90px_rgba(166,255,0,0.22)]"
        >
          {/* Decoración geométrica de fondo */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #000 0%, transparent 70%)' }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 right-48 w-60 h-60 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #000 0%, transparent 70%)' }}
          />

          {/* Copy izquierdo */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/10 border border-black/15 px-3.5 py-1.5 rounded-full text-black text-xs font-black uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              Exclusividad garantizada · Solo 1 local por categoría y barrio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.05] mb-4">
              ¿Cuántos clientes estás perdiendo cada semana?
            </h2>
            <p className="text-black/75 text-lg leading-relaxed font-medium">
              Analizamos tu negocio sin coste y te decimos exactamente qué está fallando en tu captación. Sin PowerPoints genéricos. Solo un plan de acción real para llenar tu local en Madrid.
            </p>
          </div>

          {/* CTA derecho */}
          <div className="relative z-10 flex flex-col items-center lg:items-end gap-4 shrink-0 w-full lg:w-auto">
            <motion.a
              href="https://wa.me/34629059219?text=Hola%2C%20quiero%20comprobar%20disponibilidad%20en%20mi%20zona%20de%20Madrid%20y%20solicitar%20mi%20auditor%C3%ADa%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 15px 35px rgba(0,0,0,0.28)' }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-[#A6FF00] font-black text-base md:text-lg px-9 py-5 rounded-2xl transition-all duration-200"
            >
              Reservar Auditoría por WhatsApp
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <p className="text-black/65 text-xs font-bold text-center">
              ✓ 100% Gratuita · ✓ Sin Compromiso · ✓ Respuesta en menos de 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
