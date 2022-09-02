import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import App from './App'
import { ScrollDown } from './common'
import store from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollDown />
      <App />
    </BrowserRouter>
  </Provider >
)
