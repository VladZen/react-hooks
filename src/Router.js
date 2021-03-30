import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom'

import Index from '@/pages/Index'
import Show from '@/pages/Show'
import Page404 from '@/pages/Page404'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/stations' />
        </Route>

        <Route
          exact
          path='/stations'
          component={Index}
        />

        <Route
          path='/stations/:stationID'
          component={Show}
        />

        <Route
          component={Page404}
        />
      </Switch>
    </Router>
  )
}

export { AppRouter }
