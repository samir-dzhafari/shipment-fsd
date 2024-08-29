import { setupWorker } from 'msw/browser'

const worker = setupWorker(
  // @widgets layer handlers
)

async function startMockServiceWorker() {
  await worker.start({
    onUnhandledRequest(request, print) {
      const url = new URL(request.url)

      // undefined for files
      if (/\.png|jpg|svg|tsx?|css|jsx?|woff2$/.test(url.pathname)) {
        return
      }

      // Otherwise, print a warning for any unhandled request.
      print.warning()
    },
  })
}
