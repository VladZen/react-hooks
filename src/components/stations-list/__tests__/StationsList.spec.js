import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import StationsList from '@/components/stations-list/StationsList'
import MockStationsListItem from '@/components/stations-list/StationsListItem'

jest.mock('@/components/stations-list/StationsListItem', () => {
  return function Mock (props) {
    return (
      <li data-testid="list-item">
        { props.station.name }
      </li>
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
      act(() => {
        render(
          (
            <StationsList stations={ mockStations } />
          ),
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('empty list', () => {
      act(() => {
        render(
          (
            <StationsList stations={ null } />
          ),
          container
        )
      })

      expect(container).toMatchSnapshot()
    })
  })
})
