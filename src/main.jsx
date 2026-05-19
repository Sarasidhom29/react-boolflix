import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles/index.css'

import { BoolflixProvider } from './contexts/BoolflixContext.jsx'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BoolflixProvider>
      <App />
    </BoolflixProvider>

  </StrictMode>,
)
