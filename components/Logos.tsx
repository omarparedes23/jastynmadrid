'use client'

// ─── Logos / Trust Strip: Marquee infinito de clientes ────────
// Muestra los grupos y salas de referencia en Madrid con mayor contraste

import Image from 'next/image'

const CLIENTS = [
  { name: 'Club Mamba',        logo: '/images/clientes/club-mamba.svg',        w: 210 },
  { name: 'Restaurante Ático', logo: '/images/clientes/restaurante-atico.svg', w: 230 },
  { name: 'Sala Mon',          logo: '/images/clientes/sala-mon.svg',           w: 190 },
  { name: 'Grupo Paraguas',    logo: '/images/clientes/grupo-paraguas.svg',     w: 240 },
  { name: 'OHM Nightclub',     logo: '/images/clientes/ohm-nightclub.svg',      w: 220 },
  { name: 'La Finca Group',    logo: '/images/clientes/la-finca-group.svg',     w: 230 },
]

export default function Logos() {
  const items = [...CLIENTS, ...CLIENTS]

  return (
    <section className="py-12 border-y border-white/[0.08] bg-[#0D0D0D] overflow-hidden relative">
      {/* Fade lateral izquierdo */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
      />
      {/* Fade lateral derecho */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
      />

      {/* Etiqueta sobre el marquee */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-white/15" />
        <p className="text-center text-white/45 text-xs font-semibold tracking-[0.22em] uppercase">
          Locales, salas y grupos de hostelería en Madrid que confían en nuestro sistema
        </p>
        <span className="h-px w-8 bg-white/15" />
      </div>

      {/* Track animado */}
      <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap">
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="inline-flex items-center shrink-0 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] opacity-75 hover:opacity-100 hover:border-[#A6FF00]/35 transition-all duration-300"
          >
            <Image
              src={client.logo}
              alt={`${client.name} - Cliente de Jastyn Madrid`}
              width={client.w}
              height={56}
              loading="lazy"
              decoding="async"
              unoptimized
              className="h-11 md:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
