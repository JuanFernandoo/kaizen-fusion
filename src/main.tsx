import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouterProvider, QueryProvider } from '@/app'
import { Toaster } from "sonner"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AppRouterProvider />
      <Toaster richColors position="top-right" />
    </QueryProvider>
  </React.StrictMode>,
)