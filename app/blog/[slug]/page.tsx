// ─── Individual blog post page ──────────────────────────────

import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import posts from '@/data/posts.json'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | Jastyn Madrid',
    }
  }
  
  return {
    title: `${post.title} | Jastyn Madrid`,
    description: post.excerpt,
  }
}

// Generate static paths for all posts
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Simple markdown to HTML converter
function markdownToHtml(content: string): string {
  return content
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-black text-white mb-6 mt-12">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-white mb-4 mt-10">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-3 mt-8">$1</h3>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white">$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em class="text-white/80">$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-[#A6FF00] hover:underline">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="text-[#888] mb-2 ml-4">$1</li>')
    // Wrap lists
    .replace(/(<li.*<\/li>\n?)+/gim, '<ul class="mb-6">$&</ul>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-2 border-[#A6FF00] pl-4 italic text-white/70 my-6">$1</blockquote>')
    // Horizontal rule
    .replace(/^\-\-\-$/gim, '<hr class="border-white/10 my-8" />')
    // Paragraphs
    .replace(/^(?!<[hlu]|<block|<hr)(.+)$/gim, '<p class="text-[#888] leading-relaxed mb-4">$1</p>')
    // Line breaks
    .replace(/\n/gim, '')
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }
  
  const htmlContent = markdownToHtml(post.content)

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-white">JASTYN</span>
            <span className="text-[#A6FF00]">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              href="/blog" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#A6FF00] text-xs font-semibold tracking-wide uppercase">
                {post.author}
              </span>
              <span className="text-white/30">·</span>
              <time className="text-white/40 text-sm">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-[#888] leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-[#A6FF00] mb-12" />

          {/* Post Body */}
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA at end of article */}
          <div className="mt-16 p-8 bg-[#111] border border-[#A6FF00]/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">
              ¿Necesitas ayuda con tu restaurante o sala?
            </h3>
            <p className="text-[#888] mb-6">
              Analizamos tu negocio gratis y te decimos exactamente qué está fallando en tu captación de clientes.
            </p>
            <a 
              href="https://wa.me/34629059219?text=Hola%2C%20quiero%20mi%20auditor%C3%ADa%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A6FF00] text-black font-bold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Solicitar auditoría gratuita
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/8 py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Jastyn Madrid</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
