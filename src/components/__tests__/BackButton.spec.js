import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import BackButton from '@/components/BackButton'

describe('BackButton component', () => {
  describe('rendering', () => {
    it('basic', () => {
      const { container } = render(
        <MemoryRouter>
          <BackButton to='/' />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })

    it('don\'t render any children', () => {
      const { container } = render(
        <MemoryRouter>
          <BackButton to='/'>
            <a href='#'>
              Some link
            </a>
          </BackButton>
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })

    it('applies props to the inner link', () => {
      const { container } = render(
        <MemoryRouter>
          <BackButton title='Some link title' to='/' />
        </MemoryRouter>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
