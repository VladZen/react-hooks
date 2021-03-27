import PropTypes from 'prop-types'
import Enum from '@utils/PropTypeEnum'

import Status from '@components/stations-list/StationStatus.js'
import { Link } from 'react-router-dom'

const StationsListItem = ({ data }) => {
  const {
    available,
    name,
    station_ID
  } = data

  return (

    <li className='stations__item'>
      <Link
        className='stations__item__name'
        to={ `/${station_ID}` }
      >
        { name }
      </Link>

      <Status available={ available } />
    </li>
  )
}

StationsListItem.propTypes = {
  data: PropTypes.shape({
    'station_ID': PropTypes.number,
    'custom_evse_id': PropTypes.any, // temp: don't know what else types it could be of
    'location_ID': PropTypes.number,
    'seller_ID': PropTypes.number,
    'name': PropTypes.string,
    'connected': Enum(),
    'position': PropTypes.string, // could be improved to support coordinates
    'available': Enum(),
    'lastconnect': PropTypes.string, // could be improved to support date
    'roaming_identifier_cpo': PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(null)
    ])
  })
}

export default StationsListItem
