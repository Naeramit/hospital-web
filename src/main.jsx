import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store'
import {Provider} from 'react-redux'
import {getAccessToken} from './utils/localstorage.js'
import {getUser} from './features/auth/slice/auth-slice.js'




if (getAccessToken()){
  store.dispatch(getUser());
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
