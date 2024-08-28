import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Comp } from '@/shared/asd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Comp />
  </StrictMode>,
)
