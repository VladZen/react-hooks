import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Icon from '@/components/Icon'

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

describe('Icon component', () => {
  describe('rendering', () => {
    it('without children', () => {
      act(() => {
        render(<Icon alias='arrow' />, container)
      })

      expect(container).toMatchSnapshot()
    })

    it('don\'t render any children', () => {
      act(() => {
        render(<Icon alias='arrow'>
          <a href='#'>
            Some link
          </a>
        </Icon>, container)
      })

      expect(container).toMatchSnapshot()
    })

    it('applies props to the root svg', () => {
      act(() => {
        render(<Icon
          alias='arrow'
          className='some-class'
          title='Some title'
        />, container)
      })

      expect(container).toMatchSnapshot()
    })
  })
})
