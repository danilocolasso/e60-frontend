import api from '@/services/api'
import { Branch } from '@/types/branch.ts'
import { PaginatedPayload } from '@/types/paginated-payload.ts'
import { PaginatedResponse } from '@/types/paginated-response.ts'

export interface BranchListPayload extends PaginatedPayload {}

export interface BranchListResponse extends PaginatedResponse<Branch> {}

export const branchListService = async (
  payload: BranchListPayload,
): Promise<BranchListResponse> => {
  const response = await api.get('/branches', { params: payload })
  return response.data
}
