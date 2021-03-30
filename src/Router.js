import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

import Index from '@/pages/Index'
import Show from '@/pages/Show'

const AppRouter = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Redirect to='/stations' />
      </Route>

      <Route exact path='/stations'>
        <Index />
      </Route>

      <Route path='/stations/:stationID'>
        <Show />
      </Route>
    </Router>
  )
}

export { AppRouter }
