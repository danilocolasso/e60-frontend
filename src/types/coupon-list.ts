import { CouponUsageType } from './coupon-usage-type'

export interface CouponList {
  id: number
  code: string
  discount: number
  branches: string[]
  quantity: number
  usage_type: CouponUsageType
  usages: number
}