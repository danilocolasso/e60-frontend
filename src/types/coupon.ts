import { CouponDiscountType } from './coupon-discount-type'
import { CouponUsageType } from './coupon-usage-type'

export interface Coupon {
  id: number
  code: string
  discount: number
  discount_type: CouponDiscountType
  branches: string[]
  usages: number
  usage_type: CouponUsageType
  quantity: number
  valid_until: Date
  start_time: string
  end_time: string
  partner_name: string
  valid_days: {
    sunday: boolean
    monday: boolean
    tuesday: boolean
    wednesday: boolean
    thursday: boolean
    friday: boolean
    saturday: boolean
  }
  booking_start_date: Date
  booking_end_date: Date
}
