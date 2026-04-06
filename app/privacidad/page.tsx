// ─── Privacy Policy Page (RGPD/GDPR Compliant) ──────────────

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Jastyn Madrid',
  description: 'Política de privacidad y protección de datos de Jastyn Madrid. Cumplimiento con el RGPD europeo.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-white">JASTYN</span>
            <span className="text-[#A6FF00]">.</span>
          </Link>
          <Link 
            href="/" 
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Política de <span className="text-[#A6FF00]">Privacidad</span>
            </h1>
            <p className="text-[#888]">
              Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">1. Responsable del tratamiento</h2>
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 space-y-2 text-[#888]">
                <p><strong className="text-white">Denominación social:</strong> Jastyn Madrid</p>
                <p><strong className="text-white">Actividad:</strong> Agencia de marketing digital para hostelería</p>
                <p><strong className="text-white">Email:</strong> info@publicidadmadrid.es</p>
                <p><strong className="text-white">Ubicación:</strong> Madrid, España</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">2. Datos que recopilamos</h2>
              <p className="text-[#888] mb-4">
                A través de nuestros formularios web, únicamente recopilamos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#888] mb-4">
                <li><strong className="text-white">Nombre:</strong> Para personalizar nuestras comunicaciones</li>
                <li><strong className="text-white">Email:</strong> Para enviarte el contenido solicitado y comunicaciones comerciales</li>
                <li><strong className="text-white">Consentimiento:</strong> Registro de tu aceptación explícita para el tratamiento</li>
              </ul>
              <p className="text-[#888]">
                <strong className="text-white">No recopilamos:</strong> Datos bancarios, direcciones postales, ni información sensible.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-[#888] mb-4">
                Utilizamos tus datos personales exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#888]">
                <li>Enviarte la newsletter con estrategias de marketing para hostelería</li>
                <li>Comunicarte sobre nuevos servicios, ofertas o eventos de Jastyn Madrid</li>
                <li>Responder a tus consultas o solicitudes de auditoría</li>
                <li>Realizar análisis estadísticos anónimos para mejorar nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">4. Base legal</h2>
              <p className="text-[#888]">
                El tratamiento de tus datos se basa en tu <strong className="text-white">consentimiento explícito</strong>, 
                manifestado mediante la aceptación de esta política de privacidad al completar el formulario. 
                Puedes retirar tu consentimiento en cualquier momento.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">5. Conservación de datos</h2>
              <p className="text-[#888]">
                Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades 
                descritas, y mientras no solicites su supresión. En cualquier caso, revisamos anualmente nuestras 
                listas de contacto para eliminar registros inactivos desde hace más de 2 años.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">6. Destinatarios de los datos</h2>
              <p className="text-[#888]">
                Tus datos no serán cedidos, vendidos ni compartidos con terceros. Únicamente podrían ser accedidos 
                por nuestros proveedores de servicios tecnológicos (hosting, email) bajo estrictos acuerdos de 
                confidencialidad y cumplimiento del RGPD.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">7. Tus derechos (RGPD)</h2>
              <p className="text-[#888] mb-4">
                Como usuario, tienes los siguientes derechos sobre tus datos personales:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Derecho de acceso', desc: 'Saber qué datos tenemos sobre ti' },
                  { title: 'Derecho de rectificación', desc: 'Corregir datos inexactos' },
                  { title: 'Derecho de supresión', desc: 'Eliminar tus datos (derecho al olvido)' },
                  { title: 'Derecho de limitación', desc: 'Restringir el tratamiento de tus datos' },
                  { title: 'Derecho de portabilidad', desc: 'Recibir tus datos en formato digital' },
                  { title: 'Derecho de oposición', desc: 'Oponerte al tratamiento de tus datos' },
                ].map((right) => (
                  <div key={right.title} className="bg-[#111] border border-white/10 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-1">{right.title}</h3>
                    <p className="text-sm text-[#888]">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#888] mt-4">
                Para ejercer cualquiera de estos derechos, envía un email a{' '}
                <a href="mailto:info@publicidadmadrid.es" className="text-[#A6FF00] hover:underline">
                  info@publicidadmadrid.es
                </a>{' '}
                indicando tu solicitud. Te responderemos en un plazo máximo de 30 días.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">8. Seguridad de la información</h2>
              <p className="text-[#888]">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales 
                contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración o destrucción. 
                Utilizamos conexiones HTTPS encriptadas y nunca almacenamos contraseñas en texto plano.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">9. Uso de cookies</h2>
              <p className="text-[#888]">
                Actualmente este sitio web no utiliza cookies de terceros ni de seguimiento publicitario. 
                Únicamente utilizamos cookies técnicas necesarias para el funcionamiento básico del sitio. 
                No realizamos perfilado de usuarios ni tracking de comportamiento.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">10. Cambios en esta política</h2>
              <p className="text-[#888]">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos cualquier 
                cambio significativo mediante un aviso en nuestra web o por email. La fecha de última 
                actualización aparece al inicio de este documento.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contacto</h2>
              <p className="text-[#888]">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos, 
                contáctanos en:
              </p>
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 mt-4">
                <p className="text-white font-semibold mb-2">Jastyn Madrid</p>
                <p className="text-[#888]">Email: info@publicidadmadrid.es</p>
                <p className="text-[#888]">Web: publicidadmadrid.es</p>
              </div>
            </section>

            <section className="bg-[#A6FF00]/5 border border-[#A6FF00]/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-3">Autoridad de control</h2>
              <p className="text-[#888] mb-4">
                Si consideras que el tratamiento de tus datos infringe la normativa, tienes derecho a 
                presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):
              </p>
              <a 
                href="https://www.aepd.es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A6FF00] hover:underline"
              >
                www.aepd.es
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Jastyn Madrid</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
