import { CouponCreatePayload } from '@/schemas/coupon/couponCreateSchema'
import api from '@/services/api'
import { Coupon } from '@/types/coupon'

interface CouponCreateResponse extends Coupon {}

export const couponCreateService = async (
  payload: CouponCreatePayload,
): Promise<CouponCreateResponse> => {
  const response = await api.post('/coupons', payload)
  return response.data
}
