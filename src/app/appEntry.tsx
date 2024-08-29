import React from 'react'
import ReactDOM from 'react-dom/client'
import { startMockServiceWorker } from '@/app/server/mockServiceWorker'

const root = document.getElementById('root') as HTMLElement

async function init() {
  await startMockServiceWorker()
}

init().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div>123</div>
    </React.StrictMode>,
  )
})
