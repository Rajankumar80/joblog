import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import NotFoundPage from './pages/NotFoundPage.tsx';
import Index from './pages/index.tsx';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';
import Jobs from './pages/jobs.tsx';
import JobDetails from './pages/detail.tsx';
import Dashboard from './pages/dashboard.tsx';
import RootLayout from './pages/RootLayout.tsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from '@/lib/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 🧠 Wrap all children here
    children: [
      { index: true, element: <Index /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "jobs", element: <Jobs /> },
      { path: "jobs/:id", element: <JobDetails /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
