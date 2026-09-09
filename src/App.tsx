import { AppHeader } from './components/app-header'
import { MediaCard } from './components/media-card'
import { mediaItems } from './data/media-items'

function App() {
  return (
    <>
      <AppHeader />

      <main className="page-container">
        <h2>Catálogo destacado</h2>

        <MediaCard data={mediaItems[0]} />
      </main>
    </>
  )
}

export default App
