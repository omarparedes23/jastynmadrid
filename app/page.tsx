// ─── Página principal: Landing de Jastyn Madrid ─────────────
// Compone todas las secciones en orden de conversión

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Services from '@/components/Services'
import CTAFinal from '@/components/CTAFinal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
      {/* Navegación fija con blur */}
      <Navbar />

      {/* Hero principal: propuesta de valor + video */}
      <Hero />

      {/* Marquee de marcas / clientes */}
      <Logos />

      {/* Grid de servicios */}
      <Services />

      {/* Banner CTA final con enlace a Calendly */}
      <CTAFinal />

      {/* Botón flotante WhatsApp */}
      <FloatingWhatsApp />
    </main>
  )
}
