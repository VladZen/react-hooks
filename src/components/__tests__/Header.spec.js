import { render } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header component', () => {
  describe('rendering', () => {
    it('without children', () => {
      const { container } = render(<Header heading='Some title' />)

      expect(container).toMatchSnapshot()
    })

    it('with children', () => {
      const { container } = render(<Header heading='Some title'>
        <a href='#'>
          Some link
        </a>
      </Header>)

      expect(container).toMatchSnapshot()
    })
  })
})

