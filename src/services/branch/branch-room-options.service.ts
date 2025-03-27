import api from '@/services/api.ts'
import { Option } from '@/types/option.ts'

export const branchRoomOptionsService = async (branchId: number): Promise<Option<string>[]> => {
  const response = await api.get(`/branches/${branchId}/rooms/options`)
  return response.data
}
