import { AuthProvider } from '@/contexts/AuthContext'
import { useTheme } from '@/hooks/useTheme'
import { Routes } from '@/routes'
import { ToastContainer } from 'react-toastify'
import { z } from 'zod'
import { errorMap } from '@/util/errorMap.ts'

function App() {
  const { isDarkMode } = useTheme()
  z.setErrorMap(errorMap)

  return (
    <AuthProvider>
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} />
      <Routes />
    </AuthProvider>
  )
}

export default App
