import {
  RoomCreatePayload,
  roomCreateSchema,
} from '@/schemas/room/roomCreateSchema'
import { roomCreateService } from '@/services/room/room-create.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useRoomCreate = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoomCreatePayload>({
    resolver: zodResolver(roomCreateSchema),
    defaultValues: {
      min_participants: 1,
      max_participants: 1,
      duration_in_minutes: 1,
      is_multi_participants: true,
      is_delivery: false,
    },
  })

  const onSubmit = async (data: RoomCreatePayload) => {
    const id = toast.loading('Criando sala...')
    try {
      setLoading(true)
      await roomCreateService(data)
      toast.update(id, {
        render: 'Sala criada com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/salas')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar a sala. Por favor, tente novamente mais tarde',
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
    handleSubmit: handleSubmit(onSubmit, (errors) => {
      console.log(errors)
    }),
    errors,
    loading,
  }
}
