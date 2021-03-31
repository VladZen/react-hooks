import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Loading from '@/components/Loading'

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

describe('Loading component', () => {
  describe('rendering', () => {
    it('shows spinner', () => {
      act(() => {
        render(
          <Loading trigger={true}>
            <a href='#'>
              Some link
            </a>
          </Loading>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('shows content', () => {
      act(() => {
        render(
          <Loading trigger={false}>
            <a href='#'>
              Some link
            </a>
          </Loading>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })

    it('shows spinner with applied extra props', () => {
      act(() => {
        render(
          <Loading
            className='additional-class'
            trigger={true}
          >
            <a href='#'>
              Some link
            </a>
          </Loading>,
          container
        )
      })

      expect(container).toMatchSnapshot()
    })
  })
})
