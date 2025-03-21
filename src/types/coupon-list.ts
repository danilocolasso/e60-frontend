import { CouponDiscountType } from './coupon-discount-type'
import { CouponUsageType } from './coupon-usage-type'

export interface CouponList {
  id: number
  code: string
  discount: number
  discount_type: CouponDiscountType
  branches: string[]
  quantity: number
  usage_type: CouponUsageType
  usages: number
}