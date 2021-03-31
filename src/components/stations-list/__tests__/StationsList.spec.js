import { render } from '@testing-library/react'
import StationsList from '@/components/stations-list/StationsList'

jest.mock('@/components/stations-list/StationsListItem', () => {
  return function Mock (props) {
    return (
      <li data-testid="list-item">
        { props.station.name }
      </li>
    )
  }
})

const mockStations = [
  {
    'station_ID': 102,
    'custom_evse_id': null,
    'location_ID': 102,
    'seller_ID': 27,
    'name': 'Endesa 2',
    'connected': 1,
    'position': '60.868623,26.702901',
    'available': 1,
    'lastconnect': '2019-02-22T13:36:12.000Z',
    'roaming_identifier_cpo': 'FI*001'
  },
  {
    'station_ID': 103,
    'custom_evse_id': null,
    'location_ID': 103,
    'seller_ID': 28,
    'name': 'Endesa 2',
    'connected': 1,
    'position': '60.868623,26.702901',
    'available': 0,
    'lastconnect': '2019-02-22T13:36:12.000Z',
    'roaming_identifier_cpo': 'FI*001'
  }
]

describe('StationListItem component', () => {
  describe('rendering', () => {
    it('with items', () => {
      const { container } = render(
        <StationsList stations={ mockStations } />
      )

      expect(container).toMatchSnapshot()
    })

    it('empty list', () => {
      const { container } = render(
        <StationsList stations={ null } />
      )

      expect(container).toMatchSnapshot()
    })
  })
})
