import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Index from './pages/index.tsx'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
import Jobs from './pages/jobs.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
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
