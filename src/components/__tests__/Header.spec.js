import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Header from '@/components/Header'

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

describe('Header component', () => {
  describe('rendering', () => {
    it('without children', () => {
      act(() => {
        render(<Header heading='Some title' />, container)
      })

      expect(container).toMatchSnapshot()
    })

    it('with children', () => {
      act(() => {
        render((<Header heading='Some title'>
          <a href='#'>
            Some link
          </a>
        </Header>), container)
      })

      expect(container).toMatchSnapshot()
    })
  })
})

