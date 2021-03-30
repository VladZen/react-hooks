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
      <Loading trigger={isLoading}>
        <Header heading='Your stations' />

        <main className='layout__main'>
          <StationsList stations={ stations } />
        </main>
      </Loading>
    </div>
  )
}

export default Index
