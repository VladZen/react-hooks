import { render } from '@testing-library/react'
import Loading from '@/components/Loading'

describe('Loading component', () => {
  describe('rendering', () => {
    it('shows spinner', () => {
      const { container } = render(
        <Loading trigger={true}>
          <a href='#'>
            Some link
          </a>
        </Loading>
      )

      expect(container).toMatchSnapshot()
    })

    it('shows content', () => {
      const { container } = render(
        <Loading trigger={false}>
          <a href='#'>
            Some link
          </a>
        </Loading>
      )

      expect(container).toMatchSnapshot()
    })

    it('shows spinner with applied extra props', () => {
      const { container } = render(
        <Loading
          className='additional-class'
          trigger={true}
        >
          <a href='#'>
            Some link
          </a>
        </Loading>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
