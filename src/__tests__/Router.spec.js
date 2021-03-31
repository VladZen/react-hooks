import { render, screen } from '@testing-library/react'
import { AppRouter } from '@/Router.js'

jest.mock('@/pages/Index', () => {
  return function Mock () {
    return (
      <div data-testid="index">
        index
      </div>
    )
  }
})

jest.mock('@/pages/Show', () => {
  return function Mock () {
    return (
      <div data-testid="show">
        show
      </div>
    )
  }
})

jest.mock('@/pages/Page404', () => {
  return function Mock () {
    return (
      <div data-testid="404">
        404
      </div>
    )
  }
})

const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(<AppRouter />)
}

describe('Router', () => {
  it('redirects from root to /stations', () => {
    renderWithRouter({ route: '/' })
    expect(screen.queryByText('index')).toBeInTheDocument()
    expect(screen.queryByText('show')).toBeNull()
    expect(screen.queryByText('404')).toBeNull()
  })

  it('go to /stations/:stationId', async () => {
    renderWithRouter({ route: '/stations/101' })
    expect(screen.queryByText('index')).toBeNull()
    expect(screen.queryByText('show')).toBeInTheDocument()
    expect(screen.queryByText('404')).toBeNull()
  })

  it('go to /stations', async () => {
    renderWithRouter({ route: '/stations' })
    expect(screen.queryByText('index')).toBeInTheDocument()
    expect(screen.queryByText('show')).toBeNull()
    expect(screen.queryByText('404')).toBeNull()
  })

  it('shows 404', async () => {
    renderWithRouter({ route: '/some/unmentioned/url' })
    expect(screen.queryByText('index')).toBeNull()
    expect(screen.queryByText('show')).toBeNull()
    expect(screen.queryByText('404')).toBeInTheDocument()
  })
})
