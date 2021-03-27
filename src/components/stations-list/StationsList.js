import '@styles/components/stations-list.scss'
import Station from '@components/stations-list/StationsListItem'

// temp
import stations from '../../mock.json'

const StationsList = () => {
  return (
    <ul className='stations'>
      {stations.map((station) => (
        <Station
          key={ station.station_ID }
          data={ station }
        />
      ))}
    </ul>
  )
}

export default StationsList
