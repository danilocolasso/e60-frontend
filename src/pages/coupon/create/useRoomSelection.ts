import { branchOptionsService } from '@/services/branch/branch-options.service'
import { branchRoomOptionsService } from '@/services/branch/branch-room-options.service'
import { Option } from '@/types/option'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useRoomSelection = () => {
  const [branches, setBranches] = useState<Option<string>[]>([])
  const [loading, setLoading] = useState(false)
  const [initialLoadDone, setInitialLoadDone] = useState(false)

  const initializeWithRooms = async (selectedRooms?: Record<string, string[]>) => {
    try {
      setLoading(true)
      const branchesResponse = await branchOptionsService()
      setBranches(branchesResponse)

      // If we have selected rooms, fetch their branch data
      if (selectedRooms) {
        const branchIds = Object.keys(selectedRooms).map(Number)
        await Promise.all(branchIds.map(id => fetchRooms(id)))
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao carregar os dados iniciais')
    } finally {
      setLoading(false)
      setInitialLoadDone(true)
    }
  }

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

  useEffect(() => {
    fetchBranches()
  }, [])

  return {
    branches,
    loading,
    fetchRooms,
    initializeWithRooms,
    initialLoadDone,
  }
}