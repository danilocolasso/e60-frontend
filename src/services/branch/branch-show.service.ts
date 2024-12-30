import api from '@/services/api.ts'
import { Branch } from '@/types/Branch'

interface BranchShowPayload {
  id: number
}

interface BranchShowResponse extends Branch {}

export const branchShowService = async (
  payload: BranchShowPayload,
): Promise<BranchShowResponse> => {
  const response = await api.get(`/branches/${payload.id}`)
  return response.data
}
