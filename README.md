# PotiPa · Pastelería artesanal en Blanes

Web de **PotiPa**, pastelería artesanal en Blanes: tartas personalizadas para bodas, cumpleaños, fiestas y bautizos.

Toda la web es **un único recorrido cinematográfico ligado al scroll** (inspirado en el Reel de referencia):
las fotografías y los vídeos son los protagonistas y el texto se reduce a una palabra por capítulo, una frase y los datos útiles.
Dirección creativa, diseño y desarrollo: **DURDUC**.

- Web publicada: https://durducco-source.github.io/potipa-blanes-web/
- Código: https://github.com/durducco-source/potipa-blanes-web
- Versión anterior conservada en la etiqueta git `v1-antes-recorrido`.

## El recorrido

| Escena | Movimiento de cámara |
|---|---|
| Inicio | Vídeo de la tarta de orquídeas con avance de cámara; «POTIPÁ» se abre; fundido al obrador, «Creamos emociones» |
| 01 Obrador | Vídeos verticales que se suceden en un marco que crece |
| 02 Bodas | Retroceso desde el detalle de la tarta de boda; deriva al vídeo del banquete |
| 03 Buttercream | Puerta corredera y travelling por las tartas de buttercream |
| 04 Carta | Precios reales por grupos sobre el vídeo de la mesa dulce |
| 05 Fiestas | Capas de profundidad con tartas de cumpleaños |
| 06 Galería | Tira de película con visor |
| 07 Encargar | La cámara se aleja; WhatsApp, llamar y cómo llegar |

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · Motion (Framer Motion).

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # web estática en out/
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run deploy     # compila y publica en GitHub Pages (rama gh-pages)
```

## Cómo editar

Todo el guion está en `src/content/site.ts`: cada escena tiene un `kind` (movimiento de cámara), sus imágenes/vídeos y textos.
Tipos disponibles: `arrival` (llegada), `dive` (picado), `door` (puerta corredera + travelling), `pullback` (retroceso),
`depth` (capas de profundidad), `tilt` (panorámica vertical), `reel` (vídeos verticales), `list` (carta), `strip` (tira con visor) y `finale`.
Colores en `src/app/globals.css` y tipografías en `src/app/layout.tsx`.

```
src/
├── app/              → layout (SEO, fuentes, JSON-LD), página y tema
├── components/
│   ├── cinema.tsx    → primitivas: Scene, Shot (imagen/vídeo con cámara), ChapterWord, Caption, useRange
│   ├── scenes.tsx    → los 10 tipos de escena y el pie
│   ├── Header.tsx    → barra fina, menú a pantalla completa y barra de acción móvil
│   └── Hud.tsx       → capítulo actual y progreso
├── content/          → site.ts (guion y contenido) y types.ts (modelo)
└── lib/              → utilidades (fullRange para animaciones de scroll) y capítulos
```

## Fuentes del contenido

- Instagram @potipa.blanes: textos, carteles con precios, fotos y vídeos. Ficha de Google Maps: dirección.
- PotiPa no publica horario, por eso no aparece.
