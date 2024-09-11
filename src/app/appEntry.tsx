import { appRouter } from '@/app/appRouter'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/base.css'
import { RouterProvider } from 'react-router-dom'

const root = document.getElementById('root') as HTMLElement

async function init() {
  // await startMockServiceWorker()
}

init().then(() => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={appRouter()} />
    </React.StrictMode>,
  )
})
