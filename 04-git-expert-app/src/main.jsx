import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExportApp } from './GitExpertApp'

import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExportApp />
  </StrictMode>,
)
