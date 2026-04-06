'use client'

// ════════════════════════════════════════════════════════════════
// FAQ Component con Schema.org JSON-LD
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

// Schema.org FAQPage JSON-LD
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

      <section id="faq" className="py-24 px-6 md:px-10 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#A6FF00] text-xs font-semibold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              FAQ
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
            <p className="mt-4 text-[#666] text-lg max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre nuestros servicios de marketing para hostelería en Madrid.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#111]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-white font-bold text-lg pr-4">
                    {item.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#A6FF00]/10 flex items-center justify-center text-[#A6FF00] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
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
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-[#888] leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-[#666] mb-4">¿Tienes otras preguntas?</p>
            <a
              href="https://calendly.com/jastynmadrid/auditoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#A6FF00] font-semibold hover:gap-3 transition-all duration-200"
            >
              Habla con nosotros
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
