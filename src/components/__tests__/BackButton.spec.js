import { unmountComponentAtNode, render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import BackButton from '@/components/BackButton'

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

describe('BackButton component', () => {
  describe('rendering', () => {
    it('basic', () => {
      act(() => {
        render(
          <MemoryRouter>
            <BackButton to='/' />
          </MemoryRouter>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('don\'t render any children', () => {
      act(() => {
        render(
          <MemoryRouter>
            <BackButton to='/'>
              <a href='#'>
                Some link
              </a>
            </BackButton>
          </MemoryRouter>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('applies props to the inner link', () => {
      act(() => {
        render(
          <MemoryRouter>
            <BackButton title='Some link title' to='/' />
          </MemoryRouter>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })
  })
})
