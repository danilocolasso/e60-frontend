import { useAuth } from '@/contexts/AuthContext.tsx'
import { login } from '@/services/auth.service.ts'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  remember: z.boolean().optional(),
})

type loginFormData = z.infer<typeof loginSchema>

export const useLogin = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: loginFormData) => {
    try {
      const response = await login(data)
      setUser(response.data.user)
      navigate('/')
    } catch (error: any) {
      console.log(error)
      toast.error(
        error.response?.data?.message ||
          'Ocorreu um error inesperado ao tentar realizar login. Por favor, tente novamente mais tarde.',
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
