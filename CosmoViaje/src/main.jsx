import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base/_index.css'
import './assets/styles/base/_variables.css'
import './assets/styles/base/_app.css'
import App from './App.jsx'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'
import './assets/styles/components/_space.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
