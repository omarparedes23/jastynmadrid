'use client'

// ─── Newsletter/Lead Capture Section ────────────────────────
// Formulario RGPD-compliant para captar emails

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, introduce tu nombre')
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
    
    // Simular envío - en producción aquí iría el fetch a tu API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Guardar en localStorage (para demo)
    const leads = JSON.parse(localStorage.getItem('jastyn_leads') || '[]')
    leads.push({
      ...formData,
      date: new Date().toISOString(),
      source: 'newsletter_section'
    })
    localStorage.setItem('jastyn_leads', JSON.stringify(leads))
    
    setStatus('success')
    setFormData({ name: '', email: '', consent: false })
  }

  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Recibe estrategias exclusivas para tu negocio
            </h2>
            <p className="text-[#888] max-w-lg mx-auto">
              Una vez por semana, enviamos tácticas probadas para llenar restaurantes y salas de fiesta en Madrid. Sin spam, solo valor.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-[#A6FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A6FF00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Gracias por suscribirte!</h3>
              <p className="text-[#888]">Pronto recibirás tu primera estrategia en tu email.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#A6FF00]/50 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#A6FF00]/50 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* RGPD Consent */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-white/30 bg-white/5 text-[#A6FF00] focus:ring-[#A6FF00]/50"
                />
                <label htmlFor="consent" className="text-sm text-white/60 leading-relaxed">
                  Acepto la{' '}
                  <a href="/privacidad" target="_blank" className="text-[#A6FF00] hover:underline">
                    política de privacidad
                  </a>{' '}
                  y el tratamiento de mis datos personales para recibir comunicaciones comerciales de Jastyn Madrid.
                </label>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#A6FF00] text-black font-bold py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Suscribirme gratis'}
              </button>

              <p className="text-xs text-white/40 text-center">
                Puedes darte de baja en cualquier momento. Respetamos tu privacidad según el RGPD.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
