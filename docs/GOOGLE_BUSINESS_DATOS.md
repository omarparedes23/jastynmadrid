# 📋 DATOS NECESARIOS - Google Business Profile (Jastyn Madrid)

## 🎯 Para tu cliente: Lista de datos requeridos

Copia y pega este mensaje para enviar a tu cliente:

---

### 💬 MENSAJE PARA EL CLIENTE

```
¡Hola! 👋

Para completar la optimización SEO local de Jastyn Madrid y aparecer en Google Maps, necesito que me proporciones los siguientes datos para crear/actualizar la ficha de Google Business Profile:

📍 **DATOS DE UBICACIÓN**
━━━━━━━━━━━━━━━━━━━━━━
□ Dirección completa (calle, número, piso, puerta):
□ Código postal:
□ Ciudad: Madrid
□ Provincia: Madrid
□ ¿Tienen oficina física donde recibir clientes o es virtual?

📞 **DATOS DE CONTACTO**
━━━━━━━━━━━━━━━━━━━━━━
□ Teléfono fijo (España):
□ Teléfono móvil (España):
□ Email de contacto principal:
□ ¿Cuál es el horario de atención al público?
   Ej: Lunes a Viernes de 9:00 a 19:00

📸 **IMÁGENES** (mínimo 3, ideal 10+)
━━━━━━━━━━━━━━━━━━━━━━
□ Logo en alta resolución (PNG o JPG)
□ Foto del equipo/oficina (si tienen)
□ Fotos de trabajos/eventos realizados (si tienen)
□ Foto del fundador o responsable (opcional pero recomendado)

📝 **INFORMACIÓN DEL NEGOCIO**
━━━━━━━━━━━━━━━━━━━━━━
□ Año de fundación de Jastyn Madrid:
□ Descripción corta del negocio (750 caracteres máx):
   Ej: "Agencia de marketing especializada en hostelería en Madrid. 
   Ayudamos a restaurantes y salas de fiesta a llenar sus locales 
   cada semana con estrategias de captación y publicidad geolocalizada."

✅ **VERIFICACIÓN**
━━━━━━━━━━━━━━━━━━━━━━
Google requiere verificar el negocio. Las opciones son:
1. 📮 Tarjeta postal (llega en 5-14 días a la dirección)
2. 📞 Llamada telefónica (código SMS o llamada automática)
3. 📧 Email (si el dominio coincide)

¿Qué método prefieren?

━━━━━━━━━━━━━━━━━━━━━━

Estos datos son necesarios para:
✓ Aparecer en Google Maps cuando busquen "agencia marketing Madrid"
✓ Mostrar teléfono y dirección en los resultados de búsqueda
✓ Permitir reseñas de clientes en Google
✓ Aparecer en el "pack local" (el mapa con 3 resultados)

Cuanto antes me los envíes, antes podemos activar la ficha. 🚀
```

---

## ✅ CHECKLIST INTERNO (para ti)

Una vez que el cliente te envíe los datos, deberás:

### Paso 1: Crear Google Business Profile
- [ ] Ir a https://business.google.com
- [ ] Clic en "Gestionar ahora" → "Añadir tu negocio"
- [ ] Introducir nombre: "Jastyn Madrid"
- [ ] Seleccionar categoría: "Agencia de marketing" (o "Consultor de marketing")
- [ ] Añadir ubicación: SÍ (aunque sea sólo ciudad)
- [ ] Añadir dirección completa proporcionada por el cliente
- [ ] Marcar: "También ofrezco servicios a domicilio/en la ubicación de mis clientes"
- [ ] Añadir zonas de servicio: "Madrid" + otras ciudades si aplica

### Paso 2: Añadir datos de contacto
- [ ] Teléfono proporcionado por el cliente
- [ ] Sitio web: https://jastynmadrid.com
- [ ] Email de contacto

### Paso 3: Configurar horario
- [ ] Lunes a Viernes: [horario del cliente]
- [ ] Sábado y Domingo: Cerrado (o según corresponda)

### Paso 4: Añadir descripción
```
Jastyn Madrid es una agencia de marketing especializada en hostelería. 
Ayudamos a restaurantes, salas de fiesta y grupos gastronómicos a llenar 
sus locales cada semana mediante estrategias de captación, reservas 
automáticas y publicidad geolocalizada en Madrid.

Con más de 120 locales gestionados y €2.4M generados en reservas, 
nuestros clientes obtienen un ROI medio de 3x. Ofrecemos auditoría 
gratuita sin compromiso.
```

### Paso 5: Subir fotos
- [ ] Logo (foto de perfil)
- [ ] Foto de portada (portada)
- [ ] Fotos adicionales del cliente
- [ ] Dimensiones recomendadas:
  - Logo: 250x250 px (cuadrado)
  - Portada: 1080x608 px (16:9)
  - Fotos: mínimo 720x720 px

### Paso 6: Solicitar verificación
- [ ] Elegir método: postal / teléfono / email
- [ ] Esperar código de verificación
- [ ] Introducir código para activar ficha

### Paso 7: Optimización avanzada (después de verificar)
- [ ] Añadir atributos: "Accesible", "Wi-Fi", etc. si aplica
- [ ] Añadir servicios: "Marketing digital", "Publicidad", etc.
- [ ] Añadir productos (si venden algo específico)
- [ ] Configurar mensajería directa (opcional)
- [ ] Configurar citas online (enlace a Calendly)

### Paso 8: Actualizar Schema en la web
Una vez tengas los datos, actualiza `app/layout.tsx`:
```typescript
telephone: '+34-XXX-XXX-XXX',  // Teléfono proporcionado
email: 'email@jastynmadrid.com',  // Email proporcionado
address: {
  '@type': 'PostalAddress',
  streetAddress: 'Calle Ejemplo 123',  // Dirección proporcionada
  addressLocality: 'Madrid',
  addressRegion: 'Madrid',
  postalCode: '28001',  // CP proporcionado
  addressCountry: 'ES',
},
```

---

## 🎁 BONUS: Pídele también...

### Reseñas de clientes
```
¿Tienes clientes satisfechos que puedan dejarnos una reseña en Google 
cuando la ficha esté activa? Necesitamos un mínimo de 5 reseñas para 
mejorar el posicionamiento local. Te enviaré un email plantilla para 
pedírselas a tus clientes.
```

### Perfiles sociales
```
¿Tienen perfiles de Instagram, LinkedIn o Facebook para el negocio? 
Necesito las URLs para añadirlas al Schema.org y mejorar la presencia 
online.
```

### Información adicional
```
¿Hay algún premio, certificación o membresía profesional que tengan 
(Marketing Digital de Google, asociación de empresarios, etc.)?
```

---

## ⏰ TIEMPOS ESTIMADOS

| Acción | Tiempo |
|--------|--------|
| Crear GBP con datos del cliente | 30 min |
| Verificación por teléfono/email | Instantáneo |
| Verificación por postal | 5-14 días |
| Activación completa | 1-3 días después de verificar |
| Aparecer en resultados locales | 1-4 semanas |

---

## 📞 SOPORTE

Si tienes problemas con la creación:
- Centro de ayuda Google: https://support.google.com/business
- Contactar soporte: Desde el panel de GBP → Ayuda → Contactar

---

**Nota importante:** La ficha de Google Business Profile es GRATUITA. 
Si alguien te pide dinero por "crear la ficha en Google", es una estafa.

