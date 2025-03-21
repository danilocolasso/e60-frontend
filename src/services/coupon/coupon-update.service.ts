import { CouponUpdatePayload } from '@/schemas/coupon/couponUpdateSchema'
import api from '@/services/api'
import { Coupon } from '@/types/coupon'

interface CouponUpdateResponse extends Coupon {}

export const couponUpdateService = async (
  payload: CouponUpdatePayload,
): Promise<CouponUpdateResponse> => {
  const response = await api.put(`/coupons/${payload.id}`, payload)
  return response.data
}
