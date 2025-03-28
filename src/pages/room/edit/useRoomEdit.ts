import {
  RoomUpdatePayload,
  roomUpdateSchema,
} from '@/schemas/room/roomUpdateSchema'
import { roomEditService } from '@/services/room/room-edit.service'
import { roomUpdateService } from '@/services/room/room-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useRoomEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<RoomUpdatePayload>({
    resolver: zodResolver(roomUpdateSchema),
  })

  const fetch = async () => {
    try {
      const data = await roomEditService({ id: Number(id) })
      reset(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar a sala. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [reset])

  const onSubmit = async (data: RoomUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      setLoading(true)
      await roomUpdateService(data)
      toast.update(id, {
        render: 'Sala atualizada com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/salas')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao atualizar a sala. Por favor, tente novamente mais tarde',
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
