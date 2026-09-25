## [Sin publicar]

### Añadido
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
- Componentes y datos renombrados al dominio real (servicios, integraciones, planes) y secciones movidas a `src/parts/sections`.
- Eliminados componentes, datos y fuentes sin usar de la plantilla original.
- Rutas traducidas al español (`/servicios`, `/integraciones`, `/contacto`, `/nosotros`, etc.).
- Página Sobre Nosotros y páginas legales traducidas y sin la marca Darki.
- Breadcrumb con etiquetas legibles y microdatos completos.

### Corregido
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