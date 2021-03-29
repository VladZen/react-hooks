import { useState, useCallback } from 'react'
import constate from 'constate'

import Api from '@/api/Stations'

const useStations = () => {
  const [stationsAreLoading, setLoading] = useState(false)
  const [stations, setStations] = useState([])

  const fetchStations = useCallback(async () => {
    setLoading(true)
    try {
      const { data: stations } = await Api.getList()
      setStations(stations)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const getStation = async (id) => {
    if (!stations.length) await fetchStations()
    return stations.find(({ station_ID }) => station_ID === id)
  }

  return {
    stations,
    getStation,
    fetchStations,
    stationsAreLoading
  }
}

// 2️⃣ Wrap your hook with the constate factory
const [StationsProvider, useStationsContext] = constate(useStations)

export { StationsProvider, useStationsContext }
