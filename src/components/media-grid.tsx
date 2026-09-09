import type { MediaItem } from '../types/media-item'
import { MediaCard } from './media-card'

type MediaGridProps = {
  items: MediaItem[]
}

export function MediaGrid(props: MediaGridProps) {
  const { items } = props
  return (
    <div className="media-list">
      {items.map((media) => (
        <MediaCard key={media.id} data={media} />
      ))}
    </div>
  )
}
