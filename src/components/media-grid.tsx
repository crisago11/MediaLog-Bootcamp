import type { MediaItem } from '../types/media-item'
import { MediaCard } from './media-card'
import EmptyState from './empty-state'

type MediaGridProps = {
  items: MediaItem[]
}

export function MediaGrid(props: MediaGridProps) {
  const { items } = props

  if(items.length === 0){
    return (
      <EmptyState
       title="Catálogo vacío"
       description="No hay películas o series disponibles"
       />
    )
  }
  return (
    <div className="media-list">
      {items.map((media) => (
        <MediaCard key={media.id} data={media} />
      ))}
    </div>
  )
}
