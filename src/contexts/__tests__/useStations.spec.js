import { render, screen, waitFor } from '@testing-library/react'
import { useMemo } from 'react'
import { StationsProvider, useStationsContext } from '@/contexts/useStations'

import mock from 'mock.json'

const axios = global.axiosMock()

axios.onGet('/stations').reply(200, mock.stations)

const SomeTestComponent = () => {
  const {
    isLoading,
    stations
  } = useStationsContext()

  const data = useMemo(() => JSON.stringify(stations, null, 2), [stations])

  return (
    <div data-testid='json'>
      <div id='data'>
        { data }
      </div>

      <div id='loading'>
        { isLoading ? 'loading' : 'loaded' }
      </div>
    </div>
  )
}

afterAll(() => {
  axios.restore()
})

describe('useStations context', () => {
  it('return stations and isLoading flag', async () => {
    render(
      <StationsProvider></StationsProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('json')).toMatchSnapshot()
    })
  })
})

