# MediaLog Bootcamp

Paquete `medialog-bootcamp`. Node >=22.22.0 y pnpm 11.17.0.

## Sesión 03 · S03-B04 · Entrada al taller

MediaGrid recibe items y conserva wrapper, map y key. App elige el fixture. Seis tarjetas funcionan; [] deja el área vacía sin mensaje. No contiene EmptyState, MediaTypeBadge ni el reto extra.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

En otra terminal: `pnpm build` y `pnpm lint`.

[Guía estudiantil](course/03-taller-catalogo-estatico/student-guide.md), [lectura previa](course/03-taller-catalogo-estatico/pre-class-reading.md) y [rúbrica](course/03-taller-catalogo-estatico/workshop-rubric.md).

Guarda tu trabajo antes de consultar otra rama. Presentación continua → coding → descanso → taller → revisión oral. Siguiente paso: taller estudiantil de estado vacío y badge.

## Explicación de los cambios y flujo de props


`App` selecciona la fuente de datos `mediaItems` y la envía a `MediaGrid`
mediante la prop `items`.

`MediaGrid` recibe `items: MediaItem[]` y decide qué renderizar. Si
`items.length === 0`, muestra `EmptyState` enviándole las props `title`
y `description`. Si existen elementos, utiliza `items.map()` para crear
un `MediaCard` por cada medio y coloca `media.id` como `key`.

`MediaCard` recibe cada elemento mediante la prop `data`. Muestra el
poster, fecha, título y descripción, manteniendo los fallbacks cuando
no existe poster o descripción. El tipo del medio se delega a
`MediaTypeBadge` mediante la prop `mediaType`.

`MediaTypeBadge` recibe `mediaType: MediaType` y muestra "Película"
cuando el valor es `movie` y "Serie" cuando es `series`.

El flujo principal es:

App → MediaGrid → MediaCard → MediaTypeBadge

Cuando la colección está vacía:

App → MediaGrid → EmptyState

No se utiliza estado ni interacción.
