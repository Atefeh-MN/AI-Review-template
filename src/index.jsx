import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import './assets/scss/_app.scss'
import i18n from './i18n'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// document.documentElement.dir = i18n.language==="en"?'ltr':'rtl'

