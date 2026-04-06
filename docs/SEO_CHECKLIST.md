# ✅ CHECKLIST IMPLEMENTACIÓN SEO - Jastyn Madrid

## 📋 Pasos para aplicar las mejoras SEO

---

### 🔴 FASE 1: CRÍTICO (Hacer primero)

#### 1. Reemplazar layout.tsx
- [ ] Renombrar `app/layout.tsx` a `app/layout.tsx.backup`
- [ ] Renombrar `app/layout-seo-optimized.tsx` a `app/layout.tsx`
- [ ] Actualizar datos de contacto en el Schema (buscar "TODO:")
- [ ] Añadir código de verificación de Google Search Console (opcional)
- [ ] **Verificar:** Ejecutar `npm run dev` y comprobar que no hay errores

#### 2. Crear imagen Open Graph
- [ ] Crear imagen 1200x630 px con:
  - Logo Jastyn
  - Tagline: "Llenamos tu local. Cada semana."
  - Métricas: +120 locales, €2.4M
  - Fondo acorde al branding
- [ ] Guardar en: `public/images/og-image.jpg`
- [ ] **Verificar:** Compartir enlace en WhatsApp/Facebook para ver preview

#### 3. Activar sitemap.xml
- [ ] El archivo `app/sitemap.ts` ya está creado
- [ ] **Verificar:** Acceder a `http://localhost:3000/sitemap.xml`
- [ ] Debe mostrar XML válido con la URL principal

#### 4. Verificar robots.txt
- [ ] El archivo `public/robots.txt` ya está creado
- [ ] **Verificar:** Acceder a `http://localhost:3000/robots.txt`

---

### 🟡 FASE 2: IMPORTANTE (Hacer después)

#### 5. Añadir teléfono y email reales
- [ ] Buscar en `app/layout.tsx`: `// telephone:` y `// email:`
- [ ] Descomentar y añadir datos reales
- [ ] Actualizar también en `FloatingWhatsApp.tsx` (número de WhatsApp)

#### 6. Actualizar Services.tsx (opcional)
- [ ] Comparar cambios entre `Services.tsx` y `Services-seo-optimized.tsx`
- [ ] Aplicar cambios principales:
  - Añadir H2 "Servicios de Marketing para Hostelería"
  - Añadir aria-labels a iconos
  - Añadir aria-hidden="true" a SVGs decorativos

#### 7. Añadir componente FAQ (opcional)
- [ ] Copiar `components/FAQ.tsx` a `components/FAQ.tsx`
- [ ] Importar en `app/page.tsx`: `import FAQ from '@/components/FAQ'`
- [ ] Añadir `<FAQ />` antes de `<CTAFinal />`
- [ ] Actualizar Navbar: cambiar `href: '#faq'` por el ID correcto

#### 8. Google Business Profile
- [ ] Ir a: https://business.google.com
- [ ] Crear ficha con:
  - Nombre: Jastyn Madrid
  - Categoría: Agencia de marketing
  - Dirección: Madrid, España
  - Teléfono: [número real]
  - Web: https://jastynmadrid.com
  - Horario: L-V 9:00-19:00
- [ ] Añadir descripción con keywords
- [ ] Subir fotos del equipo/logo
- [ ] Solicitar verificación (tarjeta postal o teléfono)

---

### 🟢 FASE 3: OPTIMIZACIÓN (Cuando haya tiempo)

#### 9. Añadir iconos PWA
- [ ] Crear iconos en múltiples tamaños (72x72 a 512x512)
- [ ] Guardar en `public/icon-*.png`
- [ ] El `manifest.json` ya está configurado

#### 10. Crear Google Search Console
- [ ] Ir a: https://search.google.com/search-console
- [ ] Añadir propiedad: Dominio o Prefijo de URL
- [ ] Verificar propiedad (DNS o archivo HTML)
- [ ] Añadir sitemap: `https://jastynmadrid.com/sitemap.xml`
- [ ] Enviar URL para indexación

#### 11. Redes sociales
- [ ] Crear Instagram: @jastynmadrid
- [ ] Crear LinkedIn: company/jastynmadrid
- [ ] Añadir enlaces en:
  - `app/layout.tsx` (sameAs en Schema)
  - Footer (cuando exista)

---

## 🧪 Verificación post-implementación

### Tests manuales
```bash
# 1. Iniciar servidor de desarrollo
npm run dev

# 2. Verificar meta tags
# Ir a: http://localhost:3000
# Inspeccionar elemento > <head>
# Comprobar que existen:
# - <title>
# - <meta name="description">
# - <meta property="og:*">
# - <meta name="twitter:*">
# - <script type="application/ld+json">

# 3. Verificar sitemap
curl http://localhost:3000/sitemap.xml

# 4. Verificar robots.txt
curl http://localhost:3000/robots.txt

# 5. Validar Schema.org
# Ir a: https://validator.schema.org/
# Pegar URL y validar
```

### Herramientas de validación online
1. **Schema.org Validator**: https://validator.schema.org/
2. **Google Rich Results Test**: https://search.google.com/test/rich-results
3. **Meta Tags Preview**: https://metatags.io/
4. **Open Graph Check**: https://www.opengraph.xyz/
5. **Google Mobile-Friendly**: https://search.google.com/test/mobile-friendly

---

## 📊 Métricas a monitorear

### Después de 1 semana
- [ ] Página indexada en Google (`site:jastynmadrid.com`)
- [ ] Schema LocalBusiness reconocido
- [ ] Open Graph funciona en redes sociales

### Después de 1 mes
- [ ] Impresiones en Google Search Console
- [ ] Clicks desde búsqueda orgánica
- [ ] Posición para "agencia marketing hostelería madrid"

### Después de 3 meses
- [ ] Google Business Profile activo y visible
- [ ] Reseñas en GBP
- [ ] Tráfico orgánico estable

---

## 🚨 Solución de problemas comunes

### Error: "Script tags not allowed in layout"
**Solución:** Usar `dangerouslySetInnerHTML` como está en el código ejemplo

### Error: "Cannot find module '@/components/FAQ'"
**Solución:** Asegurar que el archivo existe y el path es correcto

### OG Image no aparece en WhatsApp
**Solución:** 
1. Verificar que la imagen existe en `/images/og-image.jpg`
2. Usar URL absoluta: `https://jastynmadrid.com/images/og-image.jpg`
3. Limpiar caché de WhatsApp (o usar URL debugger de Facebook)

### Schema no valida
**Solución:**
1. Ir a https://validator.schema.org/
2. Corregir errores reportados
3. Asegurar que las coordenadas GPS son correctas

---

## ✅ Comando rápido de verificación

```bash
# Build de producción para verificar errores
npm run build

# Si hay errores, corregir antes de desplegar
# Si todo OK, desplegar:
# npm run deploy (o comando de tu hosting)
```

---

## 📞 Soporte

Si tienes dudas durante la implementación:
1. Revisar el archivo `docs/SEO_ANALISIS.md` para más detalles
2. Usar las herramientas de validación mencionadas arriba
3. Consultar documentación de Next.js: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

---

**Última actualización:** 6 de abril de 2026
**Versión:** 1.0
