import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ResumeresultProvider } from './Context/ResumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResumeresultProvider>
  <StrictMode>
    <App />
  </StrictMode>,
</ResumeresultProvider>
)
