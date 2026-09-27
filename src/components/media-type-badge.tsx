import type { MediaType } from "../types/media-item";

type MediaTypeBadgeProps = {
    mediaType: MediaType
}

function MediaTypeBadge(props: MediaTypeBadgeProps) {
    const label = props.mediaType === 'movie' ? 'Pelicula' : 'Serie'

    return(
        <span className="media-type-badge">
            {label}
        </span>
    )
}

export default MediaTypeBadge