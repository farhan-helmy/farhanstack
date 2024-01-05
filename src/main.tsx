import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Router, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { indexRoute, rootRoute } from './router.tsx'

const queryClient = new QueryClient()

const routeTree = rootRoute.addChildren([
  indexRoute
])
// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  context: {
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>
)
