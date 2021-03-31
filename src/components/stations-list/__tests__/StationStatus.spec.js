import { render } from '@testing-library/react'
import StationStatus from '@/components/stations-list/StationStatus'

describe('StationStatus component', () => {
  describe('rendering', () => {
    it('available', () => {
      const { container } = render(
        <StationStatus available={ 1 } />
      )

      expect(container).toMatchSnapshot()
    })

    it('offline', () => {
      const { container } = render(
        <StationStatus available={ 0 } />
      )

      expect(container).toMatchSnapshot()
    })
  })
})
