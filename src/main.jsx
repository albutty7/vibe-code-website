import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DiscordStatsProvider } from './hooks/useDiscordStats.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <DiscordStatsProvider>
        <App />
      </DiscordStatsProvider>
    </LanguageProvider>
  </StrictMode>,
)
