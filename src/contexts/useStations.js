import { useMemo, useCallback, useReducer, useRef, useEffect } from 'react'
import constate from 'constate'

import Api from '@/api/Stations'

const initialState = {
  status: 'idle',
  error: null,
  stations: []
}

const useStations = () => {
  const cache = useRef([])

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' }
      case 'FETCHED':
        return { ...initialState, status: 'fetched', stations: action.payload }
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload }
      default:
        return state
    }
  }, initialState)

  const isLoading = useMemo(() => !['fetched', 'error'].includes(state.status), [state.status])

  const fetchStations = useCallback(() => {
    return Api.asSubscription({
      promise: Api.getList,
      successCb (stations) {
        cache.current = stations
        dispatch({ type: 'FETCHED', payload: stations })
      },
      failCb (e) {
        dispatch({ type: 'FETCH_ERROR', payload: e.message })
      }
    })
  }, [])

  useEffect(() => {
    const {
      subscribe,
      unsubscribe
    } = fetchStations()

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' })
      if (cache.current.length) {
        const data = cache.current
        dispatch({ type: 'FETCHED', payload: data })
      } else await subscribe()
    }

    fetchData()

    return () => {
      unsubscribe()
    }
  }, [cache, fetchStations])

  return {
    stations: state.stations,
    isLoading
  }
}

// 2️⃣ Wrap your hook with the constate factory
const [StationsProvider, useStationsContext] = constate(useStations)

export { StationsProvider, useStationsContext }
