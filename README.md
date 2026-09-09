# MediaLog Bootcamp

Proyecto progresivo de React. Nombre del paquete: `medialog-bootcamp`.

## Sesión 01 · Encabezado extraído · S01-B06

Generado con `create-vite@9.2.0`, template `react-ts`. React y React DOM están fijados en `19.2.8`, TypeScript en `6.0.3` y Vite en `8.2.2`. `AppHeader` tiene módulo propio; la tarjeta permanece dentro de `App`. Los estilos son soporte entregado por el docente.

Requisitos de la cohorte: Node `>=22.22.0` y pnpm `11.17.0`.

En cada etapa, este archivo indica qué está construido y cómo comprobarlo. Los checkpoints de referencia no sustituyen tu trabajo: guarda tus cambios en tu propia copia antes de consultar otra rama.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

En otra terminal de la misma carpeta:

```bash
pnpm build
pnpm lint
```

Checkpoint: la pantalla conserva un encabezado y una tarjeta de Arrival. `App` importa y usa `AppHeader`. Siguiente paso: identificar y extraer el `article` completo hacia `src/components/media-card.tsx`.
