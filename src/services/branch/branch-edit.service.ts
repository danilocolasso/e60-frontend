import api from '@/services/api'
import { Branch } from '@/types/Branch'

export interface BranchEditPayload {
  id: number
}

export interface BranchEditResponse extends Branch {}

export const branchEditService = async (
  payload: BranchEditPayload,
): Promise<BranchEditResponse> => {
  const response = await api.get(`/branches/${payload.id}/edit`)
  return response.data
}
