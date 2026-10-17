// ─── Página principal: Landing de Jastyn Madrid ─────────────
// Compone todas las secciones en orden de conversión

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Services from '@/components/Services'
import Results from '@/components/Results'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
      {/* Navegación fija con blur y logo ampliado */}
      <Navbar />

      {/* Hero principal: propuesta de valor + video en marco consola */}
      <Hero />

      {/* Marquee de marcas / clientes en Madrid */}
      <Logos />

      {/* Sistema de servicios + Comparativa + Hoja de ruta 30 días */}
      <Services />

      {/* Casos de éxito reales en Madrid y testimonios (#resultados) */}
      <Results />

      {/* Diagnóstico interactivo + Captura de leads RGPD-compliant */}
      <Newsletter />

      {/* FAQ con Schema.org para rich snippets */}
      <FAQ />

      {/* Banner CTA final de exclusividad con enlace a WhatsApp */}
      <CTAFinal />

      {/* Footer con logo, datos NAP de Madrid y redes sociales */}
      <Footer />

      {/* Botón flotante WhatsApp */}
      <FloatingWhatsApp />
    </main>
  )
}
