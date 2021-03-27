import '@styles/index.scss'
import App from './App'

// pages
import List from '@components/stations-list/StationsList'
import View from '@components/StationView'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: List
      },
      {
        path: '/:stationId',
        component: View
      }
    ]
  }
]

export default routes
