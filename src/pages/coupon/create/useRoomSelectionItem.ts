import { branchRoomOptionsService } from '@/services/branch/branch-room-options.service'
import { Option } from '@/types/option'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const useRoomSelectionItem = () => {
  const [rooms, setRooms] = useState<Option<string>[] | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchRooms = async (branchId: number): Promise<Option<string>[]> => {
    try {
      setLoading(true)
      return await branchRoomOptionsService(branchId)
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar as salas. Por favor, tente novamente mais tarde')
      return []
    } finally {
      setLoading(false)
    }
  }

  const handleOpen = async (branchId: number, open: boolean) => {
    if (open === isOpen) return
    setIsOpen(open)
    if (rooms !== null) return
    const response = await fetchRooms(branchId)
    setRooms(response)
  }

  return {
    loading,
    handleOpen,
    rooms,
    isOpen,
  }
}
