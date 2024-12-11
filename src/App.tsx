import { AuthProvider } from '@/contexts/AuthContext'
import { useTheme } from '@/hooks/useTheme'
import { Routes } from '@/routes'
import { ToastContainer } from 'react-toastify'

function App() {
  const { isDarkMode } = useTheme()

  return (
    <AuthProvider>
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} />
      <Routes />
    </AuthProvider>
  )
}

export default App
