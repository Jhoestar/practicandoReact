import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeatherApp } from './weatherApp'
import './Styles/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>,
)
