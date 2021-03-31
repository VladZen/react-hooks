import { unmountComponentAtNode, render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import StationsListItem from '@/components/stations-list/StationsListItem'
import MockStatus from '@/components/stations-list/StationStatus'

jest.mock('@/components/stations-list/StationStatus', () => {
  return function Mock (props) {
    return (
      <div data-testid="list-item">
        { props.available ? 'available' : 'offline' }
      </div>
    )
  }
})

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
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
      act(() => {
        render(
          (
            <MemoryRouter>
              <StationsListItem station={ mockStations[status] } />
            </MemoryRouter>
          ),
          container
        )
      })

      expect(container).toMatchSnapshot()
    })
  })
})
