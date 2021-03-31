import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import StationView from '@/components/StationView'

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
    act(() => {
      render(
        (<StationView station={ mockStation } />),
        container
      )
    })

    expect(container).toMatchSnapshot()
  })
})
