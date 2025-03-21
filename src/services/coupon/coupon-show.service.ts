import api from '@/services/api.ts'
import { Coupon } from '@/types/coupon'

interface CouponShowPayload {
  id: number
}

interface CouponShowResponse extends Coupon {}

export const couponShowService = async (
  payload: CouponShowPayload,
): Promise<CouponShowResponse> => {
  const response = await api.get(`/coupons/${payload.id}`)
  return response.data
}
