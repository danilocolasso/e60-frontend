import api from '@/services/api'

export interface CouponDeletePayload {
  id: number
}

export interface CouponDeleteResponse {
  message: string
}

export const couponDeleteService = async (
  payload: CouponDeletePayload,
): Promise<CouponDeleteResponse> => {
  const response = await api.delete(`/coupons/${payload.id}`)
  return response.data
}
