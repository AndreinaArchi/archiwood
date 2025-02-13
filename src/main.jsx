import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
//import Maintenance from './maintenance/Maintenance.jsx'
import './assets/Style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*<Maintenance />*/}
      <App />
    </BrowserRouter>
  </StrictMode>
)
