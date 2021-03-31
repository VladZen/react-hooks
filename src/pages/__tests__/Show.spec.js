import { render } from '@testing-library/react'
import { useParams, MemoryRouter } from 'react-router-dom'
import { useStationsContext } from '@/contexts/useStations'
import Show from '@/pages/Show'

jest.mock('@/contexts/useStations', () => ({
  ...jest.requireActual('@/contexts/useStations'), // use actual for all non-hook parts
  useStationsContext: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: jest.fn()
}))

const stations = [
  {
    'station_ID': 103,
    'custom_evse_id': null,
    'location_ID': 103,
    'seller_ID': 27,
    'name': 'Endesa 3',
    'connected': 1,
    'position': '60.868623,26.702901',
    'available': 0,
    'lastconnect': '2019-03-26T06:46:32.000Z',
    'roaming_identifier_cpo': 'FI*001'
  },
  {
    'station_ID': 104,
    'custom_evse_id': null,
    'location_ID': 104,
    'seller_ID': 27,
    'name': 'Endesa 4',
    'connected': 1,
    'position': '60.868623,26.702901',
    'available': 1,
    'lastconnect': '2018-03-15T11:25:47.000Z',
    'roaming_identifier_cpo': 'FI*001'
  }
]

describe('Show page ', () => {
  describe('rendering', () => {
    it('loading', () => {
      useStationsContext.mockReturnValueOnce({
        isLoading: true,
        stations: []
      })

      useParams.mockReturnValueOnce({
        stationID: stations[0].station_ID
      })

      const { container } = render(
        <Show />
      )

      expect(container).toMatchSnapshot()
    })

    it('loaded', () => {
      useStationsContext.mockReturnValueOnce({
        isLoading: false,
        stations
      })

      useParams.mockReturnValueOnce({
        stationID: stations[0].station_ID
      })

      const { container } = render(
        <MemoryRouter>
          <Show />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })

    it('shows 404 if id is not found', () => {
      useStationsContext.mockReturnValueOnce({
        isLoading: false,
        stations
      })

      useParams.mockReturnValueOnce({
        stationID: 5000
      })

      const { container } = render(
        <MemoryRouter>
          <Show />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })
  })
})

