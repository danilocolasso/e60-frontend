import api from '@/services/api'

export interface BranchDeletePayload {
  id: number
}

export interface BranchDeleteResponse {
  message: string
}

export const branchDeleteService = async (
  payload: BranchDeletePayload,
): Promise<BranchDeleteResponse> => {
  const response = await api.delete(`/branches/${payload.id}`)
  return response.data
}
