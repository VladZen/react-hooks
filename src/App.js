import { renderRoutes } from 'react-router-config'

import Header from './components/Header'

function App({ route }) {
  const heading = 'Your stations'

  return (
    <div className="layout">
      <Header heading={ heading } />

      <main className="layout__main">
        { renderRoutes(route.routes) }
      </main>
    </div>
  )
}

export default App
