import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import StationsListItem from '@/components/stations-list/StationsListItem'

jest.mock('@/components/stations-list/StationStatus', () => {
  return function Mock (props) {
    return (
      <div data-testid="list-item">
        { props.available ? 'available' : 'offline' }
      </div>
    )
  }
})

const mockStations = {
  available: {
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
  offline: {
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
}

describe('StationListItem component', () => {
  describe('rendering', () => {
    it.each(['available', 'offline'])('%s', (status) => {
      const { container } = render(
        <MemoryRouter>
          <StationsListItem station={ mockStations[status] } />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
