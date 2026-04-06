// ─── Blog listing page ──────────────────────────────────────

import Link from 'next/link'
import { Metadata } from 'next'
import posts from '@/data/posts.json'

export const metadata: Metadata = {
  title: 'Blog | Jastyn Madrid - Marketing para Hostelería',
  description: 'Estrategias de marketing digital para restaurantes, salas de fiesta y hostelería en Madrid. Consejos prácticos para llenar tu local cada semana.',
}

export default function BlogPage() {
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
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-[#A6FF00] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-4 h-px bg-[#A6FF00]" />
              Recursos Gratuitos
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Blog de Marketing para{' '}
              <span className="text-[#A6FF00]">Hostelería</span>
            </h1>
            <p className="text-[#888] text-lg max-w-2xl">
              Estrategias probadas para llenar tu restaurante o sala de fiesta en Madrid. 
              Sin relleno, solo tácticas que funcionan.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="group bg-[#111] border border-white/8 rounded-2xl p-6 md:p-8 hover:border-[#A6FF00]/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <span className="text-[#A6FF00] text-xs font-semibold tracking-wide uppercase">
                    {post.author}
                  </span>
                  <span className="hidden md:block text-white/30">·</span>
                  <time className="text-white/40 text-sm">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#A6FF00] transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-[#888] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#A6FF00] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Leer artículo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-white/8 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Jastyn Madrid</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
