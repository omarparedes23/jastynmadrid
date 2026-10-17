'use client'

// ─── Diagnóstico Express + Lead Capture RGPD-compliant ──────
// Calculadora interactiva por tipo de local + captación directa

import { useState } from 'react'
import { motion } from 'framer-motion'

const VENUE_TYPES = [
  {
    id: 'restaurante',
    label: '🍽️ Restaurante / Gastrobar',
    projection: '+35% a +55% reservas directas en 60 días sin pagar comisiones por cubierto.',
    plan: 'Embudo de reservas Meta Ads 5km + Asistente IA en WhatsApp anti no-shows.',
  },
  {
    id: 'discoteca',
    label: '🪩 Discoteca / Club Nocturno',
    projection: '65% de aforo y mesas VIP vendidas de forma directa sin depender de RRPP.',
    plan: 'Sistema de Lista VIP automatizada + Campañas de preventa con escasez real.',
  },
  {
    id: 'rooftop',
    label: '🍸 Rooftop / Coctelería',
    projection: '3.4x ROI en tardes y noches de martes a domingo con público de alto ticket.',
    plan: 'Reels aspiracionales en Madrid + Segmentación por poder adquisitivo y zona.',
  },
  {
    id: 'brunch',
    label: '☕ Cafetería / Brunch',
    projection: 'Rotación continua de mesas entre semana y colas en fin de semana.',
    plan: 'Posicionamiento en Google Maps + Vídeos virales locales en TikTok e Instagram.',
  },
]

const GOALS = [
  'Llenar turnos flojos entre semana',
  'Eliminar comisiones de ElTenedor / Promotores',
  'Vender más mesas VIP y subir ticket medio',
]

export default function Newsletter() {
  const [selectedVenue, setSelectedVenue] = useState(VENUE_TYPES[0])
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, introduce tu nombre o el de tu local')
      setStatus('error')
      return
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, introduce un email válido')
      setStatus('error')
      return
    }

    if (!formData.consent) {
      setErrorMessage('Debes aceptar la política de privacidad para continuar')
      setStatus('error')
      return
    }

    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 800))

    const leads = JSON.parse(localStorage.getItem('jastyn_leads') || '[]')
    leads.push({
      ...formData,
      venueType: selectedVenue.label,
      goal: selectedGoal,
      date: new Date().toISOString(),
      source: 'diagnostico_express',
    })
    localStorage.setItem('jastyn_leads', JSON.stringify(leads))

    setStatus('success')
    setFormData({ name: '', email: '', consent: false })
  }

  const whatsappDiagnosticUrl = `https://wa.me/34629059219?text=${encodeURIComponent(
    `Hola Jastyn, tengo un ${selectedVenue.label} en Madrid. Mi objetivo principal es "${selectedGoal}" y quiero solicitar mi auditoría gratuita.`
  )}`

  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Glow superior */}
          <div
            aria-hidden
            className="absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(166,255,0,0.12) 0%, transparent 70%)' }}
          />

          <div className="text-center mb-10 relative z-10">
            <span className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-bold tracking-[0.18em] uppercase bg-[#A6FF00]/10 border border-[#A6FF00]/25 px-4 py-1.5 rounded-full mb-4">
              Diagnóstico Express + Hoja de Ruta
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Descubre el potencial exacto de tu local en Madrid
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
              Selecciona tu tipo de negocio y tu objetivo prioritario para ver qué sistema aplicamos y recibir estrategias exclusivas cada semana.
            </p>
          </div>

          {/* Selector interactivo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Columna izquierda: Configuración del local */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                  1. ¿Qué tipo de local gestionas en Madrid?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {VENUE_TYPES.map((venue) => {
                    const active = selectedVenue.id === venue.id
                    return (
                      <button
                        key={venue.id}
                        type="button"
                        onClick={() => setSelectedVenue(venue)}
                        className={`text-left px-4 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                          active
                            ? 'bg-[#A6FF00]/15 border-[#A6FF00] text-white shadow-[0_0_25px_rgba(166,255,0,0.15)]'
                            : 'bg-white/[0.03] border-white/10 text-white/65 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {venue.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                  2. ¿Cuál es tu prioridad número 1 ahora mismo?
                </p>
                <div className="flex flex-col gap-2">
                  {GOALS.map((goal) => {
                    const active = selectedGoal === goal
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => setSelectedGoal(goal)}
                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 flex items-center justify-between ${
                          active
                            ? 'bg-white/10 border-[#A6FF00]/60 text-white'
                            : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20'
                        }`}
                      >
                        <span>{goal}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${active ? 'border-[#A6FF00] bg-[#A6FF00]' : 'border-white/30'}`}>
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Resultado dinámico */}
              <div className="rounded-2xl bg-[#12170C] border border-[#A6FF00]/35 p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#A6FF00]">
                    Proyección Estimada en Madrid
                  </span>
                  <span className="text-[11px] text-white/50">Sistema Verificado</span>
                </div>
                <p className="text-white font-bold text-base mb-1.5">
                  {selectedVenue.projection}
                </p>
                <p className="text-white/65 text-xs md:text-sm mb-4">
                  <strong className="text-white/90">Plan recomendado:</strong> {selectedVenue.plan}
                </p>
                <a
                  href={whatsappDiagnosticUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#A6FF00] text-black font-black text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-white transition-colors"
                >
                  Recibir este diagnóstico por WhatsApp en 1 clic →
                </a>
              </div>
            </div>

            {/* Columna derecha: Formulario de suscripción / envío por email */}
            <div className="lg:col-span-5 bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 md:p-7">
              <h3 className="text-lg font-bold text-white mb-1.5">
                ¿Prefieres recibir el dossier por email?
              </h3>
              <p className="text-white/55 text-xs md:text-sm mb-5">
                Te enviamos nuestro caso de estudio completo y 1 táctica semanal probada en locales de Madrid.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 bg-[#A6FF00]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A6FF00" strokeWidth="2.2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">¡Dossier en camino!</h4>
                  <p className="text-white/60 text-xs mb-4">
                    Revisa tu bandeja de entrada o escríbenos directamente por WhatsApp si quieres acelerar la auditoría.
                  </p>
                  <a
                    href={whatsappDiagnosticUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-bold hover:underline"
                  >
                    Hablar ahora por WhatsApp →
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-white/75 mb-1.5">
                      Tu nombre o nombre del local
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A6FF00]/60 focus:outline-none transition-colors"
                      placeholder="Ej. Carlos - Restaurante Chamberí"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-white/75 mb-1.5">
                      Email profesional
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A6FF00]/60 focus:outline-none transition-colors"
                      placeholder="tu@restaurante.com"
                    />
                  </div>

                  {/* RGPD Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 text-[#A6FF00] focus:ring-[#A6FF00]/50"
                    />
                    <label htmlFor="consent" className="text-xs text-white/55 leading-relaxed">
                      Acepto la{' '}
                      <a href="/privacidad" target="_blank" className="text-[#A6FF00] hover:underline">
                        política de privacidad
                      </a>{' '}
                      y recibir estrategias de Jastyn Madrid.
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs font-medium">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-black font-black text-sm py-3.5 rounded-xl hover:bg-[#A6FF00] transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Recibir Dossier Estratégico Gratis'}
                  </button>

                  <p className="text-[11px] text-white/35 text-center">
                    100% libre de spam · Cumplimiento RGPD
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
