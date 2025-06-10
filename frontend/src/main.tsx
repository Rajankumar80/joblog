import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NotFoundPage from './pages/NotFoundPage.tsx'
import Index from './pages/index.tsx'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
import Jobs from './pages/jobs.tsx'
import JobDetails from './pages/detail.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navbar1 as Navbar } from "@/components/navbar"
import { AuthProvider } from '@/lib/auth'
import { Toaster } from "@/components/ui/toaster"

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
  {
    path: "/jobs/:id",
    element: <JobDetails />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>,
)
