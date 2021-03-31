import { renderHook } from '@testing-library/react-hooks'
import { StationsProvider, useStationsContext } from '@/contexts/useStations'
import axios from 'axios'

import mock from 'mock.json'

const axiosMock = global.axiosMock()

axiosMock.onGet('http://localhost:5000/stations/').reply(200, mock.stations)

afterAll(() => {
  axiosMock.restore()
})

describe('useStations context', () => {
  it('return stations and isLoading flag', async () => {
    const get = jest.spyOn(axios, 'get')
    const wrapper = ({ children }) => <StationsProvider>{children}</StationsProvider>
    const { result, waitForNextUpdate, rerender, unmount } = renderHook(() => useStationsContext(), { wrapper })

    await waitForNextUpdate()

    expect(get.mock.calls.length).toBe(1)
    expect(result.current.stations).toEqual(mock.stations)

    get.mockRestore()
  })
})

