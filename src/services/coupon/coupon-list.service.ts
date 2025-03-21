import api from '@/services/api'
import { PaginatedPayload } from '@/types/paginated-payload'
import { PaginatedResponse } from '@/types/paginated-response'
import { CouponList } from '@/types/coupon-list'
export interface CouponListPayload extends PaginatedPayload {}

export interface CouponListResponse extends PaginatedResponse<CouponList> {}

export const couponListService = async (
  payload: CouponListPayload,
): Promise<CouponListResponse> => {
  const response = await api.get('/coupons', { params: payload })
  return response.data
}
