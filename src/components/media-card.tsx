import type { MediaItem } from '../types/media-item'

type MediaCardProps = {
  data: MediaItem
}

export function MediaCard(props: MediaCardProps) {
  const { data } = props

  return (
    <article className="media-card">
      <div className="media-card__poster">{data.posterUrl}</div>
      <div>
        <p className="media-card__meta">{data.mediaType} · {data.releaseDate}</p>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </article>
  )
}
