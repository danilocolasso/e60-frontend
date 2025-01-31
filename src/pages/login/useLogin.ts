import { useAuth } from '@/contexts/AuthContext'
import { LoginPayload, loginSchema } from '@/schemas/auth/loginSchema'
import { login } from '@/services/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useLogin = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginPayload) => {
    try {
      const response = await login(data)
      setUser(response.data.user)
      navigate('/')
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          'Ocorreu um error inesperado ao tentar realizar auth. Por favor, tente novamente mais tarde.',
      )
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  }
}
