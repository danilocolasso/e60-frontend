import { useAuth } from '@/contexts/AuthContext.tsx'
import {
  UserUpdatePayload,
  userUpdateSchema,
} from '@/schemas/user/userUpdateSchema'
import { userEditService } from '@/services/user/user-edit.service'
import { userUpdateService } from '@/services/user/user-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useUserProfile = () => {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<UserUpdatePayload>({
    resolver: zodResolver(userUpdateSchema),
  })

  const fetch = async () => {
    try {
      if (!user) {
        return
      }

      const data = await userEditService({ id: Number(user.id) })
      reset(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [user])

  const onSubmit = async (data: UserUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      await userUpdateService(data)
      toast.update(id, {
        render: 'Usuário salvo com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao salvar o usuário. Por favor, tente novamente mais tarde',
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
