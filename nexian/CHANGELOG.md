## [Sin publicar]

### Añadido
- Tarjeta social 1200x630 generada con `next/og`, compartida por Open Graph y Twitter (`summary_large_image`).
- Datos estructurados `FAQPage` en las secciones de preguntas frecuentes.
- Manifest web, icono para iOS (`apple-icon`) y favicon en SVG con URL propia.
- Límites de error `error.js` y `global-error.js`, con opción de reintentar.
- Pruebas con `node:test` de la coherencia entre `ROUTES`, `ROUTE_LABELS`, `REDIRECTS` y los `page.js`, y su paso en CI.
- Cabeceras `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy` y `X-Permitted-Cross-Domain-Policies`, y caché para `public/images`.
- Componente `Logo`, compartido por la cabecera y el pie.
- Secciones reutilizables: `PricingPlans`, `FeatureCards`, `FaqSection`, `ServiceCards` y `ServicesGrid`.
- FAQ en las páginas de servicios y FAQ propia para integraciones.
- Datos estructurados JSON-LD (`Organization`, `WebSite`) y `theme-color`.
- Enlace "Saltar al contenido", estilos de foco visibles y soporte de `prefers-reduced-motion`.
- Indicador de página actual en el menú (`aria-current`).
- Integración continua (ESLint + build), `.gitattributes` y `.editorconfig`.
- Proxy de Next 16 (`src/proxy.js`) con redirecciones 308 desde rutas antiguas y alias.
- Configuración central: `src/config/site.js`, `routes.js` y `redirects.js`.
- Cabeceras HTTP de seguridad, `sitemap.xml`, `robots.txt` y página 404 en español.
- Metadata global con plantilla de título y Open Graph.
- Componentes reutilizables `PageHeader` y `ActionCard`.

### Cambiado
- Sitemap con prioridad y frecuencia según el papel de cada página, en lugar de 0.7 mensual para todas.
- Un único bloque de `prefers-reduced-motion`, en `base.css`; el marquee declara su excepción junto a su propia regla.
- El proyecto se declara ESM (`"type": "module"`) y requiere Node 22.15 o superior.
- Componentes y datos renombrados al dominio real (servicios, integraciones, planes) y secciones movidas a `src/parts/sections`.
- Eliminados componentes, datos y fuentes sin usar de la plantilla original.
- Rutas traducidas al español (`/servicios`, `/integraciones`, `/contacto`, `/nosotros`, etc.).
- Página Sobre Nosotros y páginas legales traducidas y sin la marca Darki.
- Breadcrumb con etiquetas legibles y microdatos completos.

### Corregido
- Los títulos de página duplicaban la estructura de la marca y pasaban de 60 caracteres.
- `src/app/favicon.svg` no era un nombre reconocido por el App Router, así que ese icono nunca se servía.
- Con reducción de movimiento el carrusel de testimonios saltaba a su fotograma final y quedaba casi fuera de la vista.
- Los paneles cerrados del acordeón y los enlaces del menú móvil cerrado seguían recibiendo el foco y los leía el lector de pantalla.
- La imagen del hero (el LCP) se cargaba sin prioridad y con `width={0} height={0}`, lo que provocaba salto de maquetación.
- El logotipo declaraba proporciones que no eran las del SVG, y el del pie se precargaba compitiendo con el LCP.
- Iconos y avatares decorativos repetían en su `alt` el texto contiguo.
- El año del copyright se calculaba al importar el módulo y podía quedar congelado.
- La FAQ de integraciones mostraba las preguntas de servicios.
- Los botones "Contratar" de los planes no llevaban a ningún sitio; ahora abren WhatsApp con el plan indicado.
- La fuente Manrope estaba mal declarada (todo el texto se renderizaba en bold); ahora se carga con `next/font/local`.
- Voz de marca unificada en plural en todo el contenido.
- Enlaces rotos en navegación, footer y tarjetas de acción.
- Botones placeholder sin destino en contacto y soporte.
- Accesibilidad del acordeón y del menú móvil.
- `allowedDevOrigins` fuera de `experimental` en `next.config.mjs`.

## [1.0.0] - 2026-03-18
- Initial release of Darki hosting template

## [1.0.1] - 2026-03-18
- Improved display of hero slider in tablet devices.

## [1.0.2] - 2026-03-21
- Improved accessibility.

## [1.0.3] - 2026-03-26
- Fixed mobile navigation menu did not close after clicking a menu link.