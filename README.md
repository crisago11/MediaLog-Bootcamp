# MediaLog Bootcamp

Proyecto progresivo de React. Paquete: `medialog-bootcamp`. Node >=22.22.0 y pnpm 11.17.0.

## Estado actual · Sesión 02 terminada

Seis tarjetas configuradas mediante data, fixture tipado, map con key estable, etiquetas Película/Serie y alternativas para poster y descripción nulos. Imágenes de prueba locales. App conserva la colección y MediaCard la etiqueta de tipo; esas responsabilidades se revisan en 03.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

En otra terminal:

```bash
pnpm build
pnpm lint
```

## Orden de las ramas

| Rama | Resultado |
| --- | --- |
| `session-01-start` | Entrada sin aplicación |
| `session-01-step-01-scaffold` | Scaffold |
| `session-01-step-02-static-screen` | Pantalla dentro de App |
| `session-01-step-03-app-header` | Encabezado extraído |
| `session-01-end` | Tarjeta extraída, todavía fija |
| `session-02-start` | Exactamente la salida de 01 |
| `session-02-step-01-typed-fixture` | Cinco objetos; strictNullChecks; SVG preparados |
| `session-02-step-02-card-props` | Una tarjeta recibe data; ruta del poster como texto temporal |
| `session-02-step-03-keyed-list` | Cinco tarjetas con map y key, casos nulos pendientes |
| `session-02-step-04-null-fallbacks` | Cinco tarjetas con imágenes y fallbacks; práctica pendiente |
| `session-02-end` | Sexta entrada completada y checkpoint comprobado |
| `main` | Último cierre verificado: sesión 02 |

Guarda tu trabajo antes de consultar una rama en una copia limpia:

```bash
git switch session-02-start
git diff session-02-step-02-card-props..session-02-step-03-keyed-list -- src/App.tsx src/index.css
```

Cada README describe la etapa consultada. No muevas estas referencias para guardar tu práctica. El flujo de clase es presentación continua → coding → práctica → comprobación y cierre oral.

## Material estudiantil

- [Sesión 01](course/01-react-jsx-y-proyecto/student-guide.md) y [lectura previa](course/01-react-jsx-y-proyecto/pre-class-reading.md).
- [Sesión 02](course/02-props-listas-y-typescript/student-guide.md) y [lectura previa](course/02-props-listas-y-typescript/pre-class-reading.md).

Los SVG de `public/posters/` son imágenes de prueba creadas para el curso, sin posters comerciales. La práctica incorpora el sexto dato; su imagen está preparada desde la primera etapa.

## Comprobación

Cuenta seis tarjetas. Arrival presenta Película; Severance, Serie; Aftersun, Poster no disponible; The Bear, Sin descripción disponible. Las cinco imágenes locales deben cargar. El fallback de null no captura una ruta no nula incorrecta.

Build y lint se comprobaron en las etapas; el navegador final mostró seis tarjetas, imágenes y casos nulos. React DevTools y el ritmo real de aula quedan para el ensayo docente. La sesión 03 todavía no está implementada.
