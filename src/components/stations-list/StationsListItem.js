import StationType from '@types/Station'

import Status from '@components/stations-list/StationStatus.js'
import { Link } from 'react-router-dom'

const StationsListItem = ({ station }) => {
  const {
    available,
    name,
    station_ID
  } = station

  return (
    <li className='stations__item'>
      <Link
        className='stations__item__name'
        title={ name }
        to={ `/stations/${station_ID}` }
      >
        { name }
      </Link>

      <Status available={ available } />
    </li>
  )
}

StationsListItem.propTypes = {
  data: StationType
}

export default StationsListItem
