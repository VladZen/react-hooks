import PropTypes from 'prop-types'
import StationType from '@/types/Station'

import '@styles/components/stations-list.scss'
import Station from '@/components/stations-list/StationsListItem'

const StationsList = ({ stations }) => {
  return (
    <ul className='stations'>
      { stations && stations.length
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

StationsList.propTypes = {
  stations: PropTypes.arrayOf(StationType)
}

export default StationsList
