import { AppHeader } from './components/app-header'

function App() {
  return (
    <>
      <AppHeader />

      <main className="page-container">
        <h2>Catálogo destacado</h2>

        <article className="media-card">
          <div className="media-card__poster">Poster pendiente</div>
          <div>
            <p className="media-card__meta">Película · 2016</p>
            <h3>Arrival</h3>
            <p>
              Una lingüista intenta comprender a visitantes que han llegado a
              distintos puntos del planeta.
            </p>
          </div>
        </article>
      </main>
    </>
  )
}

export default App
