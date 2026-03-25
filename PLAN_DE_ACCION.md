# PLAN DE ACCIÓN — Web Demo Lucía Benítez Psicología

---

## PROMPT DE CONTEXTO (para el agente desarrollador)

Eres un desarrollador frontend experto. Debes construir una **web demo profesional, minimalista y 100% responsive** para **Lucía Benítez, Licenciada en Psicología**, orientada a niñas, niños, adolescentes y sus familias, con sede en Punta del Este, Uruguay.

**Stack:** HTML5 + CSS3 + JavaScript vanilla. Sin frameworks ni dependencias externas excepto Google Fonts y Font Awesome (CDN).

**Referencia visual y estructural:** `EJEMPLO/lumierCosmetologia-main/` — ese proyecto ya es completamente responsive, usa scroll reveal, hamburger menu, modales y botón flotante de WhatsApp. Debés replicar esa calidad y estructura adaptándola al nuevo cliente. **No modificar nada dentro de `/EJEMPLO/`.**

**Paleta de colores:**
- Principal: `#7F9BEC` (azul suave)
- Secundario: `#F7EBE9` (rosa pálido / crema)
- Negro: `#1a1a1a`
- Texto: `#3a3a3a`
- Fondo claro: `#FAFAFA`

**Assets disponibles:**
- `img/logopsi.png` — Logo de la profesional
- `img/lucia.jpg` — Foto de Lucía Benítez
- `img/lugar.jpg` — Imagen del espacio / consultorio

**WhatsApp:** 598 98 927 972 (formato internacional para link `wa.me`)

**Archivos a generar:** `index.html`, `styles.css`, `script.js` en la raíz del proyecto (`/luciaBenitez/`).

---

## FASES DE DESARROLLO

### FASE 1 — Estructura base del proyecto
- Crear `index.html` con boilerplate completo (meta tags, viewport, SEO básico)
- Enlazar Google Fonts (ej: Cormorant Garamond + Inter, igual al ejemplo)
- Enlazar Font Awesome 6 (CDN)
- Crear `styles.css` con variables CSS (colores, sombras, radios, transiciones)
- Crear `script.js` vacío y enlazarlo
- Reset CSS y utilidades base (`.container`, `.section`, `.reveal`, etc.)

### FASE 2 — NavBar
- Logo a la izquierda (`img/logopsi.png`)
- Links de navegación a la derecha: Inicio · Servicios · Nosotros · Contacto
- Hamburger button (3 líneas) para mobile con toggle animado
- Menú desplegable responsive en mobile (overlay o dropdown)
- NavBar con efecto sticky + sombra al hacer scroll

### FASE 3 — Sección Inicio (Hero)
- Layout de 2 columnas: texto a la izquierda, imagen a la derecha
- Título: **Lucía Benítez — Licenciada en Psicología**
- Slogan: *Encuentra el equilibrio que necesitas.*
- Imagen: `img/lugar.jpg`
- Botón CTA: "Consultá ahora" → link a sección Contacto
- En mobile: imagen arriba, texto debajo (o texto arriba según diseño)
- Animación scroll reveal

### FASE 4 — Sección Servicios
- Grid de 12 cards responsive (3 col desktop / 2 col tablet / 1 col mobile)
- Cada card: icono FontAwesome + título del servicio + descripción corta
- Servicios: Ansiedad, Dificultades atencionales, Depresión, Angustia, Duelo, Bullying, Baja autoestima, Desregulación emocional, Dificultades en la conducta, Habilidades sociales, Impulsividad, Mindfulness
- Click en card → **Modal/Popup** con:
  - Icono grande + título
  - Descripción detallada (generada coherentemente por el agente)
  - Botón **"Consultar"** → abre WhatsApp (`wa.me/59898927972`)
  - Botón cerrar (X)
  - Modal 100% responsive y centrado en mobile
- Animación reveal en cards

### FASE 5 — Sección Nosotros
- Layout 2 columnas: foto izquierda (`img/lucia.jpg`), texto derecha
- Nombre: **Lic. en Psicología – Lucía Benítez Rey**
- Datos: Egresada UdelaR · Especializada en infancias y adolescencias
- Texto bio completo provisto en el brief
- Badges/chips: Atención presencial y online · Habilitada por MSP
- En mobile: foto arriba, texto abajo
- Animación reveal

### FASE 6 — Sección Contacto
- Datos de contacto con iconos:
  - Teléfono: 098 927 972
  - WhatsApp: 098 927 972
  - Dirección: Av. Chiverta y, 20000 Punta del Este, Maldonado
- Horarios: Martes a Domingo — Abierto las 24 horas
- Mapa de Google Maps embebido (`<iframe>`) con la ubicación real de la profesional
- Layout en cards o columnas, bien centrado y legible en mobile

### FASE 7 — Footer
- Izquierda: Logo (`img/logopsi.png`) + nombre "Lucía Benítez Psicología" + slogan
- Derecha: Lista de secciones como links internos (Inicio, Servicios, Nosotros, Contacto)
- Todo centrado y bien espaciado
- En mobile: disposición en columna centrada

### FASE 8 — Botón flotante de WhatsApp
- Botón fijo en esquina inferior derecha
- Icono de WhatsApp (Font Awesome)
- Link a `https://wa.me/59898927972`
- Efecto hover + animación de entrada
- Visible y usable en mobile

### FASE 9 — JavaScript
- **Scroll Reveal:** observer para clase `.reveal` → añade `.visible`
- **NavBar:** efecto sombra/fondo al hacer scroll
- **Hamburger:** toggle del menú mobile + cerrar al hacer click en un link
- **Modales de servicios:** abrir/cerrar modal, asociar datos dinámicamente por `data-service`
- **Cierre de modal:** click en overlay, botón X, y tecla Escape

### FASE 10 — Revisión y QA Responsive
- Verificar breakpoints: mobile (< 600px), tablet (600–1024px), desktop (> 1024px)
- Revisar que no haya textos superpuestos, imágenes desbordadas ni paddings/margins rotos
- Verificar modales en mobile (scroll interno si es necesario)
- Verificar que el botón WPP no tape contenido importante en mobile
- Revisar contraste de colores y legibilidad
- Verificar todos los links internos y externos

---

## RESUMEN DE ARCHIVOS A GENERAR

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura HTML completa de la web |
| `styles.css` | Estilos completos, variables, responsive |
| `script.js` | Interactividad: reveal, navbar, modales, hamburger |

> **Nota:** Todos los archivos van en la raíz del proyecto `/luciaBenitez/`. No se modifica nada dentro de `/EJEMPLO/`.
