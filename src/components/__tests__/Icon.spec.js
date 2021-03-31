import { render } from '@testing-library/react'
import Icon from '@/components/Icon'

describe('Icon component', () => {
  describe('rendering', () => {
    it('without children', () => {
      const { container } = render(<Icon alias='arrow' />)

      expect(container).toMatchSnapshot()
    })

    it('don\'t render any children', () => {
      const { container } = render(<Icon alias='arrow'>
        <a href='#'>
          Some link
        </a>
      </Icon>)

      expect(container).toMatchSnapshot()
    })

    it('applies props to the root svg', () => {
      const { container } = render(<Icon
        alias='arrow'
        className='some-class'
        title='Some title'
      />)

      expect(container).toMatchSnapshot()
    })
  })
})
