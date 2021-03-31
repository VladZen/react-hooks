import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import StationStatus from '@/components/stations-list/StationStatus'

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

describe('StationStatus component', () => {
  describe('rendering', () => {
    it('available', () => {
      act(() => {
        render(
          <StationStatus available={ 1 } />,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('offline', () => {
      act(() => {
        render(
          <StationStatus available={ 0 } />,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })
  })
})
