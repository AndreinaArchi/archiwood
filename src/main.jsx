import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import i18next from './locales/config/i18n';
import { I18nextProvider } from 'react-i18next';
//import Maintenance from './maintenance/Maintenance.jsx'
import './assets/Style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        {/*<Maintenance />*/}
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
)
