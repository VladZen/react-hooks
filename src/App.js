import { StationsProvider } from '@/contexts/useStations'
import { AppRouter } from './Router'

const App = () => {
  return (
    <StationsProvider>
      <AppRouter />
    </StationsProvider>
  )
}

export default App
