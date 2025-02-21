import {
  UserCreatePayload,
  userCreateSchema,
} from '@/schemas/user/userCreateSchema.ts'
import { userCreateService } from '@/services/user/user-create.service.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useUserCreate = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserCreatePayload>({
    resolver: zodResolver(userCreateSchema),
  })

  const onSubmit = async (data: UserCreatePayload) => {
    const id = toast.loading('Criando usuário...')
    try {
      setLoading(true)
      await userCreateService(data)
      toast.update(id, {
        render: 'Usuário criado com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/usuarios')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar o usuário. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  }
}
