'use client'

// ─── Logos / Trust Strip: Marquee infinito de clientes ────────
// Loop continuo izquierda → derecha con logos SVG reales

import Image from 'next/image'

/* Datos de clientes con ruta de logo */
const CLIENTS = [
  { name: 'Club Mamba',        logo: '/images/clientes/club-mamba.svg',        w: 160 },
  { name: 'Restaurante Ático', logo: '/images/clientes/restaurante-atico.svg', w: 200 },
  { name: 'Sala Mon',          logo: '/images/clientes/sala-mon.svg',           w: 140 },
  { name: 'Grupo Paraguas',    logo: '/images/clientes/grupo-paraguas.svg',     w: 200 },
  { name: 'OHM Nightclub',     logo: '/images/clientes/ohm-nightclub.svg',      w: 180 },
  { name: 'La Finca Group',    logo: '/images/clientes/la-finca-group.svg',     w: 200 },
]

export default function Logos() {
  // Duplicamos para loop seamless sin corte
  const items = [...CLIENTS, ...CLIENTS]

  return (
    <section className="py-14 border-y border-white/6 overflow-hidden relative">

      {/* Fade lateral izquierdo */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
      />
      {/* Fade lateral derecho */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
      />

      {/* Etiqueta sobre el marquee */}
      <p className="text-center text-white/25 text-xs font-medium tracking-[0.2em] uppercase mb-10">
        Confían en nosotros
      </p>

      {/* Track animado */}
      <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="inline-flex items-center shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src={client.logo}
              alt={`${client.name} - Cliente de Jastyn Madrid`}
              width={client.w}
              height={52}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
