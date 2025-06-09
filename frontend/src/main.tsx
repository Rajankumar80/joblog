import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from './pages/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
