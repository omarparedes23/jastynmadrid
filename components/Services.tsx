'use client'

// ─── Services: Grid de servicios con icono, título y descripción
// Layout: 1 col mobile / 2 col md / 4 col lg

import { motion } from 'framer-motion'

const services = [
  {
    icon: <IconNightclub />,
    title: 'Llenamos salas de fiesta',
    description:
      'Estrategias probadas para llenar tu sala cada fin de semana: campañas de preventa, segmentación por audiencia y sistemas de ticketing que maximizan el aforo.',
    tag: 'Nightlife',
  },
  {
    icon: <IconReservation />,
    title: 'Reservas automáticas',
    description:
      'Sistemas de reservas 24/7 para restaurantes y grupos de restauración. Reduce las no-shows, aumenta el ticket medio y libera a tu equipo de llamadas.',
    tag: 'Restauración',
  },
  {
    icon: <IconGeo />,
    title: 'Publicidad geolocalizada',
    description:
      'Anuncios en Meta e Instagram segmentados por barrio, radio y comportamiento en Madrid. Captamos clientes a 5 km de tu local, no a 500.',
    tag: 'Paid Media',
  },
  {
    icon: <IconSocial />,
    title: 'Redes sociales que convierten',
    description:
      'Gestión integral de Instagram y TikTok con contenido que genera reservas, no solo likes. Cada post tiene un objetivo claro: traer gente a tu puerta.',
    tag: 'Social Media',
  },
]

/* Variante de entrada staggered */
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export default function Services() {
  return (
    <section id="metodologia" className="py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera de sección */}
        <div className="mb-14 max-w-2xl">
          <span className="text-[#A6FF00] text-xs font-semibold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-4">
            <span className="w-4 h-px bg-[#A6FF00]" />
            Qué hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Todo lo que necesitas para{' '}
            <span
              style={{
                background: 'linear-gradient(130deg, #A6FF00 0%, #ffffff 55%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              crecer de verdad.
            </span>
          </h2>
          <p className="mt-4 text-[#666] text-lg leading-relaxed">
            No vendemos humo. Cada servicio está diseñado para impactar directamente en tus reservas y tu facturación.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group flex flex-col gap-5 bg-[#111] border border-white/6 rounded-2xl p-6 cursor-default overflow-hidden"
            >
              {/* Glow hover lima */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(166,255,0,0.06) 0%, transparent 70%)' }}
              />

              {/* Tag flotante */}
              <span className="absolute top-4 right-4 text-[10px] text-[#A6FF00]/60 font-semibold tracking-widest uppercase">
                {service.tag}
              </span>

              {/* Icono */}
              <div className="w-11 h-11 rounded-xl bg-[#A6FF00]/10 flex items-center justify-center text-[#A6FF00] group-hover:bg-[#A6FF00]/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-white font-bold text-lg leading-snug">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-[#666] text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* CTA inline */}
              <a
                href="https://calendly.com/jastynmadrid/auditoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A6FF00] text-sm font-medium hover:gap-3 transition-all duration-200 mt-auto"
              >
                Saber más
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Iconos inline (SVG optimizados) ───────────────────── */

function IconNightclub() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function IconReservation() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
}

function IconGeo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 1 8 8c0 5.25-8 14-8 14S4 15.25 4 10a8 8 0 0 1 8-8z" />
    </svg>
  )
}

function IconSocial() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-2.7 1.5-4 2c-1-.9-2.4-1.5-4-1.5-3.3 0-6 2.7-6 6 0 .5.1 1 .2 1.4C5.2 11.7 2.5 10 1 7.8c0 0-1 5 4 7-1 .5-2 .8-3 .8 1 2 3.5 3.4 6 3.4C4 21 1 22 1 22c2.5 1.5 5.5 2 9 2 10.8 0 16.7-9 16.4-17C27.4 6.5 22 4 22 4z" />
    </svg>
  )
}
