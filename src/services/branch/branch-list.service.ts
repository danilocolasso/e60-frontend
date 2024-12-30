import api from '@/services/api'
import { Branch } from '@/types/Branch'
import { PaginatedPayload } from '@/types/PaginatedPayload'
import { PaginatedResponse } from '@/types/PaginatedResponse'

export interface BranchListPayload extends PaginatedPayload {}

export interface BranchListResponse extends PaginatedResponse<Branch> {}

export const branchListService = async (
  payload: BranchListPayload,
): Promise<BranchListResponse> => {
  const response = await api.get('/branches', { params: payload })
  return response.data
}
