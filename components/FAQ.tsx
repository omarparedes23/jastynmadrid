'use client'

// ════════════════════════════════════════════════════════════════
// FAQ Component con Schema.org JSON-LD intacto
// Mejora SEO con rich snippets de preguntas frecuentes
// ════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: '¿Qué es Jastyn Madrid?',
    answer:
      'Jastyn Madrid es una agencia de marketing especializada en hostelería. Ayudamos a restaurantes, salas de fiesta y grupos gastronómicos en Madrid a llenar sus locales cada semana mediante estrategias de captación, reservas automáticas y publicidad geolocalizada.',
  },
  {
    question: '¿Cuánto cuesta una auditoría con Jastyn Madrid?',
    answer:
      'La auditoría inicial es completamente gratuita y sin compromiso. Analizamos tu negocio y te decimos exactamente qué está fallando en tu captación de clientes, sin PowerPoints genéricos.',
  },
  {
    question: '¿En qué zonas de Madrid trabajáis?',
    answer:
      'Trabajamos con locales de hostelería en toda la Comunidad de Madrid, incluyendo el centro, Chamberí, Salamanca, Malasaña, Chueca, y zonas periféricas. Nuestras campañas de publicidad geolocalizada captan clientes en un radio de 5 km de tu local.',
  },
  {
    question: '¿Qué tipo de locales gestionáis?',
    answer:
      'Gestionamos restaurantes, salas de fiesta y nightclub, bares, grupos de restauración, terrazas y locales gastronómicos de todo tipo en Madrid. Tenemos experiencia con más de 120 locales.',
  },
  {
    question: '¿Cuál es el ROI medio que garantizáis?',
    answer:
      'Nuestros clientes obtienen un ROI medio de 3x, es decir, por cada euro invertido en marketing generan 3 euros en reservas y facturación. Hemos generado más de €2.4 millones en reservas para nuestros clientes.',
  },
  {
    question: '¿Cómo funcionan las reservas automáticas?',
    answer:
      'Implementamos sistemas de reserva 24/7 que permiten a tus clientes reservar mesa en cualquier momento, incluso fuera de horario comercial. Reducen las no-shows hasta un 40% y aumentan el ticket medio mediante upselling automatizado.',
  },
]

// Schema.org FAQPage JSON-LD (100% preservado)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section id="faq" className="py-24 px-6 md:px-10 lg:px-20 bg-[#0A0A0A] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#A6FF00] text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Resolvemos tus dudas
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Preguntas{' '}
              <span
                style={{
                  background: 'linear-gradient(130deg, #A6FF00 0%, #ffffff 55%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                frecuentes
              </span>
            </h2>
            <p className="mt-4 text-white/55 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas saber antes de escalar las reservas y el aforo de tu local en Madrid.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#12140E] border-[#A6FF00]/45 shadow-[0_0_35px_rgba(166,255,0,0.06)]'
                      : 'bg-[#111111] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg transition-colors ${
                          isOpen
                            ? 'bg-[#A6FF00] text-black'
                            : 'bg-white/[0.05] text-white/40'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="text-white font-bold text-base md:text-lg">
                        {item.question}
                      </h3>
                    </div>
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#A6FF00] text-black rotate-45'
                          : 'bg-[#A6FF00]/10 text-[#A6FF00]'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 2v12M2 8h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16 text-white/70 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA inferior directo a WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
          >
            <p className="text-white/70 text-sm md:text-base mb-3">
              ¿Tienes una duda específica sobre tu restaurante, sala o grupo en Madrid?
            </p>
            <a
              href="https://wa.me/34629059219?text=Hola%2C%20tengo%20una%20consulta%20sobre%20vuestros%20servicios%20de%20marketing%20para%20hosteler%C3%ADa%20en%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#A6FF00] font-bold hover:gap-3 transition-all duration-200"
            >
              Habla directamente con un especialista por WhatsApp
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
