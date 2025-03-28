import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { roomShowService } from '@/services/room/room-show.service'
import { Room } from '@/types/room'

export const useRoomShow = () => {
  const { id } = useParams()
  const [room, setRoom] = useState<Room | null>(null)

  const fetch = async () => {
    try {
      const data = await roomShowService({
        id: Number(id)
      })
      setRoom(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar a sala. Por favor, tente novamente mais tarde'
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    room,
  }
}