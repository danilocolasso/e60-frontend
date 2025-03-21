import api from '@/services/api'
import { Coupon } from '@/types/coupon'

export interface CouponEditPayload {
  id: number
}

export interface CouponEditResponse extends Coupon {}

export const couponEditService = async (
  payload: CouponEditPayload,
): Promise<CouponEditResponse> => {
  const response = await api.get(`/coupons/${payload.id}/edit`)
  return response.data
}
