# MediaLog Bootcamp

Proyecto progresivo de React. Nombre del paquete: `medialog-bootcamp`.

## Sesión 01 · Componentes estáticos · S01-B07 a B09

Generado con `create-vite@9.2.0`, template `react-ts`. React y React DOM están fijados en `19.2.8`, TypeScript en `6.0.3` y Vite en `8.2.2`. `App` compone `AppHeader` y `MediaCard`, con datos fijos y sin props. Los estilos son soporte entregado por el docente.

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

Checkpoint: la pantalla conserva un encabezado y una tarjeta de Arrival. `App` importa y usa ambos componentes. La actividad individual modifica textos y corrige un error JSX; guarda esos cambios en tu propia copia. La referencia mantiene Arrival para la siguiente sesión.

## Etapas disponibles

| Rama | Estado observable |
| --- | --- |
| `session-01-start` | Entrada sin aplicación. |
| `session-01-step-01-scaffold` | Template instalado; aún contiene la demostración de Vite. |
| `session-01-step-02-static-screen` | Pantalla estática completa dentro de `App`. |
| `session-01-step-03-app-header` | Encabezado extraído; tarjeta todavía dentro de `App`. |
| `session-01` | Ambos componentes extraídos; entrada de la sesión 02. |
| `main` | Último checkpoint final verificado. Actualmente coincide con `session-01`. |

Inspeccionar una transformación sin cambiar archivos:

```bash
git diff session-01-step-03-app-header session-01 -- src/App.tsx src/components/media-card.tsx
```

Para ejecutar una etapa, usa una copia limpia dedicada a consulta:

```bash
git status --short
git switch --detach session-01-step-02-static-screen
pnpm install --frozen-lockfile
pnpm dev
```

Si `git status` muestra cambios, guárdalos antes de cambiar de referencia. No uses comandos de descarte. El modo detached es para consultar; desarrolla y guarda tu entrega en tu propia rama o copia. Detén el servidor antes de cambiar de referencia. `session-01-start` no tiene manifest y no admite `pnpm install`.

## Material estudiantil

[Guía de la sesión 01](course/01-react-jsx-y-proyecto/student-guide.md) y [lectura previa](course/01-react-jsx-y-proyecto/pre-class-reading.md).

Las guías privadas, respuestas docentes y notas de presentador permanecen fuera de este repositorio. Las siguientes sesiones todavía no están implementadas. No hay remoto ni publicación configurados.
