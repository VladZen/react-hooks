import { useMemo } from 'react'

import { useParams } from 'react-router-dom'

import { useStationsContext } from '@/contexts/useStations'

import Header from '@/components/Header'
import StationView from '@/components/StationView'
import Back from '@/components/BackButton'
import Loading from '@/components/Loading'
import Page404 from '@/pages/Page404'

const Show = () => {
  const {
    isLoading,
    stations
  } = useStationsContext()

  const {
    stationID
  } = useParams()

  const station = useMemo(
    () => stations.find(({ station_ID }) => station_ID === +stationID),
    [stations, stationID]
  )

  return (
    <div className='layout'>
      <Loading trigger={isLoading}>
        {
          !station
            ? <Page404 />
            : <>
              <Header heading={ station.name }>
                <Back
                  to='/'
                  title='Back to the list'
                />
              </Header>

              <main className='layout__main'>
                <StationView station={ station } />
              </main>
            </>
        }
      </Loading>
    </div>
  )
}

export default Show
