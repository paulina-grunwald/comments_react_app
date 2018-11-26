import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from 'components/App'

import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Welcome from './components/Welcome'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path='/' exact component={Welcome} />
      <Route path='/signup' exact component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
)
