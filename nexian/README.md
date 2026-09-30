# Nexian

Sitio web de **Nexian Soluciones**: desarrollo de software a medida, integraciones con inteligencia artificial, automatización y ciberseguridad.

Construido con [Next.js 16](https://nextjs.org/) (App Router) y React 19. Basado originalmente en la plantilla Darki de Dev5.dev.

## Requisitos

- Node.js 22.15 o superior (las pruebas usan `module.registerHooks`)
- npm

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # ajustar NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

| Script          | Descripción                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Build de producción                  |
| `npm run start` | Sirve el build de producción         |
| `npm run lint`  | Ejecuta ESLint                       |
| `npm test`      | Pruebas de rutas y redirecciones     |

## Variables de entorno

| Variable               | Uso                                                   |
| ---------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL pública; se usa en metadata, sitemap y robots.txt |

## Estructura

```
src/
├── app/                 # Rutas (App Router), sitemap, robots y 404
├── config/
│   ├── site.js          # Nombre, URL, contacto y redes sociales
│   ├── routes.js        # ROUTES y ROUTE_LABELS: fuente única de rutas
│   └── redirects.js     # Mapa de redirecciones 308 usado por el proxy
├── proxy.js             # Proxy de Next 16 (antes middleware)
├── data/                # Contenido estático (navegación, planes, FAQs...)
├── parts/
│   ├── sections/        # Secciones reutilizables por contenido (props)
│   ├── components/      # Piezas de interfaz (PageHeader, ActionCard...)
│   ├── header/ footer/  # Cabecera y pie del sitio
│   └── seo/             # JSON-LD y la tarjeta social generada con next/og
├── css/                 # Hojas de estilo globales
└── fonts/               # Manrope, cargada con next/font/local

tests/                   # Pruebas con node:test (sin dependencias)
```

`src/app` incluye, además de las páginas: `sitemap.js`, `robots.js`,
`manifest.js`, `opengraph-image.js`, `twitter-image.js`, `apple-icon.js`,
`not-found.js`, `error.js` y `global-error.js`.

## Secciones reutilizables

Las páginas se componen de secciones que reciben su contenido por props, en lugar de duplicar marcado:

| Componente      | Uso                                                |
| --------------- | -------------------------------------------------- |
| `PageHeader`    | Breadcrumb, título, descripción y puntos clave     |
| `ServiceCards`  | Tarjetas de servicio con enlace a su página        |
| `ServicesGrid`  | Resumen de servicios sin enlace (inicio)           |
| `FeatureCards`  | Cuadrícula de características con icono            |
| `PricingPlans`  | Planes con precio, características y CTA a WhatsApp |
| `FaqSection`    | Preguntas frecuentes en acordeón                   |
| `ActionCard`    | Llamado a la acción de cierre de página            |

El contenido vive en `src/data/`, nunca dentro de los componentes.

## Rutas y proxy

Todas las rutas internas se definen en `src/config/routes.js`. Los componentes y datos importan `ROUTES` en lugar de escribir URLs a mano, así un cambio de ruta se hace en un solo lugar.

`src/proxy.js` redirige con **308** las rutas antiguas (p. ej. `/hosting/web-hosting` → `/servicios/optimizacion`) y alias en español hacia su ruta canónica. No distingue mayúsculas, ignora la barra final y conserva el query string.

### Añadir una página nueva

1. Crear `src/app/<ruta>/page.js` usando `<PageHeader>`.
2. Registrar la ruta en `ROUTES` y su etiqueta en `ROUTE_LABELS`.
3. Si reemplaza una URL existente, añadir la antigua a `src/config/redirects.js`.

El sitemap y el breadcrumb se actualizan automáticamente.

## Calidad

`.github/workflows/ci.yml` ejecuta ESLint, las pruebas y el build de producción en cada push y pull request a `main`. En local:

```bash
npm run lint && npm test && npm run build
```

`npm test` usa `node:test`, sin dependencias, y comprueba que `ROUTES`,
`ROUTE_LABELS`, `REDIRECTS` y los `page.js` de `src/app` no se desincronicen:
toda ruta tiene etiqueta y página, toda página está registrada, y ninguna
redirección apunta a una ruta inexistente ni encadena con otra.

`.gitattributes` y `.editorconfig` mantienen LF, UTF-8 y 2 espacios de indentación.

## Seguridad

`next.config.mjs` añade cabeceras de seguridad a todas las respuestas (HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy`, `X-Permitted-Cross-Domain-Policies`) y desactiva `X-Powered-By`.

Las rutas `opengraph-image` y `twitter-image` se declaran `cross-origin`, porque son las que otros dominios tienen que poder mostrar. Las imágenes de `public/images` se cachean un día con una semana de `stale-while-revalidate`.

## Accesibilidad y SEO

- Enlace "Saltar al contenido", estilos `:focus-visible` y un único bloque de `prefers-reduced-motion` (en `base.css`; el marquee declara su excepción)
- El menú marca la página actual con `aria-current`, se cierra con Escape y al cambiar de ruta, y cerrado no deja enlaces tabulables
- Los paneles cerrados del acordeón son `inert`: fuera del foco y del lector de pantalla
- Metadata con plantilla de título y Open Graph, `sitemap.xml` con prioridades por sección, `robots.txt`, manifest web y JSON-LD (`Organization`, `WebSite` y `FAQPage`)
- Tarjeta social 1200x630 generada con `next/og`, compartida por Open Graph y Twitter

## Créditos

Diseño base: plantilla [Darki](https://dev5.dev/theme/nextjs/darki) de [Dev5.dev](https://dev5.dev).
