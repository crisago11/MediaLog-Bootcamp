import { AppHeader } from './components/app-header'
import { MediaCard } from './components/media-card'
import { mediaItems } from './data/media-items'

function App() {
  return (
    <>
      <AppHeader />

      <main className="page-container">
        <h2>Catálogo destacado</h2>

        <div className="media-list">
          {mediaItems.map((media) => (
            <MediaCard key={media.id} data={media} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
