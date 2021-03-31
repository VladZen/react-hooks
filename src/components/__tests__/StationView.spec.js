import { render } from '@testing-library/react'
import StationView from '@/components/StationView'

const mockStation = {
  'station_ID': 102,
  'custom_evse_id': null,
  'location_ID': 102,
  'seller_ID': 27,
  'name': 'Endesa 2',
  'connected': 1,
  'position': '60.868623,26.702901',
  'available': 0,
  'lastconnect': '2019-02-22T13:36:12.000Z',
  'roaming_identifier_cpo': 'FI*001'
}

describe('StationView component', () => {
  it('should be rendered properly', () => {
    const { container } = render(
      <StationView station={ mockStation } />
    )

    expect(container).toMatchSnapshot()
  })
})
