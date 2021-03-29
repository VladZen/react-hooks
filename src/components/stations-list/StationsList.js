import '@styles/components/stations-list.scss'
import Station from '@/components/stations-list/StationsListItem'

const StationsList = ({ stations }) => {
  return (
    <ul className='stations'>
      { stations.length
        ? stations.map((station) => (
          <Station
            key={ station.station_ID }
            station={ station }
          />
        ))
        : <li className='text-center'>
          There are no stations in the list
        </li>
      }
    </ul>
  )
}

export default StationsList
