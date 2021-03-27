import '@styles/components/stations-list.scss'
import Station from '@components/stations-list/StationsListItem'

const fakeList = [
  {
    'station_ID': 997,
    'custom_evse_id': null,
    'location_ID': 997,
    'seller_ID': 21,
    'name': 'Robot test: not plugged in',
    'connected': 0,
    'position': '61.54,21.54',
    'available': 1,
    'lastconnect': '2020-05-25T13:56:03.000Z',
    'roaming_identifier_cpo': 'FI*001'
  },
  {
    'station_ID': 998,
    'custom_evse_id': '998*1',
    'location_ID': 998,
    'seller_ID': 21,
    'name': 'Robot test free charging',
    'connected': 1,
    'position': '36.093666,-115.1473',
    'available': 0,
    'lastconnect': '2021-01-12T15:34:24.000Z',
    'roaming_identifier_cpo': 'FI*001'
  }
]

const StationsList = () => {
  return (
    <ul className='stations'>
      <Station data={ fakeList[0] } />
      <Station data={ fakeList[1] } />
    </ul>
  )
}

export default StationsList
