import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from 'components/App'

import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Welcome from './components/Welcome'
import reducers from './reducers'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' exact component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
