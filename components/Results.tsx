'use client'

// ─── Results: Casos de Éxito Reales en Madrid (#resultados) ──
// Demuestra resultados auditables de clientes reales y testimonios

import { motion } from 'framer-motion'
import Link from 'next/link'

const CASE_STUDIES = [
  {
    venue: 'Restaurante Ático',
    zone: 'Salamanca / Azca · Madrid',
    category: 'Restauración & Rooftop',
    metric: '+47%',
    metricLabel: 'Reservas directas en 90 días',
    secondaryMetric: '-62% No-Shows',
    summary:
      'Pasaron de depender de portales con comisión por cubierto a llenar los turnos de miércoles a domingo con tráfico propio captado en un radio de 5 km y confirmación automática por WhatsApp.',
    slug: 'como-llenar-restaurante-madrid-sin-plataformas',
  },
  {
    venue: 'OHM Nightclub',
    zone: 'Madrid Centro',
    category: 'Ocio Nocturno & VIP',
    metric: '18.000€',
    metricLabel: 'Ahorrados al mes en comisiones RRPP',
    secondaryMetric: '65% Venta Directa',
    summary:
      'Redujeron del 80% al 15% su dependencia de relaciones públicas externos implementando campañas de Lista VIP y preventa de botellas directas en Instagram y WhatsApp.',
    slug: 'estrategias-marketing-salas-fiesta-madrid',
  },
  {
    venue: 'Club Mamba',
    zone: 'Madrid',
    category: 'Lanzamiento & Eventos',
    metric: '340% ROI',
    metricLabel: 'Retorno en campaña de lanzamiento',
    secondaryMetric: '6 Semanas Sold Out',
    summary:
      'Sold out consecutivo durante las primeras 6 semanas de temporada utilizando vídeos cortos de alto impacto y listas de difusión segmentadas por edad y zona en Madrid.',
    slug: 'estrategias-marketing-salas-fiesta-madrid',
  },
  {
    venue: 'Sala Mon',
    zone: 'Chamberí / Moncloa · Madrid',
    category: 'Sala de Conciertos & Club',
    metric: '3 Semanas',
    metricLabel: 'De lista de espera en fines de semana',
    secondaryMetric: '100% Aforo Completo',
    summary:
      'Sistema de preventa anticipada con urgencia real y remarketing local para garantizar el aforo completo antes de abrir puertas cada viernes y sábado.',
    slug: 'estrategias-marketing-salas-fiesta-madrid',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Antes pagábamos más de 2.200€ al mes en comisiones de plataformas y teníamos los miércoles a medio gas. En 6 semanas con Jastyn llenamos con reservas directas desde Instagram.',
    author: 'Carlos M.',
    role: 'Socio Director · Grupo de Restauración en Barrio de Salamanca',
    highlight: '+140 reservas directas/semana',
  },
  {
    quote:
      'Lo que más nos sorprendió fue dejar de depender de los promotores. Ahora la base de datos de clientes VIP es nuestra y vendemos las mesas antes del viernes por la tarde.',
    author: 'Javier R.',
    role: 'Director de Sala · Nightclub en Madrid Centro',
    highlight: 'Sold out 8 fines de semana seguidos',
  },
  {
    quote:
      'No te mandan un PDF con excusas: vienen al local, graban contenido que da hambre de verdad y montan anuncios que traen gente que vive o trabaja a 10 minutos.',
    author: 'Elena V.',
    role: 'Propietaria · Gastrobar & Terraza en Chamberí',
    highlight: '3.8x retorno sobre inversión publicitaria',
  },
]

export default function Results() {
  return (
    <section id="resultados" className="py-24 px-6 md:px-10 lg:px-20 bg-[#0D0D0D] border-y border-white/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Cabecera */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-[#A6FF00] text-xs font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Resultados Auditables en Madrid
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Números reales en caja,{' '}
              <span className="text-gradient">no promesas vacías.</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              Así es como restaurantes, rooftops y salas de fiesta de referencia en Madrid han multiplicado sus reservas directas con nuestro sistema.
            </p>
          </div>

          <a
            href="https://wa.me/34629059219?text=Hola%2C%20he%20visto%20vuestros%20casos%20de%20%C3%A9xito%20y%20quiero%20replicar%20estos%20resultados%20en%20mi%20local"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-[#A6FF00] text-white hover:text-black border border-white/15 hover:border-[#A6FF00] font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 w-fit shrink-0"
          >
            Quiero estos resultados en mi local
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Grid de 4 Casos de Éxito */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.venue}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-3xl p-7 md:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                {/* Header del caso */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A6FF00]">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-0.5">{study.venue}</h3>
                    <p className="text-xs text-white/45">{study.zone}</p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#A6FF00]/10 border border-[#A6FF00]/30 text-[#A6FF00] text-xs font-bold">
                    {study.secondaryMetric}
                  </span>
                </div>

                {/* KPI Gigante */}
                <div className="p-5 rounded-2xl bg-[#0A0A0A]/80 border border-white/[0.07] mb-5 flex items-baseline gap-4">
                  <span className="text-4xl md:text-5xl font-black text-[#A6FF00] tracking-tight">
                    {study.metric}
                  </span>
                  <span className="text-sm md:text-base font-bold text-white/90">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Resumen */}
                <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">
                  {study.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-4">
                <Link
                  href={`/blog/${study.slug}`}
                  className="text-xs md:text-sm font-semibold text-white/75 hover:text-[#A6FF00] transition-colors inline-flex items-center gap-1.5"
                >
                  Leer estrategia completa →
                </Link>
                <a
                  href={`https://wa.me/34629059219?text=${encodeURIComponent(`Hola, me interesa aplicar la estrategia del caso ${study.venue} en mi local de Madrid`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#A6FF00] hover:underline"
                >
                  Aplicar en mi local
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonios de Hosteleros en Madrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl bg-[#121212] border border-white/[0.08] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#A6FF00] text-sm" aria-label="5 de 5 estrellas">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#A6FF00] bg-[#A6FF00]/10 px-2.5 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-white font-bold text-sm">{item.author}</p>
                <p className="text-white/45 text-xs mt-0.5">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
