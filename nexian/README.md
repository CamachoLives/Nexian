# Nexian

Sitio web de **Nexian Soluciones**: desarrollo de software a medida, integraciones con inteligencia artificial, automatización y ciberseguridad.

Construido con [Next.js 16](https://nextjs.org/) (App Router) y React 19. Basado originalmente en la plantilla Darki de Dev5.dev.

## Requisitos

- Node.js 20.9 o superior
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
├── parts/               # Componentes: header, footer, secciones, planes
├── css/                 # Hojas de estilo globales
└── fonts/
```

## Rutas y proxy

Todas las rutas internas se definen en `src/config/routes.js`. Los componentes y datos importan `ROUTES` en lugar de escribir URLs a mano, así un cambio de ruta se hace en un solo lugar.

`src/proxy.js` redirige con **308** las rutas antiguas (p. ej. `/hosting/web-hosting` → `/servicios/optimizacion`) y alias en español hacia su ruta canónica. No distingue mayúsculas, ignora la barra final y conserva el query string.

### Añadir una página nueva

1. Crear `src/app/<ruta>/page.js` usando `<PageHeader>`.
2. Registrar la ruta en `ROUTES` y su etiqueta en `ROUTE_LABELS`.
3. Si reemplaza una URL existente, añadir la antigua a `src/config/redirects.js`.

El sitemap y el breadcrumb se actualizan automáticamente.

## Seguridad

`next.config.mjs` añade cabeceras de seguridad a todas las respuestas (HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) y desactiva `X-Powered-By`.

## Créditos

Diseño base: plantilla [Darki](https://dev5.dev/theme/nextjs/darki) de [Dev5.dev](https://dev5.dev).
