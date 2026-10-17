'use client'

// ─── Services + Comparativa + Hoja de Ruta 30 Días ──────────
// Conserva H2 semántico "Servicios de Marketing para Hostelería" y los 4 H3 intactos

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    icon: <IconNightclub />,
    title: 'Llenamos salas de fiesta',
    description:
      'Estrategias probadas para llenar tu sala cada fin de semana: campañas de preventa, segmentación por audiencia y sistemas de ticketing que maximizan el aforo.',
    tag: 'Nightlife',
    impact: 'Sold out recurrente viernes y sábados',
    deliverables: [
      'Embudos de Lista VIP y venta anticipada directa',
      'Reducción del 70% en comisiones de RRPP externos',
      'Cierre automatizado de reservados y botellas VIP',
    ],
    whatsappText: 'Hola, tengo una sala/club en Madrid y quiero información para llenar aforo y reservados VIP',
  },
  {
    number: '02',
    icon: <IconReservation />,
    title: 'Reservas automáticas',
    description:
      'Sistemas de reservas 24/7 para restaurantes y grupos de restauración. Reduce las no-shows, aumenta el ticket medio y libera a tu equipo de llamadas.',
    tag: 'Restauración & IA',
    impact: '-40% No-Shows · 0% comisión por cubierto',
    deliverables: [
      'Asistente IA en WhatsApp e Instagram 24/7',
      'Confirmación automática y recordatorios anti no-show',
      'Base de datos propia para reactivar clientes entre semana',
    ],
    whatsappText: 'Hola, quiero implementar el sistema de reservas automáticas sin comisiones en mi restaurante',
  },
  {
    number: '03',
    icon: <IconGeo />,
    title: 'Publicidad geolocalizada',
    description:
      'Anuncios en Meta e Instagram segmentados por barrio, radio y comportamiento en Madrid. Captamos clientes a 5 km de tu local, no a 500.',
    tag: 'Paid Media Local',
    impact: '3x a 5x retorno en facturación directa',
    deliverables: [
      'Segmentación hiper-local por código postal y barrio en Madrid',
      'Campañas para llenar turnos flojos (martes a jueves)',
      'Optimización en Google Maps y Meta Ads orientada a reservas',
    ],
    whatsappText: 'Hola, quiero atraer clientes en un radio de 5km para mi local en Madrid',
  },
  {
    number: '04',
    icon: <IconSocial />,
    title: 'Redes sociales que convierten',
    description:
      'Gestión integral de Instagram y TikTok con contenido que genera reservas, no solo likes. Cada post tiene un objetivo claro: traer gente a tu puerta.',
    tag: 'Producción & Social',
    impact: 'Reels virales en Madrid que se traducen en mesas',
    deliverables: [
      'Grabación presencial en tu local en Madrid con equipo propio',
      'Guiones psicológicos diseñados para despertar deseo y urgencia',
      'Automatización DM: de comentario en Reel a reserva confirmada',
    ],
    whatsappText: 'Hola, quiero mejorar el contenido de Instagram/TikTok de mi local para generar reservas reales',
  },
]

const TRADITIONAL_PAINS = [
  'Pagar entre un 15% y un 40% de comisión a portales (ElTenedor) o relaciones públicas por cada cliente.',
  'Agencias genéricas que suben fotos bonitas y consiguen likes, pero el local sigue vacío un miércoles.',
  'Cero control sobre tu base de datos: cuando el cliente sale por la puerta, no puedes volver a invitarle.',
  'Dependencia del buen tiempo, del paso de calle o de la suerte cada fin de semana.',
]

const JASTYN_ADVANTAGES = [
  '0% comisiones por cubierto o entrada: el 100% del margen y del cliente se queda en tu caja.',
  'Campañas hiper-segmentadas en un radio de 5 km en Madrid dirigidas a público con alto ticket medio.',
  'Sistema automatizado por WhatsApp e Instagram que confirma mesas y listas VIP 24/7 sin intervención humana.',
  'Base de datos VIP en propiedad para lanzar ofertas flash y llenar martes, miércoles y jueves en horas.',
]

const ROADMAP_STEPS = [
  {
    week: 'Semana 1',
    title: 'Auditoría & Embudo Directo Sin Comisiones',
    description:
      'Analizamos tus márgenes, diseñamos tu oferta gancho de alta rentabilidad y conectamos el sistema de reservas y listas VIP directas en WhatsApp/Web.',
    badge: 'Configuración en 7 días',
  },
  {
    week: 'Semana 2',
    title: 'Producción Audiovisual & Campañas Hiper-Locales',
    description:
      'Grabamos piezas de alto impacto en tu local y activamos anuncios segmentados en un radio de 5 km en Madrid (Meta, TikTok y Google Maps).',
    badge: 'Primeras reservas entrantes',
  },
  {
    week: 'Semana 3–4',
    title: 'Automatización IA & Llenado Recurrente',
    description:
      'Tu base de datos crece cada día. Activamos campañas automáticas de reactivación para llenar los días flojos y consolidar lista de espera el fin de semana.',
    badge: 'Escalado de facturación',
  },
]

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
    <section id="metodologia" className="py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Cabecera de sección - SEO OPTIMIZADA (Sin H2 duplicado visual) ── */}
        <div className="mb-16 max-w-3xl">
          {/* H2 SEMÁNTICO PARA SEO - Estilizado como badge premium */}
          <h2 className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#A6FF00] bg-[#A6FF00]/10 border border-[#A6FF00]/25 px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#A6FF00]" />
            Servicios de Marketing para Hostelería
          </h2>

          {/* Display principal en <p> para evitar colisión de doble H2 */}
          <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-white">
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
          </p>
          <p className="mt-4 text-white/60 text-lg leading-relaxed">
            No vendemos humo ni métricas de vanidad. Instalamos una infraestructura completa de captación diseñada para impactar directamente en tus reservas, tu aforo y tu facturación semanal.
          </p>
        </div>

        {/* ── Grid Bento de 4 Servicios Principales ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card relative group flex flex-col justify-between rounded-3xl p-7 md:p-8 overflow-hidden"
            >
              {/* Glow hover lima */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 0%, rgba(166,255,0,0.09) 0%, transparent 70%)' }}
              />

              <div>
                {/* Fila superior: Icono + Número + Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#A6FF00]/10 border border-[#A6FF00]/25 flex items-center justify-center text-[#A6FF00] group-hover:bg-[#A6FF00] group-hover:text-black transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-white/35 tracking-widest">
                      SISTEMA {service.number}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A6FF00] bg-[#A6FF00]/10 border border-[#A6FF00]/20 px-3 py-1 rounded-full font-bold tracking-wider uppercase">
                    {service.tag}
                  </span>
                </div>

                {/* Título H3 intacto para SEO */}
                <h3 className="text-white font-black text-2xl leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Descripción intacta para SEO */}
                <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Entregables concretos */}
                <ul className="space-y-2.5 mb-7 border-t border-white/[0.08] pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-white/80">
                      <span className="text-[#A6FF00] font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pie de tarjeta: Impacto + CTA WhatsApp */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                    Impacto directo
                  </span>
                  <span className="text-xs md:text-sm font-bold text-[#A6FF00]">
                    {service.impact}
                  </span>
                </div>

                <a
                  href={`https://wa.me/34629059219?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black bg-[#A6FF00] hover:bg-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 w-fit shrink-0"
                >
                  Consultar disponibilidad
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Comparativa: Modelo Tradicional vs. Sistema Jastyn (#comparativa) ── */}
        <div id="comparativa" className="mt-28 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#A6FF00] text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Por qué cambian a Jastyn
            </span>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Deja de regalar tu margen a terceros.
            </p>
            <p className="text-white/55 text-base md:text-lg mt-3">
              Compara lo que ocurre cuando dependes de plataformas y agencias generalistas frente a tener tu propio motor de reservas en Madrid.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Columna Izquierda: Modelo Tradicional */}
            <div className="rounded-3xl bg-[#111111]/70 border border-red-500/20 p-7 md:p-9">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                ✕ El Modelo Tradicional
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-6">
                Agencias Genéricas, ElTenedor y RRPP Externos
              </h3>
              <ul className="space-y-4">
                {TRADITIONAL_PAINS.map((pain) => (
                  <li key={pain} className="flex items-start gap-3 text-sm md:text-base text-white/60">
                    <span className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna Derecha: Sistema Jastyn */}
            <div className="rounded-3xl bg-[#12160D] border-2 border-[#A6FF00]/50 p-7 md:p-9 relative overflow-hidden shadow-[0_0_60px_rgba(166,255,0,0.08)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A6FF00]/15 border border-[#A6FF00]/40 text-[#A6FF00] text-xs font-bold uppercase tracking-wider mb-4">
                ✓ El Sistema Jastyn Madrid
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-6">
                Captación Propia, IA 24/7 y Reservas Sin Comisión
              </h3>
              <ul className="space-y-4">
                {JASTYN_ADVANTAGES.map((adv) => (
                  <li key={adv} className="flex items-start gap-3 text-sm md:text-base text-white/90">
                    <span className="w-6 h-6 rounded-full bg-[#A6FF00] text-black flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Hoja de Ruta de 30 Días ───────────────────────────── */}
        <div className="mt-24 rounded-3xl bg-[#111111] border border-white/10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[#A6FF00] text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-3">
                <span className="w-4 h-px bg-[#A6FF00]" />
                Implementación Rápida
              </span>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Cómo llenamos tu local en los primeros 30 días
              </p>
            </div>
            <a
              href="https://wa.me/34629059219?text=Hola%2C%20quiero%20aplicar%20el%20plan%20de%2030%20d%C3%ADas%20en%20mi%20local%20de%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A6FF00] text-black font-bold text-sm px-6 py-3.5 rounded-full hover:bg-white transition-colors shrink-0 w-fit"
            >
              Empezar con la Semana 1 Gratis
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROADMAP_STEPS.map((step, idx) => (
              <div
                key={step.week}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#A6FF00] bg-[#A6FF00]/10 px-3 py-1 rounded-full">
                      {step.week}
                    </span>
                    <span className="text-white/25 font-black text-xl">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{step.description}</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-white/75">
                  <span className="w-2 h-2 rounded-full bg-[#A6FF00]" />
                  {step.badge}
                </div>
              </div>
            ))}
          </div>
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
