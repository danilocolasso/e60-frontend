import { branchOptionsService } from '@/services/branch/branch-options.service'
import { Option } from '@/types/option'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Room } from '@/types/room'

export interface Rooms {
  rooms: Room[]
}

export const useRoomSelection = () => {
  const [branches, setBranches] = useState<Option<string>[]>([])
  const [loading, setLoading] = useState(false)

  const fetchBranches = async () => {
    try {
      setLoading(true)
      const response = await branchOptionsService()
      setBranches(response)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar as filiais. Por favor, tente novamente mais tarde',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBranches()
  }, [])

  return {
    branches,
    loading,
  }
}