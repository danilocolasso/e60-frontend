import {
  UserCreatePayload,
  userCreateSchema,
} from '@/schemas/user/userCreateSchema.ts'
import { userCreateService } from '@/services/user/user-create.service.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useUserCreate = () => {
  const navigate = useNavigate()

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
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  }
}
