import { AppHeader } from './components/app-header'
import { MediaCard } from './components/media-card'

function App() {
  return (
    <>
      <AppHeader />

      <main className="page-container">
        <h2>Catálogo destacado</h2>

        <MediaCard />
      </main>
    </>
  )
}

export default App
