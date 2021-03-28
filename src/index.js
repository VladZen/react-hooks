import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import '@styles/index.scss'

import Index from '@pages/Index'
import Show from '@pages/Show'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/'>
        <Index />
      </Route>

      <Route path='/:stationID'>
        <Show />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

