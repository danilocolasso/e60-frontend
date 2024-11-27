import { AuthProvider } from '@/contexts/AuthContext.tsx'
import '@/index.css'
import { Routes } from '@/routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
