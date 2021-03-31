import { useStationsContext } from '@/contexts/useStations'

import Header from '@/components/Header'
import StationsList from '@/components/stations-list/StationsList'
import Loading from '@/components/Loading'

const Index = () => {
  const {
    isLoading,
    stations
  } = useStationsContext()

  return (
    <div className='layout'>
      <Header heading='Your stations' />

      <main className='layout__main'>
        <Loading trigger={isLoading}>
          <StationsList stations={ stations } />
        </Loading>
      </main>
    </div>
  )
}

export default Index
