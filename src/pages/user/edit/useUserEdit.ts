import {
  UserUpdatePayload,
  userUpdateSchema,
} from '@/schemas/user/userUpdateSchema'
import { userEditService } from '@/services/user/user-edit.service'
import { userUpdateService } from '@/services/user/user-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useUserEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

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
      const data = await userEditService({ id: Number(id) })
      reset(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [reset])

  const onSubmit = async (data: UserUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      setLoading(true)
      await userUpdateService(data)
      toast.update(id, {
        render: 'Usuário salvo com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/usuarios')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao salvar o usuário. Por favor, tente novamente mais tarde',
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
